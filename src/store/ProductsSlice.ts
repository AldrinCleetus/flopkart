import { PayloadAction, createAsyncThunk, createSlice, isAnyOf } from "@reduxjs/toolkit";
import axios from "axios";
import { DummyJSONResponse, ProductsFromAPIParams, UsersState } from "../types/types";

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
  async ({searchValue = ''  , findByCategory = false , category = '' } : ProductsFromAPIParams, thunkAPI) => {

    try {

      const url = findByCategory ? `https://dummyjson.com/products/category/${category}` : searchValue !== '' ? `https://dummyjson.com/products/search?q=${searchValue}` : `https://dummyjson.com/products/`

      console.log(url)  


      const cacheProductsData = localStorage.getItem(productsDataKey)

      if(cacheProductsData !== null){
        const data = JSON.parse(cacheProductsData) as DummyJSONResponse
        // Only return cache if there are a min number of products to display else fetch new ones fix later...
        if(data.products.length >= 25){
          return data 
        }
      }

      console.log("Fetching Products")
      const response = await axios(url);
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
      .addCase(getProductsFromAPI.fulfilled, (state, action) => {
        state.APIResponse = action.payload;
        state.status = "succeeded";
      })
      .addCase(getProductsByID.fulfilled, (state, action) => {
        state.APIResponse.products.push(action.payload)
        state.status = "succeeded";
      })

    builder
    .addMatcher(isAnyOf(
      getProductsFromAPI.pending,
      getProductsByID.pending
    ),(state) => {
      state.status = "pending";
    })

    builder
    .addMatcher(isAnyOf(
      getProductsFromAPI.rejected,
      getProductsByID.rejected
    ),(state) => {
      state.status = "failed";
    })
  },
  
});

export default productsSlice;

