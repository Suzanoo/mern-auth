import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import userMenu from '../features/other/userMenuSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    userMenu: userMenu,
  },
});
