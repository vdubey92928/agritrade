// src/components/pages/farmer/FarmerDashboard.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import MerchantSidebar from "./MerchantSidebar";
import MerchantTopbar from "./MerchantTopbar";

const MerchantDashboard = () => {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <MerchantSidebar />
       
      {/* Main Content */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <MerchantTopbar />
        <div style={{ flex: 1, padding: "20px", background: "#f8f9fa" }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MerchantDashboard;
