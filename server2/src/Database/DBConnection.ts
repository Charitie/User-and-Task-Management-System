import mongoose from 'mongoose';
import { getConfig } from '../Config/index,';

const { dbPassword, dbUsername } = getConfig();
const connectionString = `mongodb+srv://${dbUsername}:${dbPassword}@cluster0.k4sugd7.mongodb.net/?retryWrites=true&w=majority`;

export async function connect() {
  try {
    await mongoose.connect(connectionString);
    console.log('connected to MongoDB');
  } catch (error) {
    console.log(error);
  }
}
