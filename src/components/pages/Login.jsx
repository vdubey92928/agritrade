import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import agritradeLogo from '../../assets/images/AgriTradeLogo.png';
import { userApiService } from '../../api/userApi';

const Login = () => {
  

  const inputEmailRef = useRef(null);
  const inputPasswordRef = useRef(null);


  const errorEmailRef = useRef(null);
  const errorPasswordRef = useRef(null);

  const [isError,setError] = useState({
    email:true,
    password:true
  });

  const navigate = useNavigate(null);

  function handleLoginSubmit(e){
      e.preventDefault();
      
      //Email
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (inputEmailRef.current.value.trim() === "") {
        errorEmailRef.current.textContent = "Email is Required";
        errorEmailRef.current.style.color = "red";
        inputEmailRef.current.style.border = "2px solid red";
        setError((prevState) => {
          return { ...prevState, email: true };
        });
      } else if (!emailRegex.test(inputEmailRef.current.value.trim())) {
        errorEmailRef.current.textContent = "Enter the Valid Email";
        errorEmailRef.current.style.color = "red";
        inputEmailRef.current.style.border = "2px solid red";
        setError((prevState) => {
          return { ...prevState, email: true };
        });
      } else {
        errorEmailRef.current.textContent = "";
        errorEmailRef.current.style.color = "";
        inputEmailRef.current.style.border = "";
        setError((prevState) => {
          return { ...prevState, email: false };
        });
      }

      //password 
    if(inputPasswordRef.current.value.trim() === "") {
      errorPasswordRef.current.textContent = "Password is Required";
      errorPasswordRef.current.style.color = "red";
      inputPasswordRef.current.style.border = "2px solid red";
      setError((prevState) => {
        return { ...prevState, password: true };
      });
    } else {
      errorPasswordRef.current.textContent = "";
      errorPasswordRef.current.style.color = "";
      inputPasswordRef.current.style.border = "";
      setError((prevState) => {
        return { ...prevState, password: false };
      });
    }
    console.log(isError);
      if (!isError.email && !isError.password) {
      const credentials = {
        email: inputEmailRef.current.value.trim(),
        password: inputPasswordRef.current.value.trim()
      };

      userApiService.LoginFarmer(credentials, function(data) {
        // console.log("Logged in:", data);
        localStorage.setItem("farmerId", data.id); 
        if (data.role_id === 'Farmer' || data.role_id === 'Merchant' || data.role_id === 'Admin') {
          const session_data = {
            id: data.id,
            name: data?.name,
            email: data?.email,
            role: data?.role_id, // store role_id here
          };
          window.localStorage.setItem('session.data',JSON.stringify(session_data));
        if(data.role_id === 'Farmer'){
          navigate("/farmer/dashboard");
        }
        else if(data.role_id === 'Merchant'){
          navigate("/merchant/dashboard");
        }else{
          navigate("/admin/dashboard");
        }
      }
      });
    }
    
  }
  
  return (
    <React.Fragment>
    
      <div className="container-fluid py-5" style={{
      backgroundImage: 'linear-gradient(rgba(255,255,255,0.85), rgba(255,255,255,0.85)), url("https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80")',
      backgroundSize: 'cover',
      minHeight: '100vh',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      <div className="row justify-content-center">
        <div className="col-lg-5 col-md-8">
          <div className="card shadow-lg" style={{
            border: 'none',
            borderRadius: '15px',
            backgroundColor: 'rgba(248,249,250,0.97)'
          }}>
            <div
              className="card-header py-3"
              style={{
                background: 'linear-gradient(90deg, #e6f3ea, #f4fff8)',
                color: '#2d572c',
                borderRadius: '15px 15px 0 0',
                borderBottom: '2px solid #d0e6d8',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '14px',
                padding: '15px'
              }}
            >
              <img
                src={agritradeLogo}
                alt="AgriTrade Logo"
                style={{
                  height: '55px',
                  width: 'auto',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.15))'
                }}
              />
              <h2
                className="mb-0"
                style={{
                  fontSize: '26px',
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: '#2d572c'
                }}
              >
                <i
                  className="bi bi-box-arrow-in-right"
                  style={{ fontSize: '1.5rem', color: '#3b7f3b' }}
                ></i>
                Login
              </h2>
            </div>

            <div className="card-body p-4">
              <form >
                

                <div className="mb-4">
                  <label className="form-label">Email Address*</label>
                  <input
                    type="email"
                    name="email"
                    ref={inputEmailRef}
                    placeholder="Enter your email"
                    style={{ fontSize: '14px' }}
                  />
                 <span ref={errorEmailRef}></span>
                </div>

                <div className="mb-4">
                  <label className="form-label">Password*</label>
                  <input
                    type="password"
                    name="password"
                    ref={inputPasswordRef}
                    placeholder="Enter your password"
                    style={{ fontSize: '14px' }}
                  />
                  <span ref={errorPasswordRef}></span>
                </div>

                <div className="mb-4 d-flex justify-content-between align-items-center">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="rememberMe"
                      style={{ fontSize: '14px' }}
                    />
                    <label className="form-check-label" htmlFor="rememberMe">
                      Remember me
                    </label>
                  </div>
                  <a href="/forgot-password" className="text-success" style={{ fontSize: '14px' }}>
                    Forgot password?
                  </a>
                </div>

                <div className="d-grid gap-2">
                  <button
                  onClick={handleLoginSubmit}
                    type="button"
                    className="btn py-2"
                    style={{
                      background: 'linear-gradient(135deg, #155C2B, #1F7136)',
                      color: 'white',
                      fontSize: '16px',
                      fontWeight: '500'
                    }}
                  >Login
                  </button>
                </div>
              </form>
            </div>

            <div className="card-footer text-center py-3" style={{
              background: '#f8f9fa',
              borderRadius: '0 0 15px 15px',
              borderTop: '1px solid rgba(0,0,0,0.1)',
              fontSize: '14px'
            }}>
              <p className="mb-0">
                Don't have an account?{' '}
                <a href="/register" className="text-success fw-semibold">
                  Register here
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </React.Fragment>
  );
};

export default Login;