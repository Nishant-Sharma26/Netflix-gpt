// src/utils/appStore.js
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"; // Default import

const store = configureStore({
    reducer: {
      user: userReducer
    }
  });

export default store; 