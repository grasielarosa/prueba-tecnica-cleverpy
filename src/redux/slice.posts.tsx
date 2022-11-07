import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Posts } from "../types";
import { RootState } from "./store";

const UNINITIALIZED = "UNINITIALIZED";
interface ISetCurrentPosts {
  type: string;
  payload: Posts[];
}
type State = Posts[] | typeof UNINITIALIZED | null;
const INITIAL_STATE: State = UNINITIALIZED;

// const slicePosts = createSlice({
//   name: "render",
//   initialState: INITIAL_STATE as State,
//   reducers: {
//     renderPosts: (state: State, { payload }: PayloadAction<Posts[]>) => {
//       const newPosts = payload;

//       if (state !== null && state !== UNINITIALIZED) {
//         state = newPosts;
//       }
//       console.log(state, "ggg");
//       return state;
//     },
//   },
// });

const slicePosts = createSlice({
  name: "posts",
  initialState: [] as Posts[],
  reducers: {
    renderPosts: (state, action) => [...state, action.payload],
  },
});

export const { actions, reducer } = slicePosts;
export const { renderPosts } = actions;
export default reducer;

export const usePosts = (state: any) => {
  return state.payload as Posts[];
};
