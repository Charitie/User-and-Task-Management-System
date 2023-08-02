import { ChangeEvent, FormEvent, useState } from "react";
import { IUser } from "../../graphql/types/userTypes";
import "./User.css";
import { ApolloError, useMutation, useQuery } from "@apollo/client";
import { ADD_USER } from "../../graphql/mutations/user";
import Loader from "../../components/Loader/Loader";
import { IRole, IRolesList } from "../../graphql/types/roleTypes";
import { ROLES } from "../../graphql/queries/roles";

const AddUser = () => {
  const [formData, setFormData] = useState<IUser>({ name: "", email: "", password: "", age: 0, roleId: "" });
  const [errorMessage, setErrorMessage] = useState<ApolloError | undefined>();
  const [addUser, { data, loading, error, reset }] = useMutation<{ addUser: IUser }>(ADD_USER);
  const roles = useQuery<IRolesList>(ROLES);

  const { name, email, password, age, roleId } = formData;
  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { value, name, type } = e.target;
    let inputVal = type === "number" ? Number(value) : value;
    setFormData({ ...formData, [name]: inputVal });
  };

  const handleSubmitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await addUser({ variables: formData });
      if (!error) {
        // setFormData({ name: "", email: "", password: "", age: 0, roleId: "" });
        console.log(data, loading, error, reset);
      }
    } catch (err) {
      setErrorMessage(error?.message);
      console.log("err::", err, "ERROR::", error);
    }
  };

  console.log('msg::',errorMessage);
  return (
    <form onSubmit={handleSubmitForm} className="user-form">
      <Loader loading={roles.loading} error={roles.error} />
      <h1>User Details</h1>
      <input type="text" name="name" value={name} onChange={handleInputChange} placeholder="Full Name" required />
      <input
        type="email"
        name="email"
        value={email}
        onChange={handleInputChange}
        placeholder="Email Address"
        required
      />
      <input type="number" name="age" value={age} onChange={handleInputChange} placeholder="User Role" required />
      <select name="roleId" value={roleId} onChange={handleInputChange}>
        <option>Select role...</option>
        {roles?.data?.getRoles?.map((role: IRole) => {
          return (
            <option key={role.id} value={role.id}>
              {role.name}
            </option>
          );
        })}
      </select>
      <input
        type="password"
        name="password"
        value={password}
        onChange={handleInputChange}
        placeholder="Password"
        required
      />
      <input type="submit" value="Add User" disabled={loading} />
    </form>
  );
};

export default AddUser;
