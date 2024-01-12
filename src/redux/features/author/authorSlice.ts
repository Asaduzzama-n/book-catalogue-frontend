import { createSlice } from "@reduxjs/toolkit";

export interface IAuthorInitialState {
  name?: string;
}

const initialState: IAuthorInitialState = {
  name: "",
};

const authorSlice = createSlice({
  name: "author",
  initialState,
  reducers: {},
});

export const {} = authorSlice.actions;
export default authorSlice.reducer;
