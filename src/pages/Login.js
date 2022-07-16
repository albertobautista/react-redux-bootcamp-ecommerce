import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { login } from "../redux/slices/auth/authSlice";

import {
  Button,
  Form,
  Input,
  Label,
  Title,
  Wrapper,
} from "../styles/pages/Login.styles";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleUserNameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(username, password));
  };
  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <Title>Welcome to the WizeStore!</Title>
        <Label htmlFor="usernameInput">Username</Label>
        <Input
          id="usernameInput"
          type="text"
          value={username}
          onChange={handleUserNameChange}
        />
        <Label htmlFor="passwordInput">Password</Label>
        <Input
          id="passwordInput"
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <Button>Login</Button>
      </Form>
    </Wrapper>
  );
};
