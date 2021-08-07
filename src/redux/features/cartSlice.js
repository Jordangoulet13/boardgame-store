import { createSlice } from "@reduxjs/toolkit";
import { addItemToCart, removeItemFromCart } from "./cartUtils";

const initialState = {
  cartItems: [],
  hidden: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItem: (state, action) => {
      state.cartItems = addItemToCart(
        state.cartItems,
        action.payload.addedItem,
        action.payload.quantity
      );
    },
    removeCartItem: (state, action) => {
      state.cartItems = removeItemFromCart(
        state.cartItems,
        action.payload.itemToRemove
      );
    },
  },
});

export const { addCartItem, removeCartItem } = cartSlice.actions;

export const selectCartItems = (state) => state.cart.cartItems;
export const selectCartItemsCount = (state) => {
  return state.cart.cartItems.reduce(
    (accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity,
    0
  );
};
export const selectCartItemAvailable = (state, item) => {
  return state.cart.cartItems
    ? state.cart.cartItems.map((cartItem) =>
        item.id === cartItem.id ? cartItem.quantity : null
      )
    : null;
};

export const selectCartPriceTotal = (state) => {
  return state.cart.cartItems.reduce(
    (accumalatedQuantity, cartItem) =>
      accumalatedQuantity + cartItem.quantity * cartItem.price,
    0
  );
};

export const selectCartPointsTotal = (state) => {
  return state.cart.cartItems.reduce(
    (accumalatedQuantity, cartItem) =>
      accumalatedQuantity + cartItem.quantity * cartItem.earns,
    0
  );
};

export default cartSlice.reducer;
