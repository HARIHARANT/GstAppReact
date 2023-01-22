import { createSlice } from '@reduxjs/toolkit';

export const loginSlice = createSlice({
  name: 'login',
  initialState: {},
  reducers: {
    login: (state, action) => {
      console.log('Data:: '+action);
      state.value = action.payload;
    },
  },
});

export const { login } = loginSlice.actions;
export default loginSlice.reducer;
