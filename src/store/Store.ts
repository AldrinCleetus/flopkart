import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./ProductsSlice";
import cartSlice from "./CartSlice";
import modalSlice from "./modalSlice";



const store = configureStore({
  reducer: {
    productsFromAPI: productsSlice.reducer,
    cartSlice: cartSlice.reducer,
    modalSlice: modalSlice.reducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
