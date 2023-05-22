import { graphqlHTTP } from 'express-graphql';
import { schema } from '../../Schema/index';

const usersMock = [
  { name: 'tarus', email: 'tarus@gmail.com', age: 89, password: 'regfef' },
  { name: 'tarus', email: 'tarus@gmail.com', age: 89, password: 'regfef' },
  { name: 'tarus', email: 'tarus@gmail.com', age: 89, password: 'regfef' }
];
// create a graphlhttp middleware
const middleware = graphqlHTTP({
  schema,
  rootValue: {
    id: 'user',
    loaders: {
      users: () => usersMock
    }
  }
});

// create a mocked request
const request = {
  method: 'POST',
  headers: {},
  body: { query: '{ user { users { name } } }' }
};

// create a mocked response, graphql middleware calls json function to set response data, so we stub it.
const response = {
  setHeader: jest.fn(),
  end: jest.fn(),
  json: jest.fn()
};

// call middleware function with mocked response and request
await middleware(request, response);

// get json's stub function arguments, this is actually a data returned by graphql middleware
const responseData = response.json.mock.calls[0][0];
//now we can do two things: check that the data returned is equal what we passed as a mock
expect(responseData).toEqual(countriesMock);
// or just use jest.snapshot to snapshot
expect(responseData).toMatchSnapshot();
