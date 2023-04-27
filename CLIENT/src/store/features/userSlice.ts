import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface User {
  name: string;
  id: string | number;
  email: string;
  role: string;
}
export interface userState {
  userInfo: object;
}
const initialState: userState = {
  userInfo: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    handleLogout: (state) => {
      state.userInfo = {};
    },
    handleLogIn: (state, action: PayloadAction<User>) => {
      state.userInfo = action.payload;
    },
  },
});

export const { handleLogIn, handleLogout } = userSlice.actions;
//
export default userSlice.reducer;
