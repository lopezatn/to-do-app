import { createSlice } from "@reduxjs/toolkit";

const initialState = { username: "pepito", password: "pepito123" };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
    },
  },
});

export const { addUser } = userSlice;

export default userSlice.reducer;
