
import React, { useState} from 'react';

import Header from "../layout/Header";
import Footer from "../layout/Footer";

const FarmerRegistration = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        fatherName: '',
        motherName: '',
        dob: '',
        mobile: '',
        email: '',
        state: '',
        district: '',
        block: '',
        village: '',
        postalCode: '',
        fullAddress: '',
        idType: 'aadhaar',
        idNumber: '',
        productionAmount: '',
        landArea: '',
        primaryCrop: '',
        bankName: '',
        branchName: '',
        accountNumber: '',
        ifscCode: '',
        accountHolder: '',
        profileImage: null,
        agreeTerms: false
    });

    const [backgroundImage, setBackgroundImage] = useState(
        'linear-gradient(rgba(255,255,255,0.85), rgba(255,255,255,0.85)), url("https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80")'
    );
    // const fileInputRef = useRef(null);

    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;
        if (type === 'file') {
            if (files && files[0]) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    setBackgroundImage(`linear-gradient(rgba(255,255,255,0.85), rgba(255,255,255,0.85)), url("${event.target.result}")`);
                };
                reader.readAsDataURL(files[0]);
                setFormData(prev => ({
                    ...prev,
                    [name]: files[0]
                }));
            }
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: type === 'checkbox' ? checked : value
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add form submission logic here
    };

    return (
        <React.Fragment>
            <Header/>
        <div className="container-fluid py-5" style={{
            backgroundImage: backgroundImage,
            backgroundSize: 'cover',
            minHeight: '100vh',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
        }}>
            <div className="row justify-content-center">
                <div className="col-lg-9">
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
                                src={require('../../assets/images/AgriTradeLogo.png')}
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
                                    className="bi bi-person-badge"
                                    style={{ fontSize: '1.5rem', color: '#3b7f3b' }}
                                ></i>
                                Farmer Registration Form
                            </h2>
                        </div>

                        <div className="card-body p-4">
                            <form onSubmit={handleSubmit} style={{ fontSize: '12px' }}>
                                {/* Personal Details */}
                                <div className="p-3 mb-4 shadow rounded bg-white">
                                    <h5 className="text-success mb-3" style={{ fontSize: '14px' }}>
                                        <i className="bi bi-person-lines-fill me-2"></i>
                                        Personal Details
                                    </h5>
                                    <div className="row g-3">
                                        {/* First Name */}
                                        <div className="col-md-4">
                                            <label className="form-label">First Name*</label>
                                            <input type="text"
                                                className="form-control"
                                                name="firstName"
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                required
                                                style={{width: '250px', fontSize: '12px' }}
                                            />
                                        </div>
                                        <div className="col-md-4">
                                            <label className="form-label">Middle Name</label>
                                            <input type="text"
                                                className="form-control"
                                                name="middleName"
                                                value={formData.middleName}
                                                onChange={handleChange}
                                                style={{width: '250px', fontSize: '12px' }}
                                            />
                                        </div>
                                        <div className="col-md-4">
                                            <label className="form-label">Last Name*</label>
                                            <input type="text"
                                                className="form-control"
                                                name="lastName"
                                                value={formData.lastName}
                                                onChange={handleChange}
                                                required
                                                style={{width: '250px', fontSize: '12px' }}
                                            />
                                        </div>
                                        <div className="col-md-4">
                                            <label className="form-label">Father's Name*</label>
                                            <input type="text"
                                                className="form-control"
                                                name="fatherName"
                                                value={formData.fatherName}
                                                onChange={handleChange}
                                                required
                                                style={{width: '250px', fontSize: '12px' }}
                                            />
                                        </div>
                                        
                                        <div className="col-md-4">
                                            <label className="form-label">Date of Birth*</label>
                                            <input type="date"
                                                className="form-control"
                                                name="dob"
                                                value={formData.dob}
                                                onChange={handleChange}
                                                required
                                                style={{width: '250px', fontSize: '12px' }}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Contact Details */}
                                <div className="p-3 mb-4 shadow rounded bg-white">
                                    <h5 className="text-success mb-3" style={{ fontSize: '14px' }}>
                                        <i className="bi bi-telephone-fill me-2"></i>
                                        Contact Details
                                    </h5>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <label className="form-label">Mobile Number*</label>
                                            <div className="input-group">
                                                <span className="input-group-text" style={{ fontSize: '12px' }}>+91</span>
                                                <input type="tel"
                                                    className="form-control"
                                                    name="mobile"
                                                    value={formData.mobile}
                                                    onChange={handleChange}
                                                    pattern="[0-9]{10}"
                                                    required
                                                    style={{width: '180px', fontSize: '12px' }}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">Email Address</label>
                                            <input type="email"
                                                className="form-control"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                style={{width: '250px', fontSize: '12px' }}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Address Details */}
                                <div className="p-3 mb-4 shadow rounded bg-white">
                                    <h5 className="text-success mb-3" style={{ fontSize: '14px' }}>
                                        <i className="bi bi-geo-alt-fill me-2"></i>
                                        Address Details
                                    </h5>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <label className="form-label">State*</label>
                                            <input type="text"
                                                className="form-control"
                                                name="state"
                                                value={formData.state}
                                                onChange={handleChange}
                                                required
                                                style={{ fontSize: '12px' }}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">District*</label>
                                            <input type="text"
                                                className="form-control"
                                                name="district"
                                                value={formData.district}
                                                onChange={handleChange}
                                                required
                                                style={{ fontSize: '12px' }}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">Block/Taluka*</label>
                                            <input type="text"
                                                className="form-control"
                                                name="block"
                                                value={formData.block}
                                                onChange={handleChange}
                                                required
                                                style={{ fontSize: '12px' }}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">Village*</label>
                                            <input type="text"
                                                className="form-control"
                                                name="village"
                                                value={formData.village}
                                                onChange={handleChange}
                                                required
                                                style={{ fontSize: '12px' }}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">Postal Code*</label>
                                            <input type="text"
                                                className="form-control"
                                                name="postalCode"
                                                value={formData.postalCode}
                                                onChange={handleChange}
                                                pattern="[0-9]{6}"
                                                required
                                                style={{ fontSize: '12px' }}
                                            />
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label">Full Address*</label>
                                            <textarea
                                                className="form-control"
                                                name="fullAddress"
                                                value={formData.fullAddress}
                                                onChange={handleChange}
                                                rows="3"
                                                required
                                                style={{ fontSize: '12px' }}
                                            ></textarea>
                                        </div>
                                    </div>
                                </div>

                                {/* Identification */}
                                <div className="p-3 mb-4 shadow rounded bg-white">
                                    <h5 className="text-success mb-3" style={{ fontSize: '14px' }}>
                                        <i className="bi bi-card-checklist me-2"></i>
                                        Identification Details
                                    </h5>
                                    <div className="row g-3">
                                        <div className="col-md-4">
                                            <label className="form-label">ID Type*</label>
                                            <select
                                                className="form-select"
                                                name="idType"
                                                value={formData.idType}
                                                onChange={handleChange}
                                                required
                                                style={{ fontSize: '12px' }}>
                                                <option value="aadhaar">Aadhaar Card</option>
                                                <option value="voter">Voter ID</option>
                                                <option value="pan">PAN Card</option>
                                                <option value="driving">Driving License</option>
                                            </select>
                                        </div>
                                        <div className="col-md-8">
                                            <label className="form-label">ID Number*</label>
                                            <input type="text"
                                                className="form-control"
                                                name="idNumber"
                                                value={formData.idNumber}
                                                onChange={handleChange}
                                                required
                                                style={{ fontSize: '12px' }}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Agricultural Info */}
                                <div className="p-3 mb-4 shadow rounded bg-white">
                                    <h5 className="text-success mb-3" style={{ fontSize: '14px' }}>
                                        <i className="bi bi-tree-fill me-2"></i>
                                        Agricultural Information
                                    </h5>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <label className="form-label">Annual Production*</label>
                                            <select
                                                className="form-select"
                                                name="productionAmount"
                                                value={formData.productionAmount}
                                                onChange={handleChange}
                                                required
                                                style={{ fontSize: '12px' }}>
                                                <option value="">Select Range</option>
                                                <option value="lt1">Less than 1 ton</option>
                                                <option value="1-5">1 - 5 tons</option>
                                                <option value="5-10">5 - 10 tons</option>
                                                <option value="10-20">10 - 20 tons</option>
                                                <option value="gt20">More than 20 tons</option>
                                            </select>
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">Land Area (acres)*</label>
                                            <input type="number"
                                                className="form-control"
                                                name="landArea"
                                                value={formData.landArea}
                                                onChange={handleChange}
                                                required
                                                style={{ fontSize: '12px' }}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">Primary Crop*</label>
                                            <input type="text"
                                                className="form-control"
                                                name="primaryCrop"
                                                value={formData.primaryCrop}
                                                onChange={handleChange}
                                                required
                                                style={{ fontSize: '12px' }}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Bank Details */}
                                <div className="p-3 mb-4 shadow rounded bg-white">
                                    <h5 className="text-success mb-3" style={{ fontSize: '14px' }}>
                                        <i className="bi bi-bank me-2"></i>
                                        Bank Account Details
                                    </h5>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <label className="form-label">Bank Name*</label>
                                            <input type="text"
                                                className="form-control"
                                                name="bankName"
                                                value={formData.bankName}
                                                onChange={handleChange}
                                                required
                                                style={{ fontSize: '12px' }}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">Branch Name*</label>
                                            <input type="text"
                                                className="form-control"
                                                name="branchName"
                                                value={formData.branchName}
                                                onChange={handleChange}
                                                required
                                                style={{ fontSize: '12px' }}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">Account Number*</label>
                                            <input type="text"
                                                className="form-control"
                                                name="accountNumber"
                                                value={formData.accountNumber}
                                                onChange={handleChange}
                                                required
                                                style={{ fontSize: '12px' }}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">IFSC Code*</label>
                                            <input type="text"
                                                className="form-control"
                                                name="ifscCode"
                                                value={formData.ifscCode}
                                                onChange={handleChange}
                                                required
                                                style={{ fontSize: '12px' }}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">Account Holder Name*</label>
                                            <input type="text"
                                                className="form-control"
                                                name="accountHolder"
                                                value={formData.accountHolder}
                                                onChange={handleChange}
                                                required
                                                style={{ fontSize: '12px' }}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Terms and Submit Button */}
                                <div className="mb-4 form-check">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        name="agreeTerms"
                                        checked={formData.agreeTerms}
                                        onChange={handleChange}
                                        required
                                        style={{ fontSize: '12px' }}
                                    />
                                    <label className="form-check-label">
                                        I agree to the <a href="#terms" className="text-success">Terms and Conditions</a>*
                                    </label>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <button
                                        type="submit"
                                        className="btn w-25 py-2"
                                        style={{
                                            fontSize: '12px',
                                            background: 'linear-gradient(135deg, #155C2B, #1F7136)',
                                            color: 'white'
                                        }}
                                    >
                                        <i className="bi bi-check-circle me-2"></i>
                                        Register
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="card-footer text-center py-3" style={{
                            background: '#f8f9fa',
                            borderRadius: '0 0 15px 15px',
                            borderTop: '1px solid rgba(0,0,0,0.1)',
                            fontSize: '12px'
                        }}>
                            <p className="mb-0">
                                <i className="bi bi-telephone text-success me-2"></i>
                                Need help? Contact us at <a href="mailto:support@farmreg.com" className="text-success">support@farmreg.com</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </React.Fragment>
    );
};

export default FarmerRegistration;
