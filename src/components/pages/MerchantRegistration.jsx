import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { userApiService } from "../../api/userApi";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
// import "bootstrap/dist/css/bootstrap.min.css";

const MerchantRegistration = () => {
  const inputFirstNameRef = useRef(null);
  const inputLastNameRef = useRef(null);
  const inputEmailRef = useRef(null);
  const inputCompanyRef = useRef(null);
  const inputCompanyTypeRef = useRef(null);
  const inputRegistrationNoRef = useRef(null);
  const inputPasswordRef = useRef(null);
  const inputMobileRef = useRef(null);
  const checkBoxTermsRef = useRef(null);
  const btnSubmitRef = useRef(null);

  const errorFnameRef = useRef(null);
  const errorlnameRef = useRef(null);
  const errorEmailRef = useRef(null);
  const errorCompnayRef = useRef(null);
  const errorRegistartionNoRef = useRef(null);
  const errorCompanyTypeRef = useRef(null);
  const errorMobileRef = useRef(null);
  const errorPasswordRef = useRef(null);

  const [isError, setError] = useState({
    firstName: true,
    lastName: true,
    email: true,
    mobile: true,
    password: true,
  });

  useEffect(() => {
    checkBoxTermsRef.current.checked = false;
    btnSubmitRef.current.disabled = false;
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    // First Name
    if (inputFirstNameRef.current.value.trim() === "") {
      errorFnameRef.current.textContent = "First Name is Required";
      errorFnameRef.current.classList.add("text-danger");
      setError((prev) => ({ ...prev, firstName: true }));
    } else {
      errorFnameRef.current.textContent = "";
      setError((prev) => ({ ...prev, firstName: false }));
    }

    // Last Name
    if (inputLastNameRef.current.value.trim() === "") {
      errorlnameRef.current.textContent = "Last Name is Required";
      errorlnameRef.current.classList.add("text-danger");
      setError((prev) => ({ ...prev, lastName: true }));
    } else {
      errorlnameRef.current.textContent = "";
      setError((prev) => ({ ...prev, lastName: false }));
    }

    // Email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (inputEmailRef.current.value.trim() === "") {
      errorEmailRef.current.textContent = "Email is Required";
      errorEmailRef.current.classList.add("text-danger");
      setError((prev) => ({ ...prev, email: true }));
    } else if (!emailRegex.test(inputEmailRef.current.value.trim())) {
      errorEmailRef.current.textContent = "Enter a Valid Email";
      errorEmailRef.current.classList.add("text-danger");
      setError((prev) => ({ ...prev, email: true }));
    } else {
      errorEmailRef.current.textContent = "";
      setError((prev) => ({ ...prev, email: false }));
    }

    // Mobile
    const MobileRegex = /^[6-9]{1}[0-9]{9}$/;
    if (inputMobileRef.current.value.trim() === "") {
      errorMobileRef.current.textContent = "Mobile is Required";
      errorMobileRef.current.classList.add("text-danger");
      setError((prev) => ({ ...prev, mobile: true }));
    } else if (!MobileRegex.test(inputMobileRef.current.value.trim())) {
      errorMobileRef.current.textContent = "Invalid Mobile No";
      errorMobileRef.current.classList.add("text-danger");
      setError((prev) => ({ ...prev, mobile: true }));
    } else {
      errorMobileRef.current.textContent = "";
      setError((prev) => ({ ...prev, mobile: false }));
    }

    // Password
    if (inputPasswordRef.current.value.trim() === "") {
      errorPasswordRef.current.textContent = "Password is Required";
      errorPasswordRef.current.classList.add("text-danger");
      setError((prev) => ({ ...prev, password: true }));
    } else {
      errorPasswordRef.current.textContent = "";
      setError((prev) => ({ ...prev, password: false }));
    }

    if (!checkBoxTermsRef.current.checked) {
      window.alert("Please Accept the Terms and conditions");
      return;
    }

    const MerchantRegisterData = {
      name: inputFirstNameRef.current.value + " " + inputLastNameRef.current.value,
      email: inputEmailRef.current.value,
      mobile: inputMobileRef.current.value,
      company_name: inputCompanyRef.current.value,
      company_reg_name: inputRegistrationNoRef.current.value,
      company_type: inputCompanyTypeRef.current.value,
      password: inputPasswordRef.current.value,
      role_id: "Merchant",
      reg_date: new Date().toISOString().split("T")[0].toString(),
    };

    if (!isError.firstName && !isError.lastName && !isError.mobile && !isError.email && !isError.password) {
      userApiService.RegisterMerchant(MerchantRegisterData);
    }
  }

  return (
    <React.Fragment>

    <Header/>
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card shadow p-4" style={{ maxWidth: "600px", width: "100%" }}>
        <h3 className="text-center mb-4" 
        style={{
                      backgroundColor: "#4CAF50",
                      borderColor: "#4CAF50",
                      padding: "10px 20px",
                      fontWeight: "bold",
        }}
        
        >Merchant Registration</h3>
        <form onSubmit={handleSubmit}>
          <table className="table table-borderless">
            <tbody>
              <tr>
                <td>First Name:</td>
                <td>
                  <input type="text" className="form-control" ref={inputFirstNameRef} />
                  <small ref={errorFnameRef}></small>
                </td>
              </tr>
              <tr>
                <td>Last Name:</td>
                <td>
                  <input type="text" className="form-control" ref={inputLastNameRef} />
                  <small ref={errorlnameRef}></small>
                </td>
              </tr>
              <tr>
                <td>Company Name:</td>
                <td>
                  <input type="text" className="form-control" ref={inputCompanyRef} />
                  <small ref={errorCompnayRef}></small>
                </td>
              </tr>
              <tr>
                <td>Company Type:</td>
                <td>
                  <select className="form-select" ref={inputCompanyTypeRef}>
                    <option value="">----select type----</option>
                    <option value="proprietorship">Proprietorship</option>
                    <option value="llp">LLP</option>
                    <option value="private limited">Private Limited</option>
                    <option value="public">Public</option>
                  </select>
                  <small ref={errorCompanyTypeRef}></small>
                </td>
              </tr>
              <tr>
                <td>Company Reg. No:</td>
                <td>
                  <input type="text" className="form-control" ref={inputRegistrationNoRef} />
                  <small ref={errorRegistartionNoRef}></small>
                </td>
              </tr>
              <tr>
                <td>Email:</td>
                <td>
                  <input type="email" className="form-control" ref={inputEmailRef} />
                  <small ref={errorEmailRef}></small>
                </td>
              </tr>
              <tr>
                <td>Mobile No:</td>
                <td>
                  <input type="text" className="form-control" ref={inputMobileRef} />
                  <small ref={errorMobileRef}></small>
                </td>
              </tr>
              <tr>
                <td>Password:</td>
                <td>
                  <input type="password" className="form-control" ref={inputPasswordRef} />
                  <small ref={errorPasswordRef}></small>
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" ref={checkBoxTermsRef} />
                    <label className="form-check-label">
                      I Accept the <NavLink to="/terms-conditions">Terms and Conditions</NavLink>
                    </label>
                  </div>
                </td>
              </tr>
              <tr>
                <td colSpan="2" className="text-center">
                  <button
                    type="submit"
                    className="btn btn-success"
                    style={{
                      backgroundColor: "#4CAF50",
                      borderColor: "#4CAF50",
                      padding: "10px 20px",
                      fontWeight: "bold",
                    }}
                    ref={btnSubmitRef}
                  >
                    Register
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div>
    <Footer/>

    </React.Fragment>
  );
};

export default MerchantRegistration;