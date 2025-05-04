import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  isAuthenticated: !!localStorage.getItem('user'),
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signup: (state, action) => {
      const { username, email, password } = action.payload;
      const newUser = { username, email, password };
      localStorage.setItem('user', JSON.stringify(newUser));
      state.user = newUser;
      state.isAuthenticated = true;
    },
    login: (state, action) => {
      const { email, password } = action.payload;
      const storedUser = JSON.parse(localStorage.getItem('user'));
      if (
        storedUser &&
        storedUser.email === email &&
        storedUser.password === password
      ) {
        state.user = storedUser;
        state.isAuthenticated = true;
      } else {
        alert('Invalid credentials');
      }
    },
    logout: (state) => {
      localStorage.removeItem('user');
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { signup, login, logout } = authSlice.actions;
export default authSlice.reducer;
