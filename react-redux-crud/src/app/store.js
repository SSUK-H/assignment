import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../posts/postSlice";
import { loadFromLocalStorage, saveToLocalStorage } from "./localStorage";

const preloadedState = loadFromLocalStorage();

const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
  preloadedState,
});

// store 상태가 업뎃될 때마다 로컬 스토리지에 저장
store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
