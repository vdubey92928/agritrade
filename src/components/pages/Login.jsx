import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
function Login(){
    return(
      <React.Fragment>
        <Header />
           <div className="container for-section m-5">
        <div className="row mt-5 m-auto">
              <div className="col-sm-4">
                 <div className="col-sm for-farmers">
                <h4 className="text-center"><u>For login</u></h4>
               
                 <a href="/templogin"><button className="btn-primary-custom w-100">Login</button></a>
              </div>
              </div>
            <div className="col-sm-4">
              <div className="col-sm for-farmers">
                <h4 className="text-center"><u>For Farmers</u></h4>
                <ul>
                  <li>Easy product listing</li>
                  <li>Direct chat with buyers</li>
                  <li>No hidden charges</li>
                </ul>
                 <a href="/login/farmerreg"><button className="btn-primary-custom w-100">Farmer Registration</button></a>
              </div>
            </div>
            
              <div className="col-sm-4">
                <div className="col-sm for-farmers">
                  <h4 className="text-center"><u>For Merchant</u></h4>
                  <ul>
                    <li>Easy product listing</li>
                    <li>Direct chat with buyers</li>
                    <li>No hidden charges</li>
                  </ul>
                  <a href="/login/merchantreg"><button className="btn-primary-custom  w-100">Merchant Registration</button></a>
                </div>
              </div>
             
            </div>
       
          </div>
          <Footer/>
      </React.Fragment>

    );
}

export default Login;