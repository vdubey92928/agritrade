import React, { useState, useEffect } from "react";
import { getFarmerProfile } from "../../../../api/userApi";

const Profile = () => {
  const [user, setFarmer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Get farmerId from localStorage (assuming you store it after login)
  const farmerId = localStorage.getItem("farmerId");

  useEffect(() => {
    if (!farmerId) {
      setError("No farmer ID found. Please log in again.");
      setLoading(false);
      return;
    }

    (async () => {
      try {
        const data = await getFarmerProfile(farmerId);
        setFarmer(data);
      } catch (err) {
        console.error("Error fetching profile:", err);
        setError("Failed to load profile");
      } finally {
        setLoading(false);
      }
    })();
  }, [farmerId]);

  if (loading) return <p>Loading profile...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div className="p-4">
     
      {user && (
        <div className="profile-card">
          <p ><strong><h2><u>{user.role_id.charAt(0).toUpperCase()}{user.role_id.slice(1)} Profile</u></h2></strong> </p>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.mobile}</p>
          <p><strong>Address:</strong> {user.address}</p>
          <p><strong>Registered On:</strong> {user.reg_date}</p>
        </div>
      )}
    </div>
  );
};

export default Profile;
