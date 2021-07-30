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
export default cartSlice.reducer;
