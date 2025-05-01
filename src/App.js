import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import Header from "./Pages/Header/Header";
import HomePage from "./Pages/Home/HomePage";
import NotFound from "./Pages/NotFound";
import "./styles/style.css";
import Main from "./Pages/Dashboard/Main";
import SalesOrder from "./Pages/Dashboard/InventoryManagement/Salesorder/SalesOrder";
import Packages from "./Pages/Dashboard/InventoryManagement/Packages/Packages";
import Shipments from "./Pages/Dashboard/InventoryManagement/Shipments/Shipments";
import Return from "./Pages/Dashboard/Return";
import VendorPayment from "./Pages/Dashboard/VendorPayment";
import Customer from "./Pages/Dashboard/InventoryManagement/Customer/Customer";
import Invoices from "./Pages/Dashboard/Invoices";
import VendorManagement from "./Pages/Dashboard/VendorManagement";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import PurchaseList from "./Pages/Dashboard/Purchase/PurchaseList";
import Vendors from "./Pages/Dashboard/Purchase/Vendors/Vendors";
import Items from "./Pages/Dashboard/InventoryManagement/Items/Items";
import PurchaseDetails from "./Pages/Dashboard/Purchase/PurchaseDetails";
import Sales from "./Pages/Dashboard/InventoryManagement/Sales/Sales";
import SalesReturn from "./Pages/Dashboard/InventoryManagement/SalesReturn/SalesReturn";
import CreditNote from "./Pages/Dashboard/InventoryManagement/CreditNote/CreditNote";
import DeliveryChallans from "./Pages/Dashboard/InventoryManagement/DeliveryChallans/DeliveryChallans";
import SourceDepartment from "./Pages/Dashboard/InventoryManagement/SourceDepartment/SourceDepartment";
import Category from "./Pages/Dashboard/InventoryManagement/Category/Category";
import SalesInvoice from "./Pages/Dashboard/InventoryManagement/SalesInvoice/SalesInvoice";
import PurchaseInvoice from "./Pages/Dashboard/Purchase/PurchaseInvoice/PurchaseInvoice";
import PurchaseReturn from "./Pages/Dashboard/Purchase/PurchaseReturn/PurchaseReturn";
import DebitNote from "./Pages/Dashboard/Purchase/DebitNote/DebitNote";
import Employees from "./Pages/Dashboard/Employees/Employees";
import TransferLog from "./Pages/Dashboard/WarehouseManagement/TransferLog/TransferLog";
import Login from "./Pages/Auth/Login";
import Signup from "./Pages/Auth/Signup";
import UpdatePassword from "./Pages/Auth/UpdatePassword";
import DashboardHeader from "./Pages/Header/DashboardHeader";
import Authentication from "./Pages/Accounts/Authentication";
import UserProfile from "./Pages/Accounts/UserProfile";
import AccountMain from "./Pages/Accounts/AccountMain";
import UserPassword from "./Pages/Accounts/UserPassword";
import DeleteAccount from "./Pages/Accounts/DeleteAccount";
import UserSettings from "./Pages/Accounts/UserSettings";
import CompanyDetailsForm from "./Pages/CompanyDetails/CompanyDetailsForm";
import Storage from "./Pages/Dashboard/WarehouseManagement/Storage/Storage";
import CreateWarehouse from "./Pages/Dashboard/WarehouseManagement/WarehouseCreation/CreateWarehouse";
import Home from "./Pages/Dashboard/WarehouseManagement/WarehouseCreation/WarehouseStructure/Home";

function App() {
  const location = useLocation();
  const showHeader = !["/","/login", "/signup","/user/updatePassword","/admin/authentication"].includes(location.pathname);
  return (
    <>
      {showHeader && <DashboardHeader />} 
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/user/updatePassword" element={<UpdatePassword />} />
          <Route path="/admin/authentication" element={<Authentication/>} />
          <Route path="/admin" element={<Main />}>
            <Route index element={<Navigate to="/admin/dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="purchase-list" element={<PurchaseList />} />
            <Route path="vendors" element={<Vendors />} />
            <Route path="purchase-details/:id" element={<PurchaseDetails />} />
            <Route path="items" element={<Items />} />
            <Route path="sales" element={<Sales />} />
            <Route path="sales-return" element={<SalesReturn />} />
            <Route path="credit-note" element={<CreditNote />} />
            <Route path="debit-note" element={<DebitNote />} />
            <Route path="salesorder" element={<SalesOrder />} />
            <Route path="packages" element={<Packages />} />
            <Route path="shipments" element={<Shipments />} />
            <Route path="delivery-challans" element={<DeliveryChallans />} />
            <Route path="source-department" element={<SourceDepartment />} />
            <Route path="category" element={<Category />} />
            <Route path="storage" element={<Storage />} />
            <Route path="return" element={<Return />} />
            <Route path="transfer-log" element={<TransferLog />} />
            <Route path="vendor-management" element={<VendorManagement />} />
            <Route path="vendor-payment" element={<VendorPayment />} />
            <Route path="customer" element={<Customer />} />
            <Route path="sales-invoice" element={<SalesInvoice />} />
            <Route path="purchase-invoice" element={<PurchaseInvoice />} />
            <Route path="purchase-return" element={<PurchaseReturn />} />
            <Route path="employees" element={<Employees />} />
            <Route path="company-details" element={<CompanyDetailsForm />} />
            <Route path="warehouse" element={<CreateWarehouse />} />
          </Route>
          <Route path="/admin/account" element={<AccountMain />}>
            <Route index element={<Navigate to="/admin/account/userProfile" />} />
            <Route path="userProfile" element={<UserProfile/>} />
            <Route path="password" element={<UserPassword/>} />
            <Route path="settings" element={<UserSettings/>} />
            <Route path="delete-account" element={<DeleteAccount/>} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
    </>
  );
}

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
