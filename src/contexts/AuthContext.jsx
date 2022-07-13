import { createContext, useState } from "react";
import loginApi from "../utils/loginApi";

export const AuthContext = createContext([]);
const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const login = (username, password) => {
    loginApi(username, password)
      .then((resp) => {
        setIsAuth(true);
      })
      .catch((error) => {
        setIsAuth(false);
        alert("Credenciales Incorrectas");
      });
  };
  const logout = () => {
    setIsAuth(false);
  };

  return (
    <AuthContext.Provider value={{ isAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
