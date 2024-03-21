import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';
import './Login.css';

const Login = () => {
    const location = useLocation();
    const registrationSuccess = location.state?.registrationSuccess;
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://api.nuskinlaserandbeautyclinic.com.au/api/login', formData);
            console.log('Login successful:', response.data);

            localStorage.setItem('token', response.data.token);
            localStorage.setItem('username', formData.username);
            localStorage.setItem('userId', response.data.userId);

            console.log('Token:', response.data.token);
            console.log('Username:', formData.username);
            console.log('UserID:', response.data.userId);


            navigate('/', { replace: true });
            window.location.reload();
        } catch (error) {
            console.error('Login failed:', error);
            setErrorMessage('Invalid username or password. Please try again!');
            setFormData({ username: '', password: '' });
        }
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <h2>Login</h2>
                {registrationSuccess && <p className="registration-success">Registration successful! You can now login.</p>}
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
                    </div>
                    <button type="submit">Login</button>

                    <span className='link-to'>Don't have an account? <Link to={"/register"}>Register</Link> here</span>
                </form>
            </div>
        </div>
    );
}

export default Login;
