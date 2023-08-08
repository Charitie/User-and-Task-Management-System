import { Schema, model } from 'mongoose';

const permissionSchema = new Schema({
  right: { type: String, unique: true },
  roles: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Role'
    }
  ]
});

const Permission = model('Permission', permissionSchema);

export default Permission;
