import {
  createProduct,
  getProducts,
  deleteProduct as deleteProductApi,
  editProduct as editProductApi,
} from "@/services/productsApi";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

// create asyncThunks to connect with supabase
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    return await getProducts();
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

const initialState = { items: [], status: "idle", error: null };
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.items = action.payload;
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

export default productsSlice.reducer;
