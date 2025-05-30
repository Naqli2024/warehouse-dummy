import { useEffect, useState } from "react";
import { PiTriangleFill } from "react-icons/pi";
import { GoSearch } from "react-icons/go";
import { FaFileUpload } from "react-icons/fa";
import { IoMdQrScanner } from "react-icons/io";
import { MdAdd } from "react-icons/md";
import { TiArrowSortedDown } from "react-icons/ti";
import { TiArrowSortedUp } from "react-icons/ti";
import { InputGroup, Form, Button } from "react-bootstrap";
import CloseIcon from "@mui/icons-material/Close";
import { IoMdClose } from "react-icons/io";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Slide,
} from "@mui/material";
import {
  createVendorInventoryItem,
  getAllInventory,
} from "../../../Redux/Vendor/InventorySlice";
import { useDispatch, useSelector } from "react-redux";
import { getAllInventoryImage } from "../../../Redux/Vendor/InventoryImageSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Inventory = () => {
  const [activeTab, setActiveTab] = useState("inventory");
  const [expandItems, setExpandItems] = useState(false);
  const [openAddItemDialog, setOpenAddItemDialog] = useState(false);
  const dispatch = useDispatch();
  const { vendorInventory } = useSelector(
    (state) => state.vendorInventoryReducer
  );
  const { vendorInventoryImages } = useSelector(
    (state) => state.vendorInventoryImageReducer
  );

  console.log(vendorInventory);

  const bestSellingData = [
    { name: "Organic Apples", value: 70 },
    { name: "Whole Wheat Bread", value: 90 },
    { name: "Cheddar Cheese", value: 85 },
    { name: "Chicken Breast", value: 95 },
    { name: "Salmon Fillet", value: 90 },
    { name: "Spinach", value: 60 },
    { name: "Milk", value: 65 },
  ];

    const inventoryData = [
    {
      id: 1,
      image: 'https://placehold.co/40x40/E0E0E0/333333?text=Item1',
      item: 'Bakery',
      classification: 'Fruits',
      sku: 'SKU-001',
      productType: 'Own',
      mrp: '$2.50',
      sellingPrice: '$2.75',
      margin: '10%',
       tax: '5%',
        hsnCode: '123456',
        uom: 'kg',
        mfgdate:'15-01-2024',
        expdate:'15-07-2024',
        storagecondition:'Refrigetered',
        storageduration:'6 months',
        currentStock: '500 kg',
       stockQuantityAvailable: '450 kg',
       stockValue: '$1125',
      
    },
    {
      id: 2,
      image: 'https://placehold.co/40x40/E0E0E0/333333?text=Item2',
      item: 'Bakery',
      classification: 'Bakery',
      sku: 'SKU-002',
           productType: 'Procured',
      mrp: '$3.00',
      sellingPrice: '$3.30',
      margin: '10%',
       tax: '5%',
        hsnCode: '654321',
        uom: 'loaf',
        mfgdate:'15-01-2024',
        expdate:'15-07-2024',
        storagecondition:'Refrigetered',
        storageduration:'6 months',
        currentStock: '200 loaves',
       stockQuantityAvailable: '180 loaves',
       stockValue: '$540',
    },

  ];

  const renderTableContent = () => {
    switch (activeTab) {
      case "inventory":
        return (
          <div className="vendor-inventory-table-responsive">
            <table className="vendor-inventory-table">
              <thead>
                <tr>
                  <th>Items</th>
                  <th>Classification</th>
                  <th>SKU</th>
                  <th>Product Type</th>
                  <th>MRP</th>
                  <th>Selling Price</th>
                  <th>Margin %</th>
                  <th>Tax %</th>
                  <th>HSN Code</th>
                  <th>UOM</th>
                  <th>Mfg Date</th>
                  <th>Exp Date</th>
                  <th>Storage Condition</th>
                  <th>Storage Duration</th>
                  <th>Current Stock</th>
                  <th>Stock Quantity Available</th>
                  <th>Stock Value</th>
                </tr>
              </thead>
              <tbody>
                {inventoryData.map((data) => (
                  <tr key={data.id}>
                    <td>
                      <div className="vendor-inventory-product-item-cell">
                        <img src={data.image} alt={data.item} className="vendor-inventory-table-item-image" />
                        <span className="vendor-inventory-item-name-text">{data.item}</span>
                      </div>
                    </td>
                    <td>{data.classification}</td>
                    <td>{data.sku}</td>
                    <td>{data.productType}</td>
                    <td>{data.mrp}</td>
                    <td>{data.sellingPrice}</td>
                    <td>{data.margin}</td>
                    <td>{data.tax}</td>
                    <td>{data.hsnCode}</td>
                    <td>{data.uom}</td>
                    <td>{data.mfgdate}</td>
                    <td>{data.expdate}</td>
                    <td>{data.storagecondition}</td>
                    <td>{data.storageduration}</td>
                    <td>{data.currentStock}</td>
                    <td>{data.stockQuantityAvailable}</td>
                    <td>{data.stockValue}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      case "stock-adjustments":
        return <p>Content for Stock Adjustments...</p>;
      case "stock-transfers":
        return <p>Content for Stock Transfers...</p>;
      case "stock-taking":
        return <p>Content for Stock Taking...</p>;
      default:
        return null;
    }
  };

  useEffect(() => {
    dispatch(getAllInventory());
  }, [dispatch]);

  useEffect(() => {
    async function fetchInventoryAndImages() {
      try {
        const inventoryResult = await dispatch(getAllInventory()).unwrap();
        inventoryResult.forEach((item) => {
          const fileName =
            item.itemImage && typeof item.itemImage === "object"
              ? item.itemImage.fileName
              : null;
          if (fileName) {
            dispatch(getAllInventoryImage(fileName));
          }
        });
      } catch (err) {
        console.error("Failed to fetch inventory or images", err);
      }
    }

    fetchInventoryAndImages();
  }, [dispatch]);

  const [formData, setFormData] = useState({
    itemImage: null,
    itemName: "",
    itemClassification: "",
    sku: "",
    productType: "",
    mrp: "",
    sellingPrice: "",
    margin: "",
    tax: "",
    hsnCode: "",
    uom: "",
    // mfgDate: "",
    // expDate: "",
    // storageCondition: "",
    // storageDuration: "",
    currentStock: "",
    stockQtyAvailable: "",
    stockValue: "",
  });

  const handleChange = (event) => {
    const { name, value, type, files } = event.target;

    if (type === "file") {
      setFormData((prevState) => ({
        ...prevState,
        [name]: files[0],
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleProductSubmit = async () => {
    try {
      const form = new FormData();
      const { itemImage, ...itemData } = formData;
      form.append("items", JSON.stringify([itemData]));
      if (itemImage) {
        form.append("itemImage", itemImage);
      }
      const resultAction = await dispatch(createVendorInventoryItem(form));

      if (createVendorInventoryItem.fulfilled.match(resultAction)) {
        toast.success("Product added successfully!");
        setOpenAddItemDialog(false);
        dispatch(getAllInventory());
      } else {
        toast.error(resultAction.payload || "Failed to add product.");
      }
    } catch (error) {
      console.error("Unexpected error during product submission:", error);
      toast.error("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div>
      {" "}
      <div className="vendor-inventory-main-card p-4">
        <div className="d-flex justify-content-between align-items-center mb-4 vendor-inventory-main-content">
          <h1 className="vendor-inventory-heading">Inventory Management</h1>
          <div>
            <button className="btn vendor-inventory-add-new-item-btn me-2">
              <IoMdQrScanner className="vendor-inventory-icon" /> Scan
            </button>
            <button className="btn vendor-inventory-add-new-item-btn me-2 ">
              <FaFileUpload className="vendor-inventory-icon" /> Bulk Upload
            </button>
            <button
              className="btn vendor-inventory-add-new-item-btn"
              onClick={() => setOpenAddItemDialog(true)}
            >
              <MdAdd className="vendor-inventory-icon fs-5" />
              Add New Item
            </button>
          </div>
        </div>
        <div className="vendor-inventory-best-selling-card-standalone mb-4">
          <h3 className="vendor-inventory-best-selling-title-standalone">
            Best Selling Items
          </h3>
          <div className="row align-items-end mb-3">
            <div className="col-auto">
              <p className="vendor-inventory-total-items-standalone">100</p>
            </div>
            <div className="row">
              <p className="vendor-inventory-last-month-text-standalone">
                Last Month{" "}
                <span className="vendor-inventory-positive-change-standalone">
                  +10%
                </span>
              </p>
            </div>
          </div>
          {expandItems && (
            <div className="vendor-inventory-item-list-standalone">
              {bestSellingData.map((item, index) => (
                <div className="row g-0 mb-2" key={index}>
                  <div className="col-2">
                    <span className="vendor-inventory-item-name-standalone">
                      {item.name}
                    </span>
                  </div>
                  <div className="col-9 d-flex align-items-center">
                    <div className="progress w-100 vendor-inventory-progress-bar-custom-standalone">
                      <div
                        className="progress-bar vendor-inventory-progress-bar-fill-standalone"
                        role="progressbar"
                        style={{ width: `${item.value}%` }}
                        aria-valuenow={item.value}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          <div className="vendor-inventory-triangle-icon">
            {expandItems ? (
              <TiArrowSortedUp
                size={15}
                className="vendor-inventory-triangle-svg"
                onClick={() => setExpandItems(!expandItems)}
              />
            ) : (
              <TiArrowSortedDown
                size={15}
                className="vendor-inventory-triangle-svg"
                onClick={() => setExpandItems(!expandItems)}
              />
            )}
          </div>
        </div>
        <div className="mt-4 vendor-inventory-search-bar-container">
          <i className="vendor-inventory-search-icon">
            <GoSearch />
          </i>
          <input
            type="text"
            className="form-control vendor-inventory-search-input"
            placeholder="Search for items"
          />
        </div>
        <div className="mt-4 vendor-inventory-tabs-container">
          <div>
            <ul className="nav vendor-inventory-nav-tabs">
              <li className="nav-item">
                <button
                  className={`vendor-inventory-nav-link ${activeTab === "inventory" ? "active" : ""}`}
                  onClick={() => setActiveTab("inventory")}
                >
                  Inventory
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`vendor-inventory-nav-link ${activeTab === "stock-adjustments" ? "active" : ""}`}
                  onClick={() => setActiveTab("stock-adjustments")}
                >
                  Stock Adjustments
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`vendor-inventory-nav-link ${activeTab === "stock-transfers" ? "active" : ""}`}
                  onClick={() => setActiveTab("stock-transfers")}
                >
                  Stock Transfers
                </button>
              </li>
              <li className="vendor-nav-item">
                <button
                  className={`vendor-inventory-nav-link ${activeTab === "stock-taking" ? "active" : ""}`}
                  onClick={() => setActiveTab("stock-taking")}
                >
                  Stock Taking
                </button>
              </li>
            </ul>
            <hr className="p-0 m-0" />
          </div>
          <div className="tab-content mt-3">{renderTableContent()}</div>
        </div>
      </div>
      <Dialog
        open={openAddItemDialog}
        onClose={() => setOpenAddItemDialog(false)}
        aria-describedby="product-dialog-description"
        sx={{
          "& .MuiDialog-paper": {
            width: "1200px",
            maxWidth: "100vw",
          },
        }}
      >
        <DialogTitle className="vendor-inventory-dialog" sx={{ padding: 0 }}>
          <h2 className="d-flex justify-content-between">
            Add Product Details
            <span>
              <IoMdClose
                size={20}
                onClick={() => setOpenAddItemDialog(false)}
              />
            </span>
          </h2>
        </DialogTitle>

        <DialogContent>
          <div className="row mb-3 mt-3">
            <div className="col-md-3">
              <Form.Group>
                <Form.Label className="vendor-inventory-dialog-label">
                  Item Image
                </Form.Label>
                <Form.Control
                  type="file"
                  accept="image/*"
                  name="itemImage" 
                  onChange={handleChange} 
                />
              </Form.Group>
            </div>
            <div className="col-md-3">
              <Form.Group>
                <Form.Label className="vendor-inventory-dialog-label">
                  Item Name
                </Form.Label>
                <Form.Control
                  type="text"
                  className="small-custom-textfield"
                  name="itemName" 
                  value={formData.itemName} 
                  onChange={handleChange} 
                />
              </Form.Group>
            </div>
            <div className="col-md-3">
              <Form.Group>
                <Form.Label className="vendor-inventory-dialog-label">
                  Classification
                </Form.Label>
                <Form.Control
                  type="text"
                  className="small-custom-textfield"
                  name="itemClassification"
                  value={formData.itemClassification} 
                  onChange={handleChange}
                />
              </Form.Group>
            </div>
            <div className="col-md-3">
              <Form.Group>
                <Form.Label className="vendor-inventory-dialog-label">
                  SKU
                </Form.Label>
                <Form.Control
                  type="text"
                  className="small-custom-textfield"
                  name="sku" 
                  value={formData.sku} 
                  onChange={handleChange} 
                />
              </Form.Group>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-3">
              <Form.Group>
                <Form.Label className="vendor-inventory-dialog-label">
                  Product Type
                </Form.Label>
                <Form.Control
                  type="text"
                  className="small-custom-textfield"
                  name="productType" 
                  value={formData.productType} 
                  onChange={handleChange} 
                />
              </Form.Group>
            </div>
            <div className="col-md-3">
              <Form.Group>
                <Form.Label className="vendor-inventory-dialog-label">
                  MRP
                </Form.Label>
                <Form.Control
                  type="number"
                  className="small-custom-textfield"
                  name="mrp"
                  value={formData.mrp}
                  onChange={handleChange}
                  r
                />
              </Form.Group>
            </div>
            <div className="col-md-3">
              <Form.Group>
                <Form.Label className="vendor-inventory-dialog-label">
                  Selling Price
                </Form.Label>
                <Form.Control
                  type="number"
                  className="small-custom-textfield"
                  name="sellingPrice"
                  value={formData.sellingPrice}
                  onChange={handleChange}
                />
              </Form.Group>
            </div>
            <div className="col-md-3">
              <Form.Group>
                <Form.Label className="vendor-inventory-dialog-label">
                  Margin %
                </Form.Label>
                <Form.Control
                  type="number"
                  className="small-custom-textfield"
                  name="margin"
                  value={formData.margin}
                  onChange={handleChange}
                />
              </Form.Group>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-3">
              <Form.Group>
                <Form.Label className="vendor-inventory-dialog-label">
                  Tax %
                </Form.Label>
                <Form.Control
                  type="number"
                  className="small-custom-textfield"
                  name="tax" 
                  value={formData.tax} 
                  onChange={handleChange} 
                />
              </Form.Group>
            </div>
            <div className="col-md-3">
              <Form.Group>
                <Form.Label className="vendor-inventory-dialog-label">
                  HSN Code
                </Form.Label>
                <Form.Control
                  type="text"
                  className="small-custom-textfield"
                  name="hsnCode"
                  value={formData.hsnCode} 
                  onChange={handleChange}
                />
              </Form.Group>
            </div>
            <div className="col-md-3">
              <Form.Group>
                <Form.Label className="vendor-inventory-dialog-label">
                  UOM
                </Form.Label>
                <Form.Control
                  type="text"
                  className="small-custom-textfield"
                  name="uom" 
                  value={formData.uom}
                  onChange={handleChange} 
                />
              </Form.Group>
            </div>
            <div className="col-md-3">
              <Form.Group>
                <Form.Label className="vendor-inventory-dialog-label">
                  Mfg Date
                </Form.Label>
                <Form.Control
                  type="date"
                  className="small-custom-textfield"
                  name="mfgDate"
                  value={formData.mfgDate}
                  onChange={handleChange}
                />
              </Form.Group>
            </div>
          </div>
          <div className="row mb-3">
            {/* <div className="col-md-3">
            <Form.Group>
              <Form.Label className="vendor-inventory-dialog-label">
                Exp Date
              </Form.Label>
              <Form.Control
                type="date"
                className="small-custom-textfield"
                name="expDate"
                value={formData.expDate} 
                onChange={handleChange} 
              />
            </Form.Group>
          </div>
          <div className="col-md-3">
            <Form.Group>
              <Form.Label className="vendor-inventory-dialog-label">
                Storage Condition
              </Form.Label>
              <Form.Control
                type="text"
                className="small-custom-textfield"
                name="storageCondition" 
                value={formData.storageCondition} 
                onChange={handleChange} 
              />
            </Form.Group>
          </div>
          <div className="col-md-3">
            <Form.Group>
              <Form.Label className="vendor-inventory-dialog-label">
                Storage Duration
              </Form.Label>
              <Form.Control
                type="text"
                className="small-custom-textfield"
                name="storageDuration" 
                value={formData.storageDuration}
                onChange={handleChange}
              />
            </Form.Group>
          </div> */}
            <div className="col-md-3">
              <Form.Group>
                <Form.Label className="vendor-inventory-dialog-label">
                  Current Stock
                </Form.Label>
                <Form.Control
                  type="number"
                  className="small-custom-textfield"
                  name="currentStock"
                  value={formData.currentStock}
                  onChange={handleChange}
                />
              </Form.Group>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-3">
              <Form.Group>
                <Form.Label className="vendor-inventory-dialog-label">
                  Stock Quantity Available
                </Form.Label>
                <Form.Control
                  type="text"
                  className="small-custom-textfield"
                  name="stockQtyAvailable"
                  value={formData.stockQtyAvailable} 
                  onChange={handleChange}
                />
              </Form.Group>
            </div>
            <div className="col-md-3">
              <Form.Group>
                <Form.Label className="vendor-inventory-dialog-label">
                  Stock Value
                </Form.Label>
                <Form.Control
                  type="text"
                  className="small-custom-textfield"
                  name="stockValue" 
                  value={formData.stockValue} 
                  onChange={handleChange} 
                />
              </Form.Group>
            </div>
          </div>
        </DialogContent>

        <DialogActions
          sx={{
            marginBottom: "20px",
            justifyContent: "center",
          }}
        >
          <Button
            className="px-5"
            onClick={handleProductSubmit}
            sx={{
              fontWeight: "normal",
              backgroundColor: "#1F3F7F",
              textTransform: "capitalize",
            }}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Inventory;
