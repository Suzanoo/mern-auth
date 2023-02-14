import { createSlice } from '@reduxjs/toolkit';

const userMenuSlice = createSlice({
  name: 'userMenu',
  initialState: {
    isExpanded: false,
  },
  reducers: {
    expandMenu: (state) => {
      state.isExpanded = true;
    },
    collapseMenu: (state) => {
      state.isExpanded = false;
    },
  },
});

export const { expandMenu, collapseMenu } = userMenuSlice.actions;

export default userMenuSlice.reducer;
