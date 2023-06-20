import axios from 'axios';
import { IUser } from '../../Schema/TypeDefs/UserType';
import { getConfig } from '../../Config/index,';
import { main } from '../..';

const { port } = getConfig();
const graphQLEndpoint = `http://localhost:${port}/graphql`;

// beforeAll(async () => {
//   await main();
// });

const users = [
  {
    age: 20,
    email: 'charitytarus@gmail.com',
    id: '646b153b743f5b1243f12353',
    name: 'Charity Tarus',
    password: 'Tarus@123'
  },
  {
    age: 20,
    email: 'maryloren@gmail.com',
    id: '646b1ca697525a818589fbfb',
    name: 'Mary Loren',
    password: '$2b$10$ko9RjkMxTM6AWY3mL16.zOzO.gYu//2sDxZXfGWqBRmn2AeQv2hY6'
  },
  {
    age: 30,
    email: 'carenjoe@gmail.com',
    id: '646b20495e0622211fe91476',
    name: 'Caren Joe',
    password: '$2b$10$mQtIA1dEHjVby5eRDv5w9u0vvM1scM61lfq2FdAIOAh3bXPlORWry'
  }
];

const postData = {
  query: ` query Users {
      getAllusers {
        id
        name
        email
        age
        password
      }
    }`
};

async function fetchUsers() {
  try {
    const res = await axios.post(graphQLEndpoint, postData);
    return res.data.data.getAllusers;
  } catch (error) {
    // console.log('ERRR::', error);
  }
}

describe('Get all users', () => {
  test('fetch all my users using fetch', async () => {
    const data: Promise<IUser[]> = await fetchUsers();
    const usersListLength = (await data).length;

    // expect(data).toEqual(users);
    expect(usersListLength).toBeGreaterThan(0);
  });
});
