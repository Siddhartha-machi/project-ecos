import { createSlice } from "@reduxjs/toolkit";

import { ROLES } from "../../global/constants";
// import { userState } from "../../Types/reduxTypes"; --fix

const initialState = {
  currentUser: {
    first_name: "Siddhartha Reddy",
    last_name: "Machi",
    role: ROLES.unauthenticated,
    username: null,
    joined_date: "12th July 2012",
    active: false,
  },
  usersList: [],
};
const userSlice = createSlice({
  name: "user-slice",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = { ...action.payload };
      return state;
    },
    resetUser: (state) => {
      state.currentUser = { ...initialState.currentUser };
      return state;
    },
    setUsersList: (state, action) => {
      state.usersList = action.payload;
      return state;
    },
  },
});

export default userSlice.reducer;

export const { setCurrentUser, resetUser, setUsersList } = userSlice.actions;
