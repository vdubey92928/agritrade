import React from "react";

const FarmerProfile = () => {
  

  const farmerSession = JSON.parse(localStorage.getItem("session.data") || "null");

  if (!farmerSession) {
    return <p style={{ color: "red" }}>No farmer data found. Please log in again.</p>;
  }

  return (
    <div className="p-4">
      <div className="profile-card">
        {/* {console.log("session"+merchantSession.toString())} */}
        <p><strong>Name:</strong> {farmerSession.name}</p>
        <p><strong>Email:</strong> {farmerSession.email}</p>
        <p><strong>Phone:</strong> {farmerSession.mobile}</p>
        <p><strong>Address:</strong> {farmerSession.address || "Not provided"}</p>
        <p><strong>Registered On:</strong> {farmerSession.reg_date}</p>
      </div>
    </div>
  );
};

export default FarmerProfile;
