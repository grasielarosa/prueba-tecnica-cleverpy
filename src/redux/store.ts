import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./slice.posts";

const store = configureStore({
  reducer: {
    render: postsReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
