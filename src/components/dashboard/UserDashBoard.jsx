// src/components/pages/farmer/FarmerDashboard.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import FarmerSidebar from "../pages/farmer/FarmerSidebar";
// import FarmerTopbar from "./FarmerTopbar";
import DashboardTopbar from "./DashBoardTopbar";

const UserDashboard = () => {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <FarmerSidebar />

      {/* Main Content */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <DashboardTopbar />
        <div style={{ flex: 1, padding: "20px", background: "#f8f9fa" }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
