import React from "react";
import "../css/style.css"; // custom styles

export default function Home() {
  return (
    <React.Fragment>
      <div className="container-fluid index-section mt-4">

        {/* revolution section */}
        <div className="container">
          <div className="row mt-5">
            <div className="col-sm ">
              <h1>Revolutionizing Agriculture Trading</h1>
              <p>
                Connect Farmers directly with Merchants. No Middlemen.
                Maximum Profit to Farmers.
              </p>
              <button className="btn-primary-custom">Get Started</button>
            </div>
            <div className="col-sm hero-img">
              <div className="img-placeholder"><img src={require("../../assets/images/main1.png")} className="ms-5 h-100 w-75w" /></div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="container features">
          <h3><u>Features</u> :-</h3>
          <div className="row mt-5">
            <div className="col-sm">
              <div className="col-sm feature-box">
                <div className="icon-placeholder"><img src={require("../../assets/images/dir.png")} className="h-100 w-100 m-0 p-0" /></div>
                <h5>Direct Connection</h5>
                <p>
                  Direct connection
                </p>
              </div>
            </div>
            <div className="col-sm">
              <div className="col-sm feature-box">
                <div className="icon-placeholder"><img src={require("../../assets/images/r.jpeg")} className="h-100 w-100 m-0 p-0" /></div>
                <h5>Reduced Casts</h5>
                <p>
                  Manage Listting
                </p>
              </div>
            </div>
            <div className="col-sm">
              <div className="col-sm feature-box">
                <div className="icon-placeholder"><img src={require("../../assets/images/p1.jpeg")} className="h-100 w-100 m-0 p-0" /></div>
                <h5>Secure Payments</h5>
                <p>
                  Direct connection
                </p>
              </div>
            </div>
            <div className="col-sm">
              <div className="col-sm feature-box">
                <div className="icon-placeholder"><img src={require("../../assets/images/p2.jpeg")} className="h-100 w-100 m-0 p-0" /></div>
                <h5>Bulks Orders</h5>
                <p>
                  Easy Payments 
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="container how-it-works mb-5">
          <h3><u>How It Works</u> :-</h3>
          <div className="row  mt-5 steps-row">
            <div className="col-sm step-box">
              <div className="icon-placeholder"><img src={require("../../assets/images/l1.jpeg")} className="h-100 w-100" /></div>
              <p>1 Farmer Posts Product</p>
            </div>
            <div className="col-sm-auto ">→</div>
            <div className="col-sm step-box">
              <div className="icon-placeholder"><img src={require("../../assets/images/l2.jpeg")} className="h-100 w-100" /></div>
              <p>2 Merchant Places Order</p>
            </div>
            <div className="col-sm-auto ">→</div>
            <div className="col-sm step-box">
              <div className="icon-placeholder"><img src={require("../../assets/images/l3.jpeg")} className="h-100 w-100" /></div>
              <p>3 Delivery & Payment via Platform</p>
            </div>
          </div>
        </div>

        {/* For Farmers / Merchants */}
        {/* <div className="container for-section m-5">
          <div className="row mt-5 m-auto">
            <div className="col-sm-1"></div>
            <div className="col-sm-4">
              <div className="col-sm for-farmers">
                <h4 className="text-center"><u>For Farmers</u></h4>
                <ul>
                  <li>Easy product listing</li>
                  <li>Direct chat with buyers</li>
                  <li>No hidden charges</li>
                </ul>
                <button className="btn-primary-custom w-100">Farmer Registration</button>
              </div>
            </div>
            <div className="col-sm-2"></div>
            <div className="col-sm-4">
              <div className="col-sm for-farmers">
                <h4 className="text-center"><u>For Merchant</u></h4>
                <ul>
                  <li>Easy product listing</li>
                  <li>Direct chat with buyers</li>
                  <li>No hidden charges</li>
                </ul>
                <button className="btn-primary-custom  w-100">Merchant Registration</button>
              </div>
            </div>
            <div className="col-sm-1"></div>
          </div>

        </div> */}

      </div>
    </React.Fragment>
  );
}