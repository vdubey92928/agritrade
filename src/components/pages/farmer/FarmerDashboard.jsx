// src/components/pages/farmer/FarmerDashboard.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import FarmerSidebar from "./FarmerSidebar";
import FarmerTopbar from "./FarmerTopbar";

const FarmerDashboard = () => {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <FarmerSidebar />

      {/* Main Content */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <FarmerTopbar />
        <div style={{ flex: 1, padding: "20px", background: "#f8f9fa" }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default FarmerDashboard;
