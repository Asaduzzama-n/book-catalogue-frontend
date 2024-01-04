import { createSlice } from "@reduxjs/toolkit";

interface IReviewInitialState {
  pageNumber: number;
  limit?: number;
  sortBy?: string;
  filterBy?: string;
}

const initialState: IReviewInitialState = {
  pageNumber: 1,
  limit: 5,
  sortBy: "desc",
};

const reviewSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    changePageNumber: (state, action) => {
      state.pageNumber = action.payload;
    },
  },
});

export const { changePageNumber } = reviewSlice.actions;
export default reviewSlice.reducer;
