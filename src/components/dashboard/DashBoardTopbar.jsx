
import React from "react";

const DashboardTopbar = () => {
  return (
    <div style={{
      height: "60px",
      background: "#198754",
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 20px"
    }}>
      <h4>Welcome, Farmer!</h4>
      <button style={{
        background: "#dc3545",
        border: "none",
        color: "#fff",
        padding: "8px 15px",
        borderRadius: "5px",
        cursor: "pointer"
      }}>Logout</button>
    </div>
  );
};

export default DashboardTopbar;
