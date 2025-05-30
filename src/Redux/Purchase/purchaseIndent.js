import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import handleApiError from "../../Helper/handleApierror";
import { authorizedRequest } from "../../Services/purchaseService";
import getPurchaseIndent from "../../Services/getPurchaseIndent";
import Cookies from "js-cookie";
import axios from "axios";
import vendorService from "../../Services/VendorService";

const TOKEN_COOKIE_NAME = "authToken";

export const createPurchaseIndent = createAsyncThunk(
  "createPurchaseIndent",
  async (payload, { rejectWithValue }) => {
    try {
      const token = Cookies.get(TOKEN_COOKIE_NAME);
      const api = authorizedRequest(token);
      const response = await api.post("/create-purchase-indent", payload);
      return response.data;
    } catch (error) {
      return rejectWithValue(handleApiError(error));
    }
  }
);

export const getIndentNo = createAsyncThunk(
  "getIndentNo",
  async (_, { rejectWithValue }) => {
    try {
      const token = Cookies.get(TOKEN_COOKIE_NAME);
      const api = authorizedRequest(token);
      const { data } = await api.get("/indentNo");
      return data.data;
    } catch (error) {
      return rejectWithValue(handleApiError(error));
    }
  }
);

export const getAllPurchaseIndents = createAsyncThunk(
  "getAllIndents",
  async (_, { rejectWithValue }) => {
    try {
      const token = Cookies.get(TOKEN_COOKIE_NAME);
      const api = authorizedRequest(token);
      const { data } = await api.get("/getAllPurchaseIndent");
      return data;
    } catch (error) {
      return rejectWithValue(handleApiError(error));
    }
  }
);

export const deletePurchaseIndent = createAsyncThunk(
  "deletePurchaseIndent",
  async (indentNo, { rejectWithValue }) => {
    try {
      const token = Cookies.get(TOKEN_COOKIE_NAME);
      const api = authorizedRequest(token);
      const { data } = await api.delete(
        `/deletePurchaseIndentByIndentNo/${indentNo}`
      );
      return data;
    } catch (error) {
      return rejectWithValue(handleApiError(error));
    }
  }
);

export const updatePurchaseIndent = createAsyncThunk(
  "updatePurchaseIndent",
  async ({ indentNo, payload }, { rejectWithValue }) => {
    try {
      const token = Cookies.get(TOKEN_COOKIE_NAME);
      const api = authorizedRequest(token);
      const { data } = await api.put(
        `/updatePurchaseIndent/${indentNo}`,
        payload
      );
      return data;
    } catch (error) {
      return rejectWithValue(handleApiError(error));
    }
  }
);

export const getPurchaseIndentByIndentNo = createAsyncThunk(
  "getPurchaseIndentByIndentNo",
  async (indentNo, { rejectWithValue }) => {
    try {
      const token = Cookies.get(TOKEN_COOKIE_NAME);
      const api = authorizedRequest(token);
      const { data } = await api.get(
        `/getPurchaseIndentByIndentNo/${indentNo}`
      );
      return data;
    } catch (error) {
      return rejectWithValue(handleApiError(error));
    }
  }
);

export const getPurchaseIndentById = createAsyncThunk(
  "getPurchaseIndentById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await getPurchaseIndent.get(
        `/getPurchaseIndentById/${id}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(handleApiError(error));
    }
  }
);

export const getMatchedIndentItems = createAsyncThunk(
  "getMatchedIndentItems",
  async ({ vendorId, purchaseIndentId }, { rejectWithValue }) => {
    try {
      const response = await vendorService.post(`/matched-indent-items`, {
        vendorId,
        purchaseIndentId,
      });

      return {
        vendorId,
        purchaseIndentId,
        matchedItems: response.data.matchedItems,
      };
    } catch (error) {
      return rejectWithValue(handleApiError(error));
    }
  }
);


const purchaseIndentSlice = createSlice({
  name: "purchase-indent",
  initialState: {
    loading: false,
    error: null,
    allIndents: [],
    selectedIndent: null,
    createdIndent: null,
    matchedItemsByIndentId: {}, 
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllPurchaseIndents.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllPurchaseIndents.fulfilled, (state, action) => {
        state.loading = false;
        state.allIndents = action.payload;
        state.error = null;
      })
      .addCase(getAllPurchaseIndents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(getPurchaseIndentByIndentNo.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPurchaseIndentByIndentNo.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedIndent = action.payload;
        state.error = null;
      })
      .addCase(getPurchaseIndentByIndentNo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(createPurchaseIndent.fulfilled, (state, action) => {
        state.createdIndent = action.payload;
      })

      .addCase(deletePurchaseIndent.fulfilled, (state, action) => {
        state.allIndents = state.allIndents.filter(
          (indent) => indent.indentNo !== action.payload.indentNo
        );
      })

      .addCase(updatePurchaseIndent.fulfilled, (state, action) => {
        const updated = action.payload;
        const index = state.allIndents.findIndex(
          (i) => i.indentNo === updated.indentNo
        );
        if (index !== -1) {
          state.allIndents[index] = updated;
        }
        if (state.selectedIndent?.indentNo === updated.indentNo) {
          state.selectedIndent = updated;
        }
      })

      .addCase(getPurchaseIndentById.fulfilled, (state, action) => {
        state.loading = false;
        state.allIndents = action.payload;
        state.error = null;
      })

      .addCase(getMatchedIndentItems.pending, (state) => {
        state.loading = true;
      })
      .addCase(getMatchedIndentItems.fulfilled, (state, action) => {
  const { vendorId, purchaseIndentId, matchedItems } = action.payload;

  // Ensure parent objects exist
  if (!state.matchedData) {
    state.matchedData = {};
  }

  if (!state.matchedData[vendorId]) {
    state.matchedData[vendorId] = {};
  }

  // Now safe to assign
  state.matchedData[vendorId][purchaseIndentId] = {
  rfqNo: action.payload.rfqNo,
  matchedItems
};

})


      .addCase(getMatchedIndentItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default purchaseIndentSlice.reducer;
