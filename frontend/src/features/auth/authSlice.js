import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from './authService';

/*

*/
// Fetch user from localStorage & cast to JSON object
const user = JSON.parse(localStorage.getItem('user'));

// Initialize user state
const initialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

// Create async action: register
export const register = createAsyncThunk(
  // async type
  'auth/register',
  // function return payload
  async (user, thunkAPI) => {
    try {
      return await authService.register(user);
    } catch (err) {
      const message =
        err.message ||
        (err.response && err.response.data && err.response.data.message) ||
        err.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Create async action: login
export const login = createAsyncThunk(
  // async type
  'auth/login',
  // function return payload
  async (user, thunkAPI) => {
    try {
      return await authService.login(user);
    } catch (err) {
      const message =
        err.message ||
        (err.response && err.response.data && err.response.data.message) ||
        err.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Create async action: logout
export const logout = createAsyncThunk('auth/logout', async () => {
  await authService.logout();
});

// Create slice
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = '';
    },
  },
  // Manage payload life cycle
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
      });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
