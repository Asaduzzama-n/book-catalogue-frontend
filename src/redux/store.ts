import { Reducer, combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import reviewReducer from "./features/review/reviewSlice";
import bookReducer from "./features/books/bookSlice";
import shopReducer from "./features/shop/shopSlice";
import { api } from "./api/apiSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  cart: cartReducer,
  review: reviewReducer,
  book: bookReducer,
  shop: shopReducer,
  api: api.reducer,
});

const persistedReducer: Reducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
