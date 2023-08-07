import { Schema, model } from 'mongoose';

const permissionSchema = new Schema({
  right: { type: String, unique: true }
});

const Permission = model('Permission', permissionSchema);

export default Permission;
