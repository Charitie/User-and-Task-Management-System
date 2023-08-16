import React, { ChangeEvent, FormEvent, useState } from "react";
import { useQuery } from "@apollo/client";

import { CustomInput } from "../../components/Form/CustomInput";
import { ILoginUser } from "../../graphql/types/userTypes";
import { LOGIN } from "../../graphql/queries/users";

interface LoginProps {}

export const Login: React.FC<LoginProps> = ({}) => {
  const [loginData, setLoginData] = useState<ILoginUser>({ email: "", password: "" });
  //   const [errorMessage, setErrorMessage] = useState<ApolloError | undefined>();
  const [loginUser, { data, loading, error, reset }] = useMutation<{ loginUser: ILoginUser }>(LOGIN);

  const { email, password } = loginData;
  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { value, name, type } = e.target;
    let inputVal = type === "number" ? Number(value) : value;
    setLoginData({ ...loginData, [name]: inputVal });
  };

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await loginUser({ variables: loginData });
      if (!error) {
        // setFormData({ name: "", email: "", password: "", age: 0, roleId: "" });
        console.log(data, loading, error, reset);
      }
    } catch (err: any) {
      console.log("err::", err, "ERROR::", error);
    //   setErrorMessage(err.message);
    }
  };
  return (
    <form onSubmit={handleLogin} className="user-form">
      <h1>Login</h1>
      <CustomInput
        type="email"
        name="email"
        value={email}
        onChange={handleInputChange}
        placeholder="Email Address"
        required={true}
      />

      <input
        type="password"
        name="password"
        value={password}
        onChange={handleInputChange}
        placeholder="Password"
        required
      />
      {/* <input type="submit" value="Add User" disabled={loading} /> */}
    </form>
  );
};
