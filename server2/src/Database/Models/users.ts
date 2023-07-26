import { Schema, model } from 'mongoose';
const emailRegex = /^([\w-.]+@([\w-]+\.)+[\w-]{2,4})?$/;

const userSchema = new Schema({
  name: String,
  email: { type: String, unique: true, match: emailRegex },
  password: String,
  age: Number,
  token: { type: String },
  roleId: String
});

const User = model('User', userSchema);
export default User;
