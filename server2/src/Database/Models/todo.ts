import { Schema, model } from 'mongoose';

const todoSchema = new Schema({
  task: String,
  description: String,
  completed: Boolean
});

const Todo = model('Todo', todoSchema);
export default Todo;
