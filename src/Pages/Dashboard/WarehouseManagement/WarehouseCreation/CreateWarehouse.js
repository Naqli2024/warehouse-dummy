import React, { useState, lazy, Suspense } from "react";
import CreateFloorManagement from "../../../../images/floorManagement.svg";
const NewWarehouse = lazy(() => import("./NewWarehouse"));

const CreateWarehouse = () => {
  const [openNewWarehouse, setOpenNewWarehouse] = useState(false);

  return (
    <div>
      {openNewWarehouse ? (
        <Suspense fallback={<p className="lazy-loading-text">Loading New Floor Management...</p>}>
          <NewWarehouse backToList={() => setOpenNewWarehouse(false)} />
        </Suspense>
      ) : (
        <div className="purchase-list">
          <h2>Create Warehouse</h2>
          <div className="card-container">
            <div
              className="create-floor"
              onClick={() => setOpenNewWarehouse(true)}
            >
              <img
                src={CreateFloorManagement}
                alt="floor-management"
                className="mb-4"
              />
              <p className="personAvatar ms-2">+</p>
              <p className="mt-3">Create</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateWarehouse;
