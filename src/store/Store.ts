import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./ProductsSlice";
// import testSlice from "./ProductsSlice";

const store = configureStore({
  reducer: {
    productsFromAPI: productsSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
