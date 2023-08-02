import React from "react";
import Loader from "../../components/Loader/Loader";
import { USERS } from "../../graphql/queries/users";
import { IUser, IUsersList } from "../../graphql/types/userTypes";
import { useQuery } from "@apollo/client";

const UsersList = () => {
  const { loading, error, data } = useQuery<IUsersList>(USERS);
  return (
    <div>
        <h1>All Users</h1>
      <Loader loading={loading} error={error} />

      <ul>
        {data?.getAllusers?.map((user: IUser) => {
          return <li key={user.id}>{user.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default UsersList;
