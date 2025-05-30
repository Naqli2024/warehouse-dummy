import Dashboard from "../images/dashboard-logo.svg";
import Quotation from "../images/purchase-logo.svg"; 
import Price from "../images/inventory-logo.svg"; 
import Status from "../images/vendor-status.svg"; 
import ASN from "../images/vendor-asn.svg"; 
export const vendorItems = [
    { item: "Dashboard", path: "vendor-dashboard", image: Dashboard },
    {
    item: "Quote Management",
    path: "quote-management",
    image: Quotation,
    submenus: [
      { item: "RFQ", path: "rfq" },
      { item: "Quotation", path: "quotation" },
      { item: "Re RFQ", path: "re-rfq" },
      { item: "Quote History", path: "quote-history" },
    ],
  },
  {item: "Inventory", image: Price, path: "inventory-management"},
  {item: "PriceList", image: Price, path: "price-list"},
  {item: "Payment", image: Price, path: "payment"},
  {item: "Status Updater", image: Status, path: "status-updater"},
  {item: "ASN", image: ASN, path: "asn"}
]