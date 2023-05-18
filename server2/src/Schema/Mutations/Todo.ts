import {
  GraphQLString,
  GraphQLBoolean,
  GraphQLNonNull,
  GraphQLID
} from 'graphql';
import { ITodo, TodoType } from '../TypeDefs/TodoType';
import Todo from '../../Database/Models/todolist';
import { MessageType } from '../TypeDefs/MessageType';

export const ADD_TODO = {
  type: TodoType,
  args: {
    task: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: new GraphQLNonNull(GraphQLString) },
    completed: { type: new GraphQLNonNull(GraphQLBoolean) }
  },
  async resolve(_: any, args: any) {
    const { task, description, completed } = args;
    const todo = await new Todo({ task, description, completed });
    return todo.save();
  }
};

export const UPDATE_TASK = {
  type: MessageType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    completed: { type: new GraphQLNonNull(GraphQLBoolean) }
  },
  async resolve(_: any, args: any) {
    try {
      // TODO: update task status correctly
      const { id, completed } = args;
      const task = await Todo.findOne({ _id: id });

      if (!task) {
        return { successful: false, message: 'NO SUCH TASK' };
      }

      //   update task to not completed if completed and vice versa
      if ((task?.completed && !completed) || (!task?.completed && completed)) {
        await Todo.updateOne({ _id: id }, { completed }, { new: true });
        return {
          successful: true,
          message: 'TASK COMPLETION UPDATED SUCCESSFULLY TO ' + completed
        };
      } else {
        return {
          successful: false,
          message: 'TASK COMPLETION ALREADY UPDATED TO ' + completed
        };
      }
    } catch (error) {
      return { successful: false, message: 'TASK COMPLETION UPDATE FAILED' };
    }
  }
};

export const DELETE_TODO = {
  type: MessageType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) }
  },
  async resolve(_: any, args: any) {
    try {
      const { id } = args;
      const deleteItem = await Todo.findOneAndDelete({ _id: id });
      if (deleteItem) {
        return { successful: true, message: 'DELETE WORKED' };
      } else {
        return { successful: false, message: 'ITEM NOT FOUND' };
      }
    } catch (error) {
      return { successful: false, message: 'DELETE FAILED' };
    }
  }
};
