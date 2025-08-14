import React from "react";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Login from "./components/pages/Login";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";

import {Routes, Route,useLocation } from "react-router-dom";
import FarmerRegistration from "./components/pages/FarmerRegistration";
import MerchantRegistartion from "./components/pages/MerchantRegistration";
import Register from "./components/pages/Register";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";


import FarmerDashboard from "./components/pages/farmer/FarmerDashboard"
import DashboardHome from "./components/pages/farmer/pages/DashboardHome";
import Profile from "./components/pages/farmer/pages/Profile";
import Orders from "./components/pages/farmer/pages/Orders";
import Sales from "./components/pages/farmer/pages/Sales";
import AddProduct from "./components/pages/farmer/pages/AddProduct";
import ManageProducts from "./components/pages/farmer/pages/ManageProducts";
import EditProduct from "./components/pages/farmer/pages/EditProducts";
import MerchantDashboard from "./components/pages/merchant/MerchantDashboard";

function App() {
  const location = useLocation();
      const isFarmerDashboard = location.pathname.startsWith("/farmer_dashboard");
      const isMerchantDashboard = location.pathname.startsWith("/merchant_dashboard");
    return (
    <React.Fragment>
      
       {!isFarmerDashboard && !isMerchantDashboard && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        <Route path="/farmerreg" element={<FarmerRegistration />} />
        <Route path="/merchantreg" element={<MerchantRegistartion />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />

       
        <Route path="/farmer_dashboard" element={<FarmerDashboard />}>
          <Route index element={<DashboardHome />} />
          <Route path="profile" element={<Profile />} />
          <Route path="orders" element={<Orders />} />
          <Route path="sales" element={<Sales />} />
          <Route path="add-product" element={<AddProduct />} />
          <Route path="manage-products" element={<ManageProducts />} />
          <Route path="edit-product/:id" element={<EditProduct />} />
        </Route>


        <Route path="/merchant_dashboard" element={<MerchantDashboard />}>
          <Route index element={<DashboardHome />} />
          <Route path="profile" element={<Profile />} />
          <Route path="orders" element={<Orders />} />
          
        </Route>


      </Routes>

      {!isFarmerDashboard && !isMerchantDashboard && <Footer />}
    </React.Fragment>
  );
}

export default App;