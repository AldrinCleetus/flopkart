import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// type test = {
//   ota: string;
// };

// const initialState: test = {
//   ota: "",
// };

// const testSlice = createSlice({
//   name: "test",
//   initialState,
//   reducers: {
//     changeText: (state, action: PayloadAction<string>) => {
//       console.log("something!!", action.payload);

//       state.ota = action.payload;
//     },
//     reset: (state) => {
//       state = initialState;
//     },
//   },
// });

// export const { changeText, reset } = testSlice.actions;

// export default testSlice;
interface UsersState {
  entities: DummyJSONResponse;
  loading: "idle" | "pending" | "succeeded" | "failed";
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
};

type DummyJSONResponse = {
  products: Array<Product>;
  limit: number;
  skip: number;
  total: number;
};

const initialState = {
  entities: {},
  loading: "idle",
} as UsersState;

export const getProductsFromAPI = createAsyncThunk(
  "products/productsFromAPI",
  async (name, thunkAPI) => {
    try {
      console.log(name);
      // console.log(thunkAPI);
      // console.log(thunkAPI.getState());
      // thunkAPI.dispatch(openModal());
      const response = await axios("https://dummyjson.com/products");
      // console.log(response);
      return response.data;
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
      .addCase(getProductsFromAPI.pending, (state, action) => {
        console.log("productSlice 69", action.payload);
        state.loading = "pending";
      })
      .addCase(getProductsFromAPI.fulfilled, (state, action) => {
        console.log("Interssting!", action.payload);
        console.log(typeof action.payload);

        state.entities = action.payload;
        state.loading = "succeeded";
      });
  },
});

export default productsSlice;

export const { getProductsByCategory } = productsSlice.actions;
