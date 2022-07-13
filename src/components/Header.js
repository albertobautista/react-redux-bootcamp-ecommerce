import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext.jsx";
import {
  Bar,
  Links,
  FlexContainer,
} from "../styles/components/Header.styles.js";

export const Header = () => {
  const { isAuth } = useContext(AuthContext);
  return (
    <Bar className="topnav" id="myTopnav">
      <Links to="/">Wizestore</Links>
      <FlexContainer>
        <Links to="/cart">Cart</Links>
        <Links to="/products">Products</Links>
        {isAuth ? (
          <Links to="/login">Logout</Links>
        ) : (
          <Links to="/login">Login</Links>
        )}
      </FlexContainer>
    </Bar>
  );
};
