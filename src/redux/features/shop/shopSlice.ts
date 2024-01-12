import { createSlice } from "@reduxjs/toolkit";

export interface IShopInitialState {
  language?: string | null;
  category?: string | null;
  minPrice?: number | null;
  maxPrice?: number | null;
}

const initialState: IShopInitialState = {
  language: null,
  category: null,
  minPrice: null,
  maxPrice: null,
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      if (state.language === action.payload) {
        state.language = null;
      } else {
        state.language = action.payload;
      }
    },
    setCategory: (state, action) => {
      if (state.category === action.payload) {
        state.category = null;
      } else {
        state.category = action.payload;
      }
    },
  },
});

export const { setLanguage, setCategory } = shopSlice.actions;
export default shopSlice.reducer;
