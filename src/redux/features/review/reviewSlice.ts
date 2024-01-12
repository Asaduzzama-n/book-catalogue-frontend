import { createSlice } from "@reduxjs/toolkit";

export interface IReviewInitialState {
  pageNumber: number;
  limit?: number;
  sortBy?: string;
  rating?: string | null;
  sortOrder?: string;
  helpful?: boolean;
}

const initialState: IReviewInitialState = {
  pageNumber: 1,
  limit: 5,
  sortBy: "",
  rating: null,
  sortOrder: "desc",
  helpful: false,
};

const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    changePageNumber: (state, action) => {
      state.pageNumber = action.payload;
    },
    setRating: (state, action) => {
      state.rating = action.payload;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload.sortBy;
      state.sortOrder = action.payload.sortOrder;
    },
    setHelpful: (state, action) => {
      state.helpful = action.payload;
    },
  },
});

export const { changePageNumber, setRating, setSortBy, setHelpful } =
  reviewSlice.actions;
export default reviewSlice.reducer;
