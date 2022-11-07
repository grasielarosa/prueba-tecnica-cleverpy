import { configureStore } from "@reduxjs/toolkit";
import { renderPosts } from "./slice.posts";

const store = configureStore({
  reducer: {
    posts: renderPosts,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
