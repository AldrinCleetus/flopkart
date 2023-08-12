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
        console.log("Returning Cache")
        return JSON.parse(cacheProductsData) as DummyJSONResponse
      }

      console.log("Fetching Data")
      const response = await axios("https://dummyjson.com/products");
      localStorage.setItem(productsDataKey,JSON.stringify(response.data))
      return response.data as DummyJSONResponse;

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
  },
});

export default productsSlice;

export const { getProductsByCategory } = productsSlice.actions;
