// src/components/pages/farmer/FarmerSidebar.jsx
import React from "react";
import { NavLink } from "react-router-dom";

const FarmerSidebar = () => {
  const linkStyle = ({ isActive }) => ({
    display: "block",
    padding: "12px 20px",
    textDecoration: "none",
    color: isActive ? "white" : "#ddd",
    background: isActive ? "#198754" : "transparent",
    borderRadius: "5px",
    marginBottom: "8px",
    transition: "0.3s",
  });

  return (
    <div style={{ width: "250px", background: "#2c3e50", color: "#fff", padding: "20px" }}>
      <h2>Farmer Panel</h2>
      <nav style={{ marginTop: "20px" }}>
        <NavLink to="/farmer_dashboard" style={linkStyle} end>
          Dashboard
        </NavLink>
        <NavLink to="/farmer_dashboard/profile" style={linkStyle}>
          Profile
        </NavLink>
        <NavLink to="/farmer_dashboard/orders" style={linkStyle}>
          Orders
        </NavLink>
        <NavLink to="/farmer_dashboard/sales" style={linkStyle}>
          Sales
        </NavLink>

        {/* Newly Added Links */}
        <NavLink to="/farmer_dashboard/add-product" style={linkStyle}>
          Add Product
        </NavLink>
        <NavLink to="/farmer_dashboard/manage-products" style={linkStyle}>
        Manage Products
        </NavLink>
        

      </nav>
    </div>
  );
};

export default FarmerSidebar;
