import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import vendorService, { authorizedRequest } from "../../Services/VendorService";
import handleApiError from "../../Helper/handleApierror";

const TOKEN_COOKIE_NAME = "authToken";

export const getAllVendors = createAsyncThunk(
  "getAllVendors",
  async (_, { rejectWithValue }) => {
    try {
      const api = vendorService;
      const response = await api.get("/all-vendors");
      return response.data; 
    } catch (error) {
      return rejectWithValue(handleApiError(error));
    }
  }
);

export const getVendorById = createAsyncThunk(
  "getVendorById",
  async(id, {rejectWithValue}) => {
    console.log(id)
    try {
      const token = Cookies.get(TOKEN_COOKIE_NAME);
      console.log(token)
      const api = authorizedRequest(token);
      const response = await api.get(`/getVendorById/${id}`)
      return response.data;
    } catch (error) {
      return rejectWithValue(handleApiError(error));
    }
  }
)

const vendorSlice = createSlice({
  name: "vendors",
  initialState: {
    vendors: [],
    loading: false,
    error: null,
  },
  reducers: {
    clearVendorError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
      const handlePending = (state) => {
        state.loading = true;
      };
      const handleFulfilled = (state, action) => {
        state.loading = false;
        state.vendors = action.payload;
        state.error = null;
      };
      const handleRejected = (state, action) => {
        state.loading = false;
        state.vendors = null;
        state.error = action.payload;
      };
      [
        getAllVendors, getVendorById
      ].forEach((action) => {
        builder
          .addCase(action.pending, handlePending)
          .addCase(action.fulfilled, handleFulfilled)
          .addCase(action.rejected, handleRejected);
      });
    },
});

export const { clearVendorError } = vendorSlice.actions;
export default vendorSlice.reducer;