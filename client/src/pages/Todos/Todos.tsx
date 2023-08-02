import { useQuery } from "@apollo/client";

import { TODOS } from "../../graphql/queries/todo";
import { ITodo, ITodoList } from "../../graphql/types/todoTypes";
import Loader from "../../components/Loader/Loader";
import styles from "./Todo.module.css";

const Todos = () => {
  const { loading, error, data } = useQuery<ITodoList>(TODOS);

  return (
    <div>
      <h1>All Tasks</h1>
      <Loader loading={loading} error={error} />

      <ul className={styles.ul}>
        {data?.getTodoList?.map((todo: ITodo) => {
          return <li key={todo.id}>{todo.task}</li>;
        })}
      </ul>
    </div>
  );
};

export default Todos;
