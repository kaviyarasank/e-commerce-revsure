import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loader: false,
};

const userSlice = createSlice({
  name: "statics",
  initialState,
  reducers: {
   
    loader: (state, action) => {
      state.loader = action.payload;
    },
    
  },
});
export const {  loader } = userSlice.actions;
export default userSlice.reducer;
