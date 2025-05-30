import React, { useEffect } from "react";
import { MdMoreVert } from "react-icons/md";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getMatchedIndentItems } from "../../../../Redux/Purchase/purchaseIndent";

const VendorRFQSidebar = ({ selectedRFQs, onSelectionChange, vendorId, purchaseIndentId }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (vendorId && purchaseIndentId) {
      dispatch(getMatchedIndentItems({ vendorId, purchaseIndentId }));
    }
  }, [vendorId, purchaseIndentId, dispatch]);
  

  const matchedData = useSelector((state) => state.purchaseIndent.matchedData || {});
  const matched = matchedData[vendorId]?.[purchaseIndentId];
  const items = matched?.matchedItems || [];
  const rfqNoFromApi = matched?.rfqNo;
  const estimatedSum = items.reduce((sum, item) => sum + (item.estimatedValue || 0), 0);

  const handleCheckboxChange = () => {
    onSelectionChange(selectedRFQs === rfqNoFromApi ? null : rfqNoFromApi);
  };

  return (
    <div className="col-md-2 po-sidebar">
      <div className="fixed-divider">
        <div className="pi-top-option">
          <div className="col-auto mt-2">
            <Form.Group>
              <Form.Select className="no-border text-muted">
                <option value="">All RFQ</option>
                <option>Approved</option>
                <option>Rejected</option>
                <option>Waiting For Approval</option>
              </Form.Select>
            </Form.Group>
          </div>
          <div className="pi-options">
            <div className="more-pi-btn">
              <MdMoreVert size={14} />
            </div>
          </div>
        </div>
        <div className="pi-divider"></div>
      </div>

      {matched && (
        <div>
          <label className="pi-sidebar-list">
            <input
              type="checkbox"
              className="pi-checkbox"
              checked={selectedRFQs === rfqNoFromApi}
              onChange={handleCheckboxChange}
            />
            <div className="pi-content">
              <div className="d-flex flex-column">
                <p>RFQ NO: {rfqNoFromApi || "N/A"}</p>
                <p>Estimated Valuation: {estimatedSum > 0 ? estimatedSum : "N/A"}</p>
              </div>
            </div>
            <p>Grandag Saudi Ltd</p>
          </label>
          <div className="pi-divider"></div>
        </div>
      )}
    </div>
  );
};

export default VendorRFQSidebar;
