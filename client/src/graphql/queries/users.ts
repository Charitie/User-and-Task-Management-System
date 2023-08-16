import { gql } from "@apollo/client";

export const USERS = gql`
  query {
    getAllusers {
      id
      name
      email
      age
      roleId
    }
  }
`;

export const LOGIN = gql`
  query LoginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      email
      password
    }
  }
`;
