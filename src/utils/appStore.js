// src/utils/appStore.js
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice" // Default import

const store = configureStore({
    reducer: {
      user: userReducer,
      movies: moviesReducer,

    },
  });

export default store; 