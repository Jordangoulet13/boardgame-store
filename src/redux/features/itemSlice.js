import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //categories
  boardgames: null,
  gundams: null,
  jigsawpuzzles: null,
};

const itemSlice = createSlice({
  name: "item",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.boardgames = action.payload.boardgames;
      state.gundams = action.payload.gundams;
      state.jigsawpuzzles = action.payload.jigsawpuzzles;
    },
  },
});

export const { setItems } = itemSlice.actions;

export const getSelector = (key) => {
  const selectBoardGames = (state) => state.item.boardgames;
  const selectGundams = (state) => state.item.gundams;
  const selectJigsawPuzzles = (state) => state.item.jigsawpuzzles;
  let selectedSelector = selectBoardGames;
  switch (key) {
    case "boardgames":
      selectedSelector = selectBoardGames;
      break;

    case "gundams":
      selectedSelector = selectGundams;
      break;

    case "jigsawpuzzles":
      selectedSelector = selectJigsawPuzzles;
      break;

    default:
  }
  return selectedSelector;
};

export default itemSlice.reducer;
