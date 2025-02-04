// src/utils/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    addUser: (state, action) => action.payload,
    removeUser: () => null
  }
});

// Export the reducer as default
export default userSlice.reducer;

// Export actions
export const { addUser, removeUser } = userSlice.actions;