import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation AddUser($name: String!, $email: String!, $password: String!, $age: Int!, $roleId: String!) {
    addUser(name: $name, email: $email, password: $password, age: $age, roleId: $roleId) {
      name
      email
      password
      age
      roleId
    }
  }
`;
