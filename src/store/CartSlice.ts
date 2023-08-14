import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CartItemsType, Product } from "../types/types";

const initialState: CartItemsType = {
  cartItems: [],
  wishListItems: [],
};

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addProductToCart: (state, action: PayloadAction<Product>) => {
      console.log("addming", action.payload.title);
      state.cartItems.push({
        product: action.payload,
        quantity: 1,
      });
    },
    removeProductFromCart: (state, action: PayloadAction<Product>) => {
      console.log("removing", action.payload.title);
      state.cartItems = state.cartItems.filter(
        (product) => product.product.id !== action.payload.id
      );
    },
    incrementQuanity: (state, action: PayloadAction<Product>) => {
      state.cartItems = state.cartItems.map((item) => {
        if (item.product.id === action.payload.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }

        return item;
      });
    },
    decrementQuanity: (state, action: PayloadAction<Product>) => {
      state.cartItems = state.cartItems.map((item) => {
        if (item.product.id === action.payload.id && item.quantity >= 2) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }

        return item;
      });
    },
    addProductToWishList: (state, action: PayloadAction<Product>) => {
      console.log("addming", action.payload.title);
      state.wishListItems.push(action.payload);
    },
    removeProductFromWishList: (state, action: PayloadAction<Product>) => {
      console.log("removing", action.payload.title);
      state.wishListItems = state.wishListItems.filter(
        (product) => product.id !== action.payload.id
      );
    },
  },
});

export default cartSlice;

export const {
  addProductToCart,
  removeProductFromCart,
  incrementQuanity,
  decrementQuanity,
  addProductToWishList,
  removeProductFromWishList,
} = cartSlice.actions;
