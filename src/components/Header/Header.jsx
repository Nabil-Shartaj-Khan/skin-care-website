import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import './Header.css';
import search from '../../assets/images/search.png';
import profile from '../../assets/images/profile.png';
import cart from '../../assets/images/cart.png';
import logo from '../../assets/images/logo.jpg';

const Header = () => {
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        if (storedUsername) {
            setUsername(storedUsername);
        }
    }, []);

    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className='d-flex flex-column'>
                <div className='pre-nav d-flex justify-content-around'>
                    <div className='text-div'>
                        <img src={search} alt="Search" style={{ width: '30px', height: '30px' }} />
                    </div>
                    <div className='text-div'>
                        <img src={logo} alt="Logo" className="logo" />
                    </div>
                    <div className='icon-container'>
                        <Link to={username ? "/profile" : "/login"}>
                            <img src={profile} alt="Profile" />
                            {username ? (
                                <span className='fs-5 about-image'>{username}</span>
                            ) : (
                                <span className='fs-5 about-image'>Login/Register</span>
                            )}
                        </Link>
                    </div>
                </div>
                <div className="container-fluid">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse justify-content-center"
                        id="navbarNavDropdown"
                    >
                        <ul className="navbar-nav d-flex flex-col ml-auto">
                            <li className="nav-item">
                                <Link
                                    className="nav-link active text-white"
                                    aria-current="page"
                                    to='/'
                                >Home</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#SkinPackages">Skin Packages</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-white" href="#" id="ShopProductsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Shop Products
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="ShopProductsDropdown">
                                    <li><a className="dropdown-item" href="#">Cleansers</a></li>
                                    <li><a className="dropdown-item" href="#">Serums</a></li>
                                    <li><a className="dropdown-item" href="#">Moisturisers</a></li>
                                    <li><a className="dropdown-item" href="#">Scrubs</a></li>
                                    <li><a className="dropdown-item" href="#">LED Face Mask</a></li>
                                    <li><a className="dropdown-item" href="#">Intimate Products</a></li>
                                    <li><a className="dropdown-item" href="#">Make Up Removers</a></li>
                                    <li><a className="dropdown-item" href="#">Xfoli8 Mitt</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-white" href="#" id="ShopFaceKitsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Shop Face Kits
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="ShopFaceKitsDropdown">
                                    <li><a className="dropdown-item" href="#">Item A</a></li>
                                    <li><a className="dropdown-item" href="#">Item B</a></li>
                                    <li><a className="dropdown-item" href="#">Item C</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-white" href="#" id="SkinTreatmentsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Skin Treatments
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="SkinTreatmentsDropdown">
                                    <li><a className="dropdown-item" href="#">Treatment A</a></li>
                                    <li><a className="dropdown-item" href="#">Treatment B</a></li>
                                    {/* Add more treatments as needed */}
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-white" href="#" id="LaserHairRemovalDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Laser Hair Removal
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="LaserHairRemovalDropdown">
                                    <li><a className="dropdown-item" href="#">Option A</a></li>
                                    <li><a className="dropdown-item" href="#">Option B</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#Contact">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;
