import { createSlice } from "@reduxjs/toolkit";
import { addItemToCart } from "./cartUtils";

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
  },
});

export const { addCartItem } = cartSlice.actions;

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

export default cartSlice.reducer;
