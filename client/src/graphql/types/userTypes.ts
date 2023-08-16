export interface IUser {
  id?: string;
  name: string;
  email: string;
  password: string;
  age: number;
  roleId: string;
}

export interface IUsersList {
  getAllusers: Array<IUser>;
}

export interface IPasswordEncryption {
  password: string;
  saltRounds: number;
}

// TODO: how to extends IPasswordEncryption for password type only
export interface IPasswordComparison {
  password: string;
  storedHashedPassword: string | undefined; //TODO:: should not be undefine,
}
export interface IJWT {
  payload: string | object | Buffer;
  secretKey: string;
  expiresIn: string;
}

export interface ILoginUser {
  email: string;
  password: string;
}
