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

export const createEmployee = createAsyncThunk(
  "createEmployee",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `${baseUrl}/createNewEmployee`,
        payload
      );
      return data;
    } catch (error) {
      return rejectWithValue(handleApiError(error));
    }
  }
);

export const editEmployee = createAsyncThunk(
  "editEmployee",
  async ({ id, payload }, { rejectWithValue }) => {
    try {
      const { data } = await axios.put(
        `${baseUrl}/edit-employee/${id}`,
        payload
      );
      return data;
    } catch (error) {
      return rejectWithValue(handleApiError(error));
    }
  }
);

export const getAllEmployee = createAsyncThunk(
  "getAllEmployee",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${baseUrl}/getEmployee`);
      return data;
    } catch (error) {
      return rejectWithValue(handleApiError(error));
    }
  }
);

export const deleteEmployeeById = createAsyncThunk(
  "deleteEmployeeById",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`${baseUrl}/delete-employee/${id}`);
      return data;
    } catch (error) {
      return rejectWithValue(handleApiError(error));
    }
  }
);

const employeeSlice = createSlice({
  name: "employee",
  initialState: {
    loading: false,
    employee: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    const handlePending = (state) => {
      state.loading = true;
      state.employee = null;
      state.error = null;
    };
    const handleFulfilled = (state, action) => {
      state.loading = false;
      state.employee = action.payload;
      state.error = null;
    };
    const handleRejected = (state, action) => {
      state.loading = false;
      state.employee = null;
      state.error = action.payload;
    };
    [createEmployee, editEmployee, getAllEmployee, deleteEmployeeById].forEach(
      (action) => {
        builder
          .addCase(action.pending, handlePending)
          .addCase(action.fulfilled, handleFulfilled)
          .addCase(action.rejected, handleRejected);
      }
    );
  },
});

export default employeeSlice.reducer;
