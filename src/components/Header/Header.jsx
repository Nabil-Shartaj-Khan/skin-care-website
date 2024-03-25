import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './Header.css';
import logo from '../../assets/images/logo.jpg';

const Header = () => {
    const [username, setUsername] = useState('');

    useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        if (storedUsername) {
            setUsername(storedUsername);
        }
    }, []);

    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
                <Link className="navbar-brand me-5 pe-5" to="/">
                    <img src={logo} alt="Logo" className="logo" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ml-auto">

                        <li className="nav-item">
                            <Link className="nav-link" to='/'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#SkinPackages">Packages</a>
                        </li>


                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="SkinTreatmentsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Skin Treatments
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="SkinTreatmentsDropdown">
                                <li><a className="dropdown-item" href="#">Treatment A</a></li>
                                <li><a className="dropdown-item" href="#">Treatment B</a></li>

                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="LaserHairRemovalDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Laser Hair Removal
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="LaserHairRemovalDropdown">
                                <li><a className="dropdown-item" href="#">Option A</a></li>
                                <li><a className="dropdown-item" href="#">Option B</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={username ? "/profile" : "/login"}>
                                {username ? (
                                    <span>{username}</span>
                                ) : (
                                    <span>Login/Register</span>
                                )}
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
