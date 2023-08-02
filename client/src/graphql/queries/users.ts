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
