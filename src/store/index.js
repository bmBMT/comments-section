import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import commentsSlice from "./slices/commentsSlice";

const rootReducer = combineReducers({
  user: userSlice,
  comments: commentsSlice
})

export const store = configureStore({
  reducer: rootReducer,
})