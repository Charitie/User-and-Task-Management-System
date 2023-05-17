import { todoList } from '../DB';

const Resolvers = {
  Query: {
    getTodoList: () => todoList,
    getSingleTodo: (_: any, args: any) => {
      console.log('Args:', args);
      return todoList.find((todo) => todo.id === args.id);
    }
  }
};

export default Resolvers;
