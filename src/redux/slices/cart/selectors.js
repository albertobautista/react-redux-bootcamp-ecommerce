const { createSelector } = require("@reduxjs/toolkit");

export const cart = (state) => state.cart.cartItems;

export const cartTotalSelector = createSelector([cart], (cart) =>
  cart.reduce((total, current) => (total += current.quantity), 0)
);

export const cartTotalPriceSelector = createSelector([cart], (cart) =>
  cart.reduce(
    (total, current) => (total += current.price * current.quantity),
    0
  )
);
