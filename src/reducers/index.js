import { configureStore } from "@reduxjs/toolkit";

import { stepperReducer, userReducer } from "./userReducer";

const store = configureStore({
  reducer: {
    user: userReducer,
    stepper: stepperReducer,
  },
});

export default store;
