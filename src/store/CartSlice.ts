import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CartItemsType, Product } from "../types/types";

const initialState: CartItemsType = {
    cartItems : []
}

export const cartSlice = createSlice({
    name: "cartSlice",
    initialState,
    reducers:{
        addProductToCart: (state, action: PayloadAction<Product>) => {
            console.log("addming", action.payload.title);
            state.cartItems.push({
                product: action.payload,
                quantity: 0
            })
          },
          removeProductFromCart: (state, action: PayloadAction<Product>) => {
            console.log("removing", action.payload.title);

            state.cartItems = state.cartItems.filter(product => product.product.id !== action.payload.id)
          },
    }

})

export default cartSlice

export const {addProductToCart,removeProductFromCart } = cartSlice.actions