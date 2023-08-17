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

export const LOGIN = gql`
  mutation LoginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      successful
      message
      email
      name
      roleId
      token
    }
  }
`;
