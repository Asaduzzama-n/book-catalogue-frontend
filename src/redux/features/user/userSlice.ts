import { createSlice } from "@reduxjs/toolkit";

// interface IUser{
//     email:string,
//     id:string,
//     role:string,
//     isSubscribe:boolean,
// }

// interface IUserInitialState {
//   isLoading: boolean;
//   user: {
//     email: string | null;
//     id: string;
//     role: string;
//     isSubscribe: boolean;
//   };
// }

const initialState = {
  isLoading: true,
  user: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
