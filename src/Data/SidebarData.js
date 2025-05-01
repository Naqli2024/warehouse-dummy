import { FaTachometerAlt, FaShoppingCart, FaBoxes, FaWarehouse, FaFileInvoice, FaUsers } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import Dashboard from "../images/dashboard-logo.svg";
import Warehouse from "../images/warehouse-logo.svg"; 
import Purchase from "../images/purchase-logo.svg"; 
import Inventory from "../images/inventory-logo.svg"; 
import Employees from "../images/employees-logo.svg"; 
import Invoice from "../images/invoice-logo.svg"; 
export const dashboardItems = [
  { item: "Dashboard", path: "dashboard", 
    image: Dashboard},
  {
    item: "Purchase",
    path: "purchase",
    image: Purchase,
    submenus: [
      { item: "Purchase List", path: "purchase-list" },
      { item: "Vendors", path: "vendors" },
      { item: "Purchase return", path: "purchase-return" },
      { item: "Debit note", path: "debit-note" },
      { item: "Purchase invoice", path: "purchase-invoice" }
    ],
  },
  {
    item: "Inventory management",
    path: "inventory-management",
    image: Inventory,
    submenus: [
      { item: "Items", path: "items" },
      { item: "Sales", path: "sales" },
      { item: "Sales order", path: "salesorder" },
      { item: "Packages", path: "packages" },
      { item: "Shipments", path: "shipments" },
      { item: "Delivery challans", path: "delivery-challans" },
      { item: "Sales return", path: "sales-return" },
      { item: "Sales invoice", path: "sales-invoice" },
      { item: "Credit note", path: "credit-note" },
      { item: "Source department", path: "source-department" },
      { item: "Customer", path: "customer" },
      { item: "Category", path: "category" },
    ],
  },
  { item: "Warehouse management", 
    path: "warehouse-management", 
    image: Warehouse,
    submenus: [
      {item: "Storage",path: "storage"},
      {item: "Floor management",path: "warehouse"},
      {item: "Transfer log",path: "transfer-log"},
    ]
   },
  { item: "Employees", path: "employees", image: Employees },
];
