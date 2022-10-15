// store.js
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

export const store = configureStore({
  reducer: {
    rootReducer: rootReducer,
  },
  // other options e.g middleware, go here
});
