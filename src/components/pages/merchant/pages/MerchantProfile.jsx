import React from "react";

const MerchantProfile = () => {
  console.log(JSON.parse(localStorage.getItem("session.data")));

  const merchantSession = JSON.parse(localStorage.getItem("session.data") || "null");

  if (!merchantSession) {
    return <p style={{ color: "red" }}>No merchant data found. Please log in again.</p>;
  }

  return (
    <div className="p-4">
      <div className="profile-card">
        {/* {console.log("session"+merchantSession.toString())} */}
        <p><strong>Name:</strong> {merchantSession.name}</p>
        <p><strong>Email:</strong> {merchantSession.email}</p>
        <p><strong>Phone:</strong> {merchantSession.mobile}</p>
        <p><strong>Address:</strong> {merchantSession.address || "Not provided"}</p>
        <p><strong>Registered On:</strong> {merchantSession.reg_date}</p>
      </div>
    </div>
  );
};

export default MerchantProfile;




// import React, { useState, useEffect } from "react";
// import { getUserProfile } from "../../../../api/userApi"; 

// const MerchantProfile = () => {
//   const [user, setMerchant] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Parse merchant data from localStorage
//   const merchantSession = JSON.parse(localStorage.getItem("session.data") || "null");
//   console.log("session "+merchantSession?.id);
//   // useEffect(() => {
//   //   if (!merchantSession || !merchantSession.id) {
//   //     setError("No merchant ID found. Please log in again.");
//   //     setLoading(false);
//   //     return;
//   //   }

//   //   (async () => {
//   //     try {
//   //       const data = await getUserProfile(merchantSession.id);
//   //       setMerchant(data);
//   //     } catch (err) {
//   //       console.error("Error fetching profile:", err);
//   //       setError("Failed to load profile");
//   //     } finally {
//   //       setLoading(false);
//   //     }
//   //   })();
//   // }, [merchantSession?.id]);

//   // if (loading) return <p>Loading profile...</p>;
//   // if (error) return <p style={{ color: "red" }}>{error}</p>;

//   return (
//     <div className="p-4">
//       {user && (
//         <div className="profile-card">
          
//           <p><strong>Name:</strong> {merchantSession.name}</p>
//           <p><strong>Email:</strong> {merchantSession.email}</p>
//           <p><strong>Phone:</strong> {merchantSession.mobile}</p>
//           <p><strong>Address:</strong> {merchantSession.address}</p>
//           <p><strong>Registered On:</strong> {merchantSession.reg_date}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MerchantProfile;
