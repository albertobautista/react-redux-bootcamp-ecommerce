import React, { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Main } from "../styles/pages/Home.styles";

export const Login = () => {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUserNameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
  };
  return (
    <Main>
      <div className="card">
        <div className="card-body">
          <h5 class="card-title">Welcome to the WizeStore!</h5>
          <form onSubmit={handleSubmit}>
            <div classNameName="mb-3">
              <label htmlFor="usernameInput" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="usernameInput"
                aria-describedby="emailHelp"
                value={username}
                onChange={handleUserNameChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="passwordInput" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="passwordInput"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <button type="submit" className="btn btn-primary container-fluid">
              Login
            </button>
          </form>
        </div>
      </div>
    </Main>
  );
};
