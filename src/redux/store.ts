import { Reducer, combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import reviewReducer from "./features/review/reviewSlice";
import bookReducer from "./features/books/bookSlice";
import shopReducer from "./features/shop/shopSlice";
import authReducer from "./features/auth/authSlice";
import { api } from "./api/apiSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./features/user/userSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "review", "book", "user"],
};

const rootReducer = combineReducers({
  cart: cartReducer,
  review: reviewReducer,
  book: bookReducer,
  shop: shopReducer,
  user: userReducer,
  auth: authReducer,
  [api.reducerPath]: api.reducer,
});

const persistedReducer: Reducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
  devTools: true,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
