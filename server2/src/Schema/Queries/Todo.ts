import { GraphQLList } from 'graphql';
import { TodoType } from '../TypeDefs/TodoType';

export const GET_TODO_LIST = {
  type: new GraphQLList(TodoType),
  resolve(): string {
    return 'Tarus';
  }
};

export const newLife = 'My new life';

// export default GET_TODO_LIST;
