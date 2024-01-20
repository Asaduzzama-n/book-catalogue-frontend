import { showToast } from "@/utils/carousel/customToast/CustomToast";
import { createSlice } from "@reduxjs/toolkit";

interface ICartBooks {
  id: string;
  title: string;
  price: number;
  coverImg: {
    publicId: string;
    url: string;
  };
}

export interface ICartInitialState {
  books: ICartBooks[];
  total: number;
}

const initialState: ICartInitialState = {
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
        const message = "Already";
        showToast(message);
      } else {
        const { title, id, coverImg, price } = action.payload;
        const newItem = { title, price, id, coverImg };
        state.books.push(newItem);
        // state.books.push(action.payload);
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
    clearCart: (state) => {
      (state.books = []), (state.total = 0);
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
