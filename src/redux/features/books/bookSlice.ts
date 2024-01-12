import { createSlice } from "@reduxjs/toolkit";

export interface IBookInitialState {
  searchKey?: string;
  maxPrice?: number;
  minPrice?: number;
  category?: string;
  author?: string;
  limit?: number;
  sortOrder?: string;
  sortBy?: string;
}

const initialState: IBookInitialState = {
  searchKey: "",
  maxPrice: 5000,
  minPrice: 1,
  category: "",
  author: "",
  sortBy: "",
  sortOrder: "desc",
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchKey = action.payload;
    },
  },
});

export const { setSearchTerm } = bookSlice.actions;
export default bookSlice.reducer;
