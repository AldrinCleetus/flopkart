import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./ProductsSlice";
import cartSlice from "./CartSlice";



const store = configureStore({
  reducer: {
    productsFromAPI: productsSlice.reducer,
    cartSlice: cartSlice.reducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
