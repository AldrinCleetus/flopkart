import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

type UsersState = {
  APIResponse: DummyJSONResponse;
  status: "idle" | "pending" | "succeeded" | "failed";
}

type Product = {
  id: number;
  title: string;
  description: string;
  brand: string;
  category: string;
  discountPercentage: number;
  images: Array<string>;
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
}

type DummyJSONResponse = {
  products: Array<Product>;
  limit: number;
  skip: number;
  total: number;
}

const initialState: UsersState = {
  APIResponse: {
    products: [],
    limit: 0,
    skip: 0,
    total: 0,
  },
  status: "idle",
}

const productsDataKey = 'productsData'

export const getProductsFromAPI = createAsyncThunk(
  "products/productsFromAPI",
  async (_, thunkAPI) => {

    try {

      const cacheProductsData = localStorage.getItem(productsDataKey)

      if(cacheProductsData !== null){
        return JSON.parse(cacheProductsData) as DummyJSONResponse
      }

      console.log("Fetching Products")
      const response = await axios(`https://dummyjson.com/products`);
      localStorage.setItem(productsDataKey,JSON.stringify(response.data))
      return response.data as DummyJSONResponse;

    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getProductsByID = createAsyncThunk(
  "products/getProductsByID",
  async (productID : number, thunkAPI) => {

    try {

      const cacheProductsData = localStorage.getItem(productsDataKey)

      if(cacheProductsData !== null){

        const cachedProducts: DummyJSONResponse = JSON.parse(cacheProductsData)
        const product = cachedProducts.products.find(product => product.id === productID)

        if(product){
          return product
        }

      }

      //Fix later - Add the product to exisiting prod array else make a new object and add it to that.
      //localStorage.setItem(productsDataKey,JSON.stringify(state.APIResponse))

      console.log("Fetching Product by ID")
      const response = await axios(`https://dummyjson.com/products/${productID}`);
      return response.data as Product;

    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const productsSlice = createSlice({
  name: "productsResponse",
  initialState,
  reducers: {
    getProductsByCategory: (state, action: PayloadAction<string>) => {
      console.log("HOLAAA0", action.payload);
      //temp
      return state;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProductsFromAPI.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getProductsFromAPI.fulfilled, (state, action) => {
        state.APIResponse = action.payload;
        state.status = "succeeded";
      })
      .addCase(getProductsFromAPI.rejected,(state)=>{
        state.status = 'failed'
      })
      .addCase(getProductsByID.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getProductsByID.fulfilled, (state, action) => {
        state.APIResponse.products.push(action.payload)
        state.status = "succeeded";
      })
      .addCase(getProductsByID.rejected,(state)=>{
        state.APIResponse.products = []
        state.status = 'failed'
      })
      
  },
  
});

export default productsSlice;

export const { getProductsByCategory } = productsSlice.actions;
