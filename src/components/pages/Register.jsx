import React from "react";


function Register(){
    return (

        <React.Fragment>
           
           
        <div className="container my-5">
  <div className="row justify-content-center g-4">

    {/* Farmer Card */}
    <div className="col-sm-4">
      <div className="card shadow-lg h-100">
        <div className="card-body">
          <h4 className="card-title text-center mb-3">
            <u>For Farmers</u>
          </h4>
          <ul className="list-unstyled ms-3">
            <li>✅ Easy product listing</li>
            <li>💬 Direct chat with buyers</li>
            <li>💲 No hidden charges</li>
          </ul>
          <div className="text-center mt-4">
            <a href="/farmerreg" className="btn btn-success w-75">
              Farmer Registration
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* Merchant Card */}
    <div className="col-sm-4">
      <div className="card shadow-lg h-100">
        <div className="card-body">
          <h4 className="card-title text-center mb-3">
            <u>For Merchant</u>
          </h4>
          <ul className="list-unstyled ms-3">

            <li>🔹 Easy product listing</li>
            <li>💬 Direct chat with buyers</li>
            <li>💲 No hidden charges</li>
          </ul>
          <div className="text-center mt-4">
            <a href="/merchantreg" className="btn btn-primary w-75">
              Merchant Registration
            </a>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>

         
        </React.Fragment>

    );
}

export default Register;