import mongoose from 'mongoose';
import { getConfig } from '../Config/index,';

import Todo from './Models/todolist';

const todoList = [
  { description: 'Name of the Wind', task: 'Fantasy', id: 1, completed: false },
  { description: 'Laugh', task: 'Okay', id: 2, completed: false },
  { description: 'fall', task: 'fall', id: 3, completed: false },
  { description: 'Go of the Wind', task: 'de', id: 4, completed: false },
  { description: 'Di of the Wind', task: 'ds', id: 5, completed: false },
  { description: 'So of the Wind', task: 'wed', id: 6, completed: false },
  { description: 'FRom of the Wind', task: 'red', id: 7, completed: false },
  { description: 'Baf of the Wind', task: 'fer', id: 8, completed: false }
];

const { dbPassword, dbUsername, dbName } = getConfig();
const connectionString = `mongodb+srv://${dbUsername}:${dbPassword}@cluster0.k4sugd7.mongodb.net/${dbName}?retryWrites=true&w=majority`;

export async function connect() {
  try {
    await mongoose.connect(connectionString);

    console.log('connected to MongoDB');
  } catch (error) {
    console.log('DB ERROR::: ', error);
  }
}

// const seedDB = async () => {
//   //   await Author.deleteMany({});
//   // await Book.deleteMany({});
//   //   await Author.insertMany(authors);
//   await Todo.insertMany(todoList);
// };

// seedDB();
// .then(() => {
//   mongoose.connection.close();
// })
// .catch((err) => console.log('seed error::', err));
