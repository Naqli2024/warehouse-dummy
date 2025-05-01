import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "http://localhost:4000/api";

const handleApiError = (error) => {
  return (
    error?.response?.data?.message ||
    error.message ||
    "An unknown error occurred"
  );
};

export const createCompany = createAsyncThunk(
  "createCompany",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `${baseUrl}/createNewCompany`,
        payload
      );
      return data;
    } catch (error) {
      return rejectWithValue(handleApiError(error));
    }
  }
);

export const editCompany = createAsyncThunk(
  "editCompany",
  async ({ id, payload }, { rejectWithValue }) => {
    try {
      const { data } = await axios.put(
        `${baseUrl}/edit-company/${id}`,
        payload
      );
      return data;
    } catch (error) {
      return rejectWithValue(handleApiError(error));
    }
  }
);

export const getAllCompany = createAsyncThunk(
  "getAllCompany",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${baseUrl}/getCompany`);
      return data;
    } catch (error) {
      return rejectWithValue(handleApiError(error));
    }
  }
);

const companySlice = createSlice({
  name: "company",
  initialState: {
    loading: false,
    company: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    const handlePending = (state) => {
      state.loading = true;
      state.company = null;
      state.error = null;
    };
    const handleFulfilled = (state, action) => {
      state.loading = false;
      state.company = action.payload;
      state.error = null;
    };
    const handleRejected = (state, action) => {
      state.loading = false;
      state.company = null;
      state.error = action.payload;
    };
    [createCompany, editCompany, getAllCompany].forEach(
      (action) => {
        builder
          .addCase(action.pending, handlePending)
          .addCase(action.fulfilled, handleFulfilled)
          .addCase(action.rejected, handleRejected);
      }
    );
  },
});

export default companySlice.reducer;
