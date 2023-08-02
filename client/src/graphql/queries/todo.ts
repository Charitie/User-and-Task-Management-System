import { gql } from "@apollo/client";

export const TODOS = gql`
  query {
    getTodoList {
      id
      task
      description
      completed
    }
  }
`;
