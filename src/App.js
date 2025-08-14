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
import FarmerProfile from "./components/pages/farmer/pages/FarmerProfile";
import Orders from "./components/pages/farmer/pages/Orders";
import Quotations from "./components/pages/farmer/pages/Quotations";
import AddProduct from "./components/pages/farmer/pages/AddProduct";
import ManageProducts from "./components/pages/farmer/pages/ManageProducts";
import EditProduct from "./components/pages/farmer/pages/EditProducts";
import MerchantDashboard from "./components/pages/merchant/MerchantDashboard";
import Product from "./components/pages/Product";
import ProtectedRoutes from "./components/helper/ProtectedRoutes";
import MerchantProfile from "./components/pages/merchant/pages/MerchantProfile";

import AdminDashboard from "./components/pages/admin/AdminDashboard";
import ManageFarmer from "./components/pages/admin/pages/ManageFarmer";
import ManageMerchant from "./components/pages/admin/pages/ManageMerchant";



function App() {
  const location = useLocation();
      const isFarmerDashboard = location.pathname.startsWith("/farmer_dashboard");
      const isMerchantDashboard = location.pathname.startsWith("/merchant_dashboard");
      const isAdminDashboard = location.pathname.startsWith("/admin_dashboard");
    return (
    <React.Fragment>
      
       {!isAdminDashboard && !isFarmerDashboard && !isMerchantDashboard && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product" element={<Product />} />

        <Route path="/register" element={<Register />} />
        
        <Route path="/farmerreg" element={<FarmerRegistration />} />
        <Route path="/merchantreg" element={<MerchantRegistartion />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />

       
        <Route path="/farmer_dashboard" element={
          <ProtectedRoutes endpoint={"/login"} message={"session-expired"}>
            <FarmerDashboard />
          </ProtectedRoutes>
        }>
          <Route index element={<DashboardHome />} />
          <Route path="profile" element={<FarmerProfile />} />
          <Route path="orders" element={<Orders />} />
          <Route path="quotation" element={<Quotations />} />
          <Route path="add-product" element={<AddProduct />} />
          <Route path="manage-products" element={<ManageProducts />} />
          <Route path="edit-product/:id" element={<EditProduct />} />
        </Route>


        <Route path="/merchant_dashboard" element={
          <ProtectedRoutes endpoint={"/login"} message={"session-expired"}>
            <MerchantDashboard />
          </ProtectedRoutes>
        }>
          <Route index element={<DashboardHome />} />
          <Route path="profile" element={<MerchantProfile/>} />
          <Route path="orders" element={<Orders />} />
          
        </Route>




         <Route path="/admin_dashboard" element={
          <ProtectedRoutes endpoint={"/login"} message={"session-expired"}>
            <AdminDashboard />
          </ProtectedRoutes>
        }>
          <Route index element={<DashboardHome />} />
          <Route path="profile" element={<MerchantProfile/>} />
          <Route path="managefarmer" element={<ManageFarmer />} />
          <Route path="managemerchant" element={<ManageMerchant />} />
          
        </Route>


      </Routes>

      {!isAdminDashboard && !isFarmerDashboard && !isMerchantDashboard && <Footer />}
    </React.Fragment>
  );
}

export default App;