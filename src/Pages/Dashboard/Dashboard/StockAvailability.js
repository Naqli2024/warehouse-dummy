import React, { useEffect, useRef } from "react";
import {
  Chart,
  BubbleController,
  Tooltip,
  Legend,
  PointElement,
  LinearScale,
  Title,
} from "chart.js";
import { StockAvailable } from "../../../Data/DashboardData";

Chart.register(
  BubbleController,
  PointElement,
  LinearScale,
  Tooltip,
  Legend,
  Title
);

const StockAvailability = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    const chartCtx = chartRef.current.getContext("2d");
  
    const parsedData = StockAvailable.map((item, index) => ({
      x: index * 0.8 + 1, 
      y: parseFloat(item.data) * 0.8,
      r: Math.max(parseFloat(item.data) / 1, 12), 
    }));
  
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }
  
    chartInstanceRef.current = new Chart(chartCtx, {
      type: "bubble",
      data: {
        datasets: [
          {
            label: "Stock Availability",
            data: parsedData,
            backgroundColor: ["#36A2EB", "#FF6384"],
            hoverBackgroundColor: ["#36A2EB", "#FF6384"],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          tooltip: {
            callbacks: {
              label: function (tooltipItem) {
                const index = tooltipItem.dataIndex;
                const stock = StockAvailable[index]?.stock || "Unknown";
                const value = StockAvailable[index]?.data || "0%";
                return `${stock}: ${value}`;
              },
            },
          },
          legend: {
            display: false,
          },
        },
        scales: {
          x: {
            display: false, 
          },
          y: {
            display: false, 
          },
        },
      },
    });
  
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="col-md-4 sales-analysis-outer-container">
      <div className="sales-analysis-head">
          <div className="col-md-5">Stock Availability</div>
          <div className="col-md-2 stock-avail-separator"/>
        <div className="col-md-5 stock-avail-head-text">
          <p>Total Value</p>
          <p>44445 SAR</p>
          </div>
        </div>
        <div className="dropdown-container p-4">
        <select className="custom-dropdown">
          <option value="all-time">All Warehouses</option>
          <option value="monthly">Warehouse 1</option>
          <option value="this-week">Warehouse 2</option>
          <option value="this-year">Warehouse 3</option>
        </select>
      </div>
      <div style={{ alignItems: "center", height: "100%" }}>
        <div style={{ flex: "1", position: "relative", height: "100%" }}>
          <canvas ref={chartRef}></canvas>
        </div>

      </div>
    </div>
  );
};

export default StockAvailability;
