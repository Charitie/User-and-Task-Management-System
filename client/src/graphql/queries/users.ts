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

// export const IS_LOGGED_IN = gql`
//   query IsUserLoggedIn {
//     isLoggedIn @client
//   }
// `;
