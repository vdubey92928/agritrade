import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import agritradeLogo from '../../assets/images/AgriTradeLogo.png';


const LoginPage = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!credentials.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(credentials.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!credentials.password) {
      newErrors.password = 'Password is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoginError('');
    
    if (validateForm()) {
      setIsLoading(true);
      try {
        // Replace with your actual API call
        const response = await mockLoginApi(credentials);
        
        if (response.success) {
          localStorage.setItem('agritrade_user', JSON.stringify(response.user));
          localStorage.setItem('agritrade_token', response.token);
          navigate('/dashboard');
        } else {
          setLoginError(response.message || 'Login failed. Please try again.');
        }
      } catch (error) {
        setLoginError('An error occurred. Please try again later.');
        console.error('Login error:', error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  // Mock API function - replace with actual API call
  const mockLoginApi = async (credentials) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (credentials.email === 'user@agritrade.com' && 
        credentials.password === 'password123') {
      return {
        success: true,
        user: {
          email: credentials.email,
          name: 'AgriTrade User'
        },
        token: 'mock-jwt-token'
      };
    }
    return { success: false, message: 'Invalid credentials' };
  };

  return (
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
              <form onSubmit={handleSubmit}>
                {loginError && (
                  <div className="alert alert-danger" style={{ fontSize: '14px' }}>
                    {loginError}
                  </div>
                )}

                <div className="mb-4">
                  <label className="form-label">Email Address*</label>
                  <input
                    type="email"
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    name="email"
                    value={credentials.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    style={{ fontSize: '14px' }}
                  />
                  {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>

                <div className="mb-4">
                  <label className="form-label">Password*</label>
                  <input
                    type="password"
                    className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                    name="password"
                    value={credentials.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    style={{ fontSize: '14px' }}
                  />
                  {errors.password && <div className="invalid-feedback">{errors.password}</div>}
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
                    type="submit"
                    className="btn py-2"
                    disabled={isLoading}
                    style={{
                      background: 'linear-gradient(135deg, #155C2B, #1F7136)',
                      color: 'white',
                      fontSize: '16px',
                      fontWeight: '500'
                    }}
                  >
                    {isLoading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Logging in...
                      </>
                    ) : (
                      'Login'
                    )}
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
  );
};

export default LoginPage;