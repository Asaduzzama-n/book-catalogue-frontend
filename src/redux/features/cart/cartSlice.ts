import { IBook } from "@/types/globalTypes";
import { showToast } from "@/utils/carousel/customToast/CustomToast";
import { createSlice } from "@reduxjs/toolkit";

export interface ICart {
  books: IBook[];
  total: number;
}

const initialState: ICart = {
  books: [],
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingBook = state.books.find(
        (book) => book.title === action.payload.title
      );
      if (existingBook) {
        const message = "Already added";
        showToast(message);
      } else {
        state.books.push(action.payload);
        state.total = Number((state.total + action.payload.price).toFixed(2));
        showToast(action.payload.title.slice(0, 15) + "...");
      }
    },
    removeFromCart: (state, action) => {
      state.books = state.books.filter(
        (book) => book.title !== action.payload.title
      );
      state.total = Number((state.total - action.payload.price).toFixed(2));
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
