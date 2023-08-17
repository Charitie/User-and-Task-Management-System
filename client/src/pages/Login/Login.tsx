import React, { ChangeEvent, FormEvent, useState } from "react";
import { ApolloError, useMutation } from "@apollo/client";

import { CustomInput } from "../../components/Form/CustomInput";
import { ILoginResponse, ILoginUser } from "../../graphql/types/userTypes";
import { LOGIN } from "../../graphql/mutations/user";

interface LoginProps {}

export const Login: React.FC<LoginProps> = ({}) => {
  const [loginData, setLoginData] = useState<ILoginUser>({ email: "", password: "" });
  const [failed, setFailed] = useState<boolean>(false);

  const [loginUser, { data, loading, error, reset }] = useMutation<{ loginUser: ILoginResponse }>(LOGIN);

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
      if (data) {
        const { name, email, roleId, token, successful } = data?.loginUser;
        if (successful) {
          localStorage.setItem("todotoken", token);
          localStorage.setItem("user", JSON.stringify({ name, email, roleId }));
        } else {
          console.log("am here-----");
          setFailed(true);
        }
      }
    } catch (err: any) {
      setFailed(true);
    }
  };

  console.log(failed, data?.loginUser);
  return (
    <form onSubmit={handleLogin} className="user-form">
      <h1>Login</h1>
      {failed && <p style={{ fontSize: "2rem", color: "red" }}>Failed to login...!! {data?.loginUser.message}</p>}
      <CustomInput
        type="email"
        name="email"
        value={email}
        onChange={handleInputChange}
        placeholder="Email Address"
        required={true}
      />

      <CustomInput
        type="password"
        name="password"
        value={password}
        onChange={handleInputChange}
        placeholder="Password"
        required
      />
      <CustomInput type="submit" value="LOGIN" disabled={loading} />
    </form>
  );
};
