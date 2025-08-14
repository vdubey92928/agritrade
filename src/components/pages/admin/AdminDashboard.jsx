// src/components/pages/merchant/MerchantDashboardCombined.jsx
import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

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

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <div style={{ width: "250px", background: "#2c3e50", color: "#fff", padding: "20px" }}>
        <h2>Admin Panel</h2>
        <nav style={{ marginTop: "20px" }}>
          <NavLink to="/admin_dashboard" style={linkStyle} end>
            Dashboard
          </NavLink>
          <NavLink to="/admin_dashboard/profile" style={linkStyle}>
            Profile
          </NavLink>
          <NavLink to="/admin_dashboard/managefarmer" style={linkStyle}>
            Manage Farmer
          </NavLink>
          <NavLink to="/admin_dashboard/managemerchant" style={linkStyle}>
            Manage Merchant
          </NavLink>
        </nav>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {/* Topbar */}
        <div
          style={{
            height: "60px",
            background: "#198754",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 20px",
          }}
        >
          <h4>Welcome, Admin!</h4>
          <button
            onClick={handleLogout}
            style={{
              background: "#dc3545",
              border: "none",
              color: "#fff",
              padding: "8px 15px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Logout
          </button>
        </div>

        {/* Outlet for nested routes */}
        <div style={{ flex: 1, padding: "20px", background: "#f8f9fa" }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
