// src/components/pages/farmer/FarmerDashboardFull.jsx
import React, { useEffect, useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

const FarmerDashboard = () => {
  const navigate = useNavigate();
  const [sessionData, setSessionData] = useState(null);
  const [isOpen, setIsOpen] = useState(true); // controls sidebar
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

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

  // handle window resize
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) {
        setIsOpen(true); // always open on desktop
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
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
      {isOpen && (
        <div
          style={{
            width: "250px",
            background: "#2c3e50",
            color: "#fff",
            padding: "20px",
            position: isMobile ? "absolute" : "relative",
            height: "100%",
            zIndex: 1000,
          }}
        >
          {/* Close button only visible on mobile */}
          {isMobile && (
            <button
              onClick={() => setIsOpen(false)}
              style={{
                background: "transparent",
                border: "none",
                fontSize: "24px",
                color: "#fff",
                cursor: "pointer",
                float: "right",
              }}
            >
              ×
            </button>
          )}

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
          </nav>
        </div>
      )}

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
          <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
            {/* Hamburger toggle (only on mobile) */}
            {isMobile && (
              <button
                onClick={() => setIsOpen(!isOpen)}
                style={{
                  background: "transparent",
                  border: "none",
                  fontSize: "24px",
                  color: "#fff",
                  cursor: "pointer",
                }}
              >
                ☰
              </button>
            )}

            {sessionData && (
              <div>
                <h4 style={{ margin: 0 }}>Welcome, {sessionData.name}</h4>
                <small>{sessionData.email}</small>
              </div>
            )}
          </div>

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
