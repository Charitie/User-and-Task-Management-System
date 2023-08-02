import { gql } from "@apollo/client";

export const ADD_TODO = gql`
  mutation AddTodo($task: String!, $description: String!, $completed: Boolean!) {
    addTodo(task: $task, description: $description, completed: $completed) {
      task
      id
      description
      completed
    }
  }
`;
