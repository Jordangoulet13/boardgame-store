import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  hidden: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItem: (state, action) => {
      let existingCartItem = state.cartItems.find(
        (cartItem) => cartItem.id === action.payload.addedItem.id
      );

      if (existingCartItem) {
        existingCartItem = {
          ...action.payload.addedItem,
          quantity: action.payload.addedQuantity,
        };
        state.cartItems.push(existingCartItem);
      } else {
        state.cartItems.push(action.payload.addedItem);
      }
    },
  },
});

export const { addCartItem } = cartSlice.actions;

export const selectCartItems = (state) => state.cart.cartItems;
export default cartSlice.reducer;
