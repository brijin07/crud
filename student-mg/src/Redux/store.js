import { configureStore } from "@reduxjs/toolkit";
import searchslice from "./searchslice";

const store = configureStore({
    reducer: {
      input:searchslice,
    },
  });

  export default store;
