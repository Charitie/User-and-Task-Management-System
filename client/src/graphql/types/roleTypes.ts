export interface IRole {
  id: string;
  name: string;
}

export interface IRolesList {
  getRoles: Array<IRole>;
}
