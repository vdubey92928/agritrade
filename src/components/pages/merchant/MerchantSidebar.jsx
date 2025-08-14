
import React from "react";
import { NavLink } from "react-router-dom";

const MerchantSidebar = () => {
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
      <h2>Merchant Panel</h2>
      <nav style={{ marginTop: "20px" }}>
        <NavLink to="/merchant_dashboard" style={linkStyle} end>
          Dashboard
        </NavLink>
        <NavLink to="/merchant_dashboard/profile" style={linkStyle}>
          Profile
        </NavLink>
        <NavLink to="/merchant_dashboard/orders" style={linkStyle}>
          Orders
        </NavLink>
      </nav>
    </div>
  );
};

export default MerchantSidebar;
