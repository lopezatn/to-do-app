import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./login/userSlice";

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
