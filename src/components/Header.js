import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { logout } from "../redux/slices/auth/authSlice.js";
import { isAuthenticated } from "../redux/slices/auth/selectors.js";
import { cleanProducts } from "../redux/slices/products/productsSlice.js";

import {
  Bar,
  Links,
  FlexContainer,
  Button,
} from "../styles/components/Header.styles.js";

export const Header = () => {
  const isAuth = useSelector(isAuthenticated);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(cleanProducts());
    dispatch(logout());
  };

  return (
    <Bar className="topnav" id="myTopnav">
      <Links to="/">Wizestore</Links>
      <FlexContainer>
        <Links to="/products">Products</Links>
        <Links to="/cart">Cart</Links>
        {isAuth ? (
          <Button onClick={handleLogout}>Logout</Button>
        ) : (
          <Links to="/login">Login</Links>
        )}
      </FlexContainer>
    </Bar>
  );
};
