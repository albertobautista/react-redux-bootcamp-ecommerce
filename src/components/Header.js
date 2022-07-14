import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/slices/auth/authSlice.js";
import { isAuthenticated } from "../redux/slices/auth/selectors.js";
import {
  Bar,
  Links,
  FlexContainer,
} from "../styles/components/Header.styles.js";

export const Header = () => {
  const isAuth = useSelector(isAuthenticated);
  const dispatch = useDispatch();

  return (
    <Bar className="topnav" id="myTopnav">
      <Links to="/">Wizestore</Links>
      <FlexContainer>
        <Links to="/cart">Cart</Links>
        <Links to="/products" onCL>
          Products
        </Links>
        {isAuth ? (
          <Links onClick={() => dispatch(logout())}>Logout</Links>
        ) : (
          <Links to="/login">Login</Links>
        )}
      </FlexContainer>
    </Bar>
  );
};
