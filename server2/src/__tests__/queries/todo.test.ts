import request from 'supertest';

const graphQLEndpoint = 'http://localhost:5000/graphql';

const udpadteTodoData = {
  query: `mutation UpdateTask($id: ID!, $completed: Boolean!) {
              updateTask(id: $id, completed: $completed) {
                  successful
                  message
              }
          }`,
  variables: {
    id: '6465f0041ce6a7648f93f547',
    completed: true
  }
};

const addTodoData = {
  query: `mutation AddTodo($task: String!, $description: String!, $completed: Boolean!) {
    addTodo(task: $task, description: $description, completed: $completed) {
                    task
                    id
                    description
                    completed
                }
            }`,
  variables: {
    description: 'Testing add todo',
    task: 'Test Add Todo',
    completed: false
  }
};

describe('TODO ', () => {
  test('Add todo', async () => {
    request(graphQLEndpoint)
      .post('?')
      .send(addTodoData)
      .expect(200)
      .end(async (error, response) => {
        if (error) console.error('ERROR::::', error, 'response::', response);
        if (response) {
          const res = JSON.parse(response.text);
          expect(res.data.addTodo).toEqual({
            description: 'Testing add todo',
            task: 'Test Add Todo',
            completed: false
          });
        }
      });
  });

  test('Updates pet and returns it', async () => {
    request(graphQLEndpoint)
      .post('?')
      .send(udpadteTodoData)
      .expect(200)
      .end(async (error, response) => {
        if (error) console.error('ERROR::::', error, 'response::', response);
        if (response) {
          const res = JSON.parse(response.text);
          expect(res.data.updateTask).toEqual({
            successful: false,
            message: 'TASK COMPLETION ALREADY UPDATED TO true'
          });
        }
      });
  });
});
