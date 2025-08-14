// src/components/pages/farmer/FarmerDashboardFull.jsx
import React, { useEffect, useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

const FarmerDashboard = () => {
  const navigate = useNavigate();
  const [sessionData, setSessionData] = useState(null);

  useEffect(() => {
    const storedData = localStorage.getItem("session.data");
    if (storedData) {
      try {
        setSessionData(JSON.parse(storedData));
      } catch (e) {
        console.error("Invalid session data:", e);
      }
    }
  }, []);

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
        <h2>Farmer Panel</h2>
        <nav style={{ marginTop: "20px" }}>
          <NavLink to="/farmer/dashboard" style={linkStyle} end>
            Dashboard
          </NavLink>
          <NavLink to="/farmer/profile" style={linkStyle}>
            Profile
          </NavLink>
          <NavLink to="/farmer/orders" style={linkStyle}>
            Order Management
          </NavLink>
          <NavLink to="/farmer/quotation" style={linkStyle}>
            Quotations
          </NavLink>
          <NavLink to="/farmer/add-product" style={linkStyle}>
            Add Product
          </NavLink>
          <NavLink to="/farmer/manage-products" style={linkStyle}>
            Manage Products
          </NavLink>

          {sessionData && (
            <>
              <p>{sessionData.name}</p>
              <p>{sessionData.email}</p>
            </>
          )}

          <button
            onClick={handleLogout}
            style={{
              background: "transparent",
              color: "#fff",
              border: "none",
              padding: 0,
              marginTop: "10px",
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            Logout
          </button>
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
          <h4>Welcome, Farmer!</h4>
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

        <div style={{ flex: 1, padding: "20px", background: "#f8f9fa" }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default FarmerDashboard;
