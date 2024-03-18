import React from 'react';
import { Link } from "react-router-dom";
import './Register.css';

const Register = () => {
    return (
        <div className="register-container">
            <div className="register-form">
                <h2>Register</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" name="username" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="location">Location</label>
                        <select id="location" name="location">
                            <option value="sydney">Sydney</option>
                            <option value="melbourne">Melbourne</option>
                            <option value="brisbane">Brisbane</option>

                        </select>
                    </div>
                    <div className="mb-3" style={{ fontFamily: "Lato, sans-serif", fontSize: "18px" }}>
                        <label htmlFor="gender" className="me-3">
                            <b>Gender:</b>
                        </label>
                        <label htmlFor="male" style={{ fontFamily: "Lato, sans-serif", fontSize: "18px" }}>Male</label>
                        <input
                            type="radio"
                            id="male"
                            name="gender"
                            value="male"
                            className="m-1"

                        />
                        <label htmlFor="female" style={{ fontFamily: "Lato, sans-serif", fontSize: "18px" }}>Female</label>
                        <input
                            type="radio"
                            id="female"
                            name="gender"
                            value="female"
                            className="m-1"

                        />{" "}
                    </div>
                    <button type="submit">Register</button>
                    <span className="link-to">Already have an account? <Link to="/login">Login</Link> here</span>
                </form >
            </div >
        </div >
    );
}

export default Register;
