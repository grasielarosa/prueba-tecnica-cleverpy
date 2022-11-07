import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Posts } from "../types";

const initialState: Posts[] = [];
const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPosts: (state, action: PayloadAction<Posts[]>) => {
      if (state !== null) {
        state = action.payload;
      }
      return state;
    },
  },
});

export const { addPosts } = postsSlice.actions;
export default postsSlice.reducer;
