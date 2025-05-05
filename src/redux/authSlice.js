// redux/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const storedUser = JSON.parse(localStorage.getItem('loggedInUser'));

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: !!storedUser,
    user: storedUser || null,
  },
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      localStorage.setItem('loggedInUser', JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      localStorage.removeItem('loggedInUser');
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
