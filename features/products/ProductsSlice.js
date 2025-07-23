import {
  createProduct,
  getProducts,
  deleteProduct as deleteProductApi,
  editProduct as editProductApi,
} from "@/services/productsApi";
import { set } from "react-hook-form";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

// create asyncThunks to connect with supabase
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async ({ limit = 10, page = 1, category = null, sort = null }) => {
    const offset = (page - 1) * limit;

    return await getProducts(limit, offset, category, sort);
  }
);

export const addProduct = createAsyncThunk(
  `products/addProduct`,
  async (product) => {
    return await createProduct(product);
  }
);

export const deleteProduct = createAsyncThunk(
  `products/deleteProduct`,
  async (id) => {
    return await deleteProductApi(id);
  }
);

export const editProduct = createAsyncThunk(
  `products/editProduct`,
  async ({ id, updates }) => {
    return await editProductApi(id, updates);
  }
);

const initialState = {
  items: [],
  status: "idle",
  error: null,
  count: 0,
  page: 1,
  limit: 10,
  category: "all",
  sort: null,
};
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setPage(state, action) {
      state.page = action.payload.page;
    },
    setLimit(state, action) {
      state.limit = action.payload.limit;
    },
    setCategory(state, action) {
      state.category = action.payload.category;
    },
    setSort(state, action) {
      state.sort = action.payload.sort;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.items = action.payload.data;
        state.count = action.payload.count;
        state.status = "succeeded";
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        if (Array.isArray(action.payload) && action.payload.length > 0) {
          state.items.push(action.payload[0]);
        }
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
      })
      .addCase(editProduct.fulfilled, (state, action) => {
        if (Array.isArray(action.payload) && action.payload.length > 0) {
          const idx = state.items.findIndex(
            (p) => p.id === action.payload[0].id
          );
          if (idx !== -1) state.items[idx] = action.payload[0].updates;
        }
      });
  },
});

export const { setPage, setLimit, setCategory, setSort } =
  productsSlice.actions;

export default productsSlice.reducer;
