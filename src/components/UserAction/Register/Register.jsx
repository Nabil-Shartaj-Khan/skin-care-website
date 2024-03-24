import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import './Register.css';

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        location: '',
        gender: ''
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        const errors = {};

        if (!formData.username.trim()) {
            errors.username = "Username is required";
        } else if (!/^[a-zA-Z0-9]+$/.test(formData.username.trim())) {
            errors.username = "Username can only contain letters and numbers";
        }

        if (!formData.email.trim()) {
            errors.email = "Email is required";
        }

        if (formData.password.length < 8) {
            errors.password = "Password must be at least 8 characters long";
        }

        if (!formData.location) {
            errors.location = "Location is required";
        }

        if (!formData.gender) {
            errors.gender = "Gender is required";
        }

        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        try {
            const response = await axios.post('http://api.nuskinlaserandbeautyclinic.com.au/api/register', formData);
            console.log('Registration successful:', response.data);

            setFormData({
                username: '',
                email: '',
                password: '',
                location: '',
                gender: ''
            });

            navigate('/login', { state: { registrationSuccess: true } });
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {

                const errorMessage = error.response.data.message;
                if (errorMessage === 'Email already exists') {

                    setErrors({ email: `${errorMessage}, login instead.` });
                } else {

                    setErrors({ email: errorMessage });
                }
            } else {

                console.error('Registration failed:', error);
            }
        }
    };




    return (
        <div className="register-container">
            <div className="register-form">
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>

                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} />
                        {errors.username && <p className="error">{errors.username}</p>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
                        {errors.email && <p className="error">{errors.email}</p>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
                        {errors.password && <p className="error">{errors.password}</p>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="location">Location</label>
                        <select id="location" name="location" value={formData.location} onChange={handleChange}>
                            <option value="">Select Location</option>
                            <option value="sydney">Sydney</option>
                            <option value="melbourne">Melbourne</option>
                            <option value="brisbane">Brisbane</option>
                        </select>
                        {errors.location && <p className="error">{errors.location}</p>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="gender">
                            <b>Gender:</b>
                        </label>
                        <label htmlFor="male" className='ps-2 pe-1'>Male</label>
                        <input type="radio" id="male" name="gender" value="male" checked={formData.gender === 'male'} onChange={handleChange} />
                        <label htmlFor="female" className='ps-2 pe-1'>Female</label>
                        <input type="radio" id="female" name="gender" value="female" checked={formData.gender === 'female'} onChange={handleChange} />
                        {errors.gender && <p className="error">{errors.gender}</p>}
                    </div>

                    <button type="submit">Register</button>
                </form>

                <span className="link-to">Already have an account? <Link to="/login">Login</Link> here</span>
            </div>
        </div>
    );
}

export default Register;
