import React, { useState, useEffect } from "react";
import { getUserProfile } from "../../../../api/userApi"; 

const MerchantProfile = () => {
  const [user, setMerchant] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Parse merchant data from localStorage
  const merchantSession = JSON.parse(localStorage.getItem("session.data") || "null");

  useEffect(() => {
    if (!merchantSession || !merchantSession.id) {
      setError("No merchant ID found. Please log in again.");
      setLoading(false);
      return;
    }

    (async () => {
      try {
        const data = await getUserProfile(merchantSession.id);
        setMerchant(data);
      } catch (err) {
        console.error("Error fetching profile:", err);
        setError("Failed to load profile");
      } finally {
        setLoading(false);
      }
    })();
  }, [merchantSession?.id]);

  if (loading) return <p>Loading profile...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div className="p-4">
      {user && (
        <div className="profile-card">
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

export default MerchantProfile;
