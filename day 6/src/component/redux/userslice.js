import { createSlice} from "@reduxjs/toolkit";


const initialState = {
    user: {
      username: localStorage.getItem('username') || null,
    },
  };
  
  export const userslice = createSlice({
    name: "user",
    initialState,
    reducers: {
      login: (state, action) => {
        state.user = { username: action.payload };
        localStorage.setItem('username', action.payload);
      },
      logout: (state) => {
        state.user = { username: null };
        localStorage.removeItem('username');
      },
    },
  });
  
  export const { login, logout } = userslice.actions;
  export const selectUser = (state) => state.user;
  export default userslice;