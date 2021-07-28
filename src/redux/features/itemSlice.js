import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  collections: null,
  item: null,
};

const itemSlice = createSlice({
  name: "item",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.collections = action.payload.collections;
    },
    setItem: (state, action) => {
      state.item = action.payload.item;
    },
    sortByDate: (state) => {
      state.collections = state.collections
        .slice()
        .sort((a, b) => (a.date > b.date ? 1 : b.date > a.date ? -1 : 0));
    },
    sortByLowest: (state) => {
      state.collections = state.collections
        .slice()
        .sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    },
    sortByHighest: (state) => {
      state.collections = state.collections
        .slice()
        .sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    },
    sortByNameAsc: (state) => {
      state.collections = state.collections
        .slice()
        .sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));
    },
    sortByNameDesc: (state) => {
      state.collections = state.collections
        .slice()
        .sort((a, b) => (b.name > a.name ? 1 : a.name > b.name ? -1 : 0));
    },
    sortByPop: (state) => {
      state.collections = state.collections
        .slice()
        .sort((a, b) => (a.id > b.id ? 1 : b.id > a.id ? -1 : 0));
    },
  },
});

export const {
  setItems,
  setItem,
  sortByDate,
  sortByLowest,
  sortByHighest,
  sortByNameAsc,
  sortByNameDesc,
  sortByPop,
} = itemSlice.actions;

export const selectCollections = (state) => state.item.collections;
export const selectItem = (state) => state.item.item;
export default itemSlice.reducer;
