import { configureStore } from "@reduxjs/toolkit";
import purchaseReducer from "./features/purchaseSlice";
import getPurchaseDetailsReducer from "./features/getPurchaseDetailsSlice";
import findPurchaseByIdReducer from "./features/findPurchaseByIdSlice";
import findPurchaseByItemName from "./features/findPurchaseSlice";
import createInventoryReducer from "./inventory/createInventorySlice";
import getInventoriesReducer from "./inventory/getInventoriesSlice";
import getInventoryBySku from "./inventory/getInventoryBySku";
import getAllSalesOrderSlice from "./salesOrder/getSaleOrder";
import createSaleOrderSlice from "./salesOrder/createSaleOrder";
import employeeReducer from "./employee/employeeSlice";
import companyReducer from "./company/companySlice";
import vendorReducer from "./Vendor/VendorSlice";
import vendorInventoryReducer from "./Vendor/InventorySlice";
import vendorInventoryImageReducer from "./Vendor/InventoryImageSlice";
import purchaseIndentReducer from "./Purchase/purchaseIndent";
import purchaseOrderReducer from "./Purchase/purchaseOrder";

const store = configureStore({
  reducer: {
    purchase: purchaseReducer,
    getPurchaseDetails: getPurchaseDetailsReducer,
    findPurchaseById: findPurchaseByIdReducer,
    findPurchaseByItemName: findPurchaseByItemName,
    createInventoryReducer: createInventoryReducer,
    getInventories: getInventoriesReducer,
    getInventoryBySku: getInventoryBySku,
    getAllSalesorder: getAllSalesOrderSlice,
    createSaleOrder: createSaleOrderSlice,
    employeeReducer: employeeReducer,
    companyReducer: companyReducer,
    vendorReducer: vendorReducer,
    vendorInventoryReducer: vendorInventoryReducer,
    vendorInventoryImageReducer: vendorInventoryImageReducer,
    purchaseIndent: purchaseIndentReducer,
    purchaseOrder: purchaseOrderReducer,
  },
});

export default store;
