import React from 'react';
import './Login.css';
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="login-container">
            <div className="login-form">
                <h2>Login</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" name="username" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" />
                    </div>
                    <button type="submit">Login</button>
                    <span className='link-to'>Don't have account? <Link to={"/register"}>Register</Link> here </span>
                </form>
            </div>
        </div>
    );
}

export default Login;
