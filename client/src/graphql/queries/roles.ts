import { gql } from "@apollo/client";

export const ROLES = gql`
  query {
    getRoles {
      id
      name
    }
  }
`;
