import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import agritradeLogo from '../../assets/images/AgriTradeLogo.png';
import { userApiService } from '../../api/userApi';

const Login = () => {
  const inputEmailRef = useRef(null);
  const inputPasswordRef = useRef(null);
  const errorEmailRef = useRef(null);
  const errorPasswordRef = useRef(null);

  const [isError, setError] = useState({ email: true, password: true });

  const navigate = useNavigate();

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    // Email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (inputEmailRef.current.value.trim() === '') {
      errorEmailRef.current.textContent = 'Email is Required';
      inputEmailRef.current.style.border = '2px solid red';
      setError((prev) => ({ ...prev, email: true }));
    } else if (!emailRegex.test(inputEmailRef.current.value.trim())) {
      errorEmailRef.current.textContent = 'Enter a valid email';
      inputEmailRef.current.style.border = '2px solid red';
      setError((prev) => ({ ...prev, email: true }));
    } else {
      errorEmailRef.current.textContent = '';
      inputEmailRef.current.style.border = '';
      setError((prev) => ({ ...prev, email: false }));
    }

    // Password validation
    if (inputPasswordRef.current.value.trim() === '') {
      errorPasswordRef.current.textContent = 'Password is Required';
      inputPasswordRef.current.style.border = '2px solid red';
      setError((prev) => ({ ...prev, password: true }));
    } else {
      errorPasswordRef.current.textContent = '';
      inputPasswordRef.current.style.border = '';
      setError((prev) => ({ ...prev, password: false }));
    }

    if (!isError.email && !isError.password) {
      const credentials = {
        email: inputEmailRef.current.value.trim(),
        password: inputPasswordRef.current.value.trim(),
      };

      userApiService.LoginFarmer(credentials, (data) => {
        if (['Farmer', 'Merchant', 'Admin'].includes(data.role_id)) {
          const session_data = {
            id: data.id,
            name: data.name,
            email: data.email,
            mobile: data.mobile,
            reg_date: data.reg_date,
            role: data.role_id,
          };
          window.localStorage.setItem('session.data', JSON.stringify(session_data));

          if (data.role_id === 'Farmer') navigate('/farmer/dashboard');
          else if (data.role_id === 'Merchant') navigate('/merchant/dashboard');
          else navigate('/admin/dashboard');
        }
      });
    }
  };

  return (
    <div
      className="container-fluid py-5"
      style={{
        backgroundImage:
          'linear-gradient(rgba(255,255,255,0.85), rgba(255,255,255,0.85)), url("https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80")',
        backgroundSize: 'cover',
        minHeight: '100vh',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="row justify-content-center">
        <div className="col-lg-5 col-md-8">
          <div
            className="card shadow-lg"
            style={{ border: 'none', borderRadius: '15px', backgroundColor: 'rgba(248,249,250,0.97)' }}
          >
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
                padding: '15px',
              }}
            >
              <img
                src={agritradeLogo}
                alt="AgriTrade Logo"
                style={{
                  height: '55px',
                  width: 'auto',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.15))',
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
                  color: '#2d572c',
                }}
              >
                <i className="bi bi-box-arrow-in-right" style={{ fontSize: '1.5rem', color: '#3b7f3b' }}></i>
                Login
              </h2>
            </div>

            <div className="card-body p-4">
              <form>
                <table className="table borderless">
                  <tbody>
                    <tr>
                      <td>
                        <input
                          type="email"
                          ref={inputEmailRef}
                          placeholder="Enter your email"
                          className="form-control mb-2"
                          style={{ fontSize: '14px' }}
                        />
                        <span ref={errorEmailRef} style={{ fontSize: '12px', color: 'red' }}></span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <input
                          type="password"
                          ref={inputPasswordRef}
                          placeholder="Enter your password"
                          className="form-control mb-2"
                          style={{ fontSize: '14px' }}
                        />
                        <span ref={errorPasswordRef} style={{ fontSize: '12px', color: 'red' }}></span>
                      </td>
                    </tr>
                    <tr>
                      <td className="d-flex justify-content-between align-items-center mb-2">
                        <div className="form-check">
                          <input type="checkbox" className="form-check-input" id="rememberMe" />
                          <label className="form-check-label" htmlFor="rememberMe" style={{ fontSize: '14px' }}>
                            Remember me
                          </label>
                        </div>
                        <a href="/forgot-password" className="text-success" style={{ fontSize: '14px' }}>
                          Forgot password?
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center">
                        <button
                          type="button"
                          onClick={handleLoginSubmit}
                          className="btn py-2 w-50"
                          style={{
                            background: 'linear-gradient(135deg, #155C2B, #1F7136)',
                            color: 'white',
                            fontSize: '16px',
                            fontWeight: '500',
                          }}
                        >
                          Login
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </form>
            </div>

            <div
              className="card-footer text-center py-3"
              style={{ background: '#f8f9fa', borderRadius: '0 0 15px 15px', borderTop: '1px solid rgba(0,0,0,0.1)', fontSize: '14px' }}
            >
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
  );
};

export default Login;
