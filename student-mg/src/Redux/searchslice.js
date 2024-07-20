import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: '',
};

const inputSlice = createSlice({
  name: 'input',
  initialState,
  reducers: {
    setinputvalue: (state, action) => {
      state.value = action.payload;
    }

 
  }
});

export const { setinputvalue } = inputSlice.actions;
export default inputSlice.reducer;
