import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Posts } from "../types";
import { RootState } from "./store";

const INITIAL_STATE: Posts[] = [
  {
    userId: 0,
    id: 0,
    title: "",
    body: "",
    name: "",
    role: "",
    avatar: "",
  },
];
const slicePosts = createSlice({
  name: "posts",
  initialState: INITIAL_STATE,
  reducers: {
    renderPosts: (state, actions: PayloadAction<Posts[]>) => {
      return (state = actions.payload);
    },
  },
});

export default slicePosts.reducer;
export const { renderPosts } = slicePosts.actions;

export const usePosts = (state: Posts) => {
  return state.posts as Posts[];
};
