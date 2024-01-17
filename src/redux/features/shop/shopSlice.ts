import { createSlice } from "@reduxjs/toolkit";

export interface IShopInitialState {
  language?: string | null;
  category?: string | null;
  minPrice?: number;
  maxPrice?: number;
  isFilterApplied?: boolean;
}

const initialState: IShopInitialState = {
  language: null,
  category: null,
  minPrice: 0,
  maxPrice: 5000,
  isFilterApplied: false,
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
    setPriceRange: (state, action) => {
      state.minPrice = action.payload.minPrice;
      state.maxPrice = action.payload.maxPrice;
    },
    setIsFilterApplied: (state, action) => {
      state.isFilterApplied = action.payload;
    },
  },
});

export const { setLanguage, setCategory, setPriceRange, setIsFilterApplied } =
  shopSlice.actions;
export default shopSlice.reducer;
