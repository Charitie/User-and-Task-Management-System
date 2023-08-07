import { Schema, model } from 'mongoose';

const PermissionType = { type: Schema.Types.ObjectId, ref: 'Permission' };

const roleSchema = new Schema({
  name: { type: String, unique: true },
  permissions: [PermissionType]
});

const Role = model('Role', roleSchema);

export default Role;
