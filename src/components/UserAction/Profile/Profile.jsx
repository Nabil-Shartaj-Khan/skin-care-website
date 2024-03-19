import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Profile.css';

const Profile = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('username');
        navigate('/login');
    };
    return (
        <div className="profile-container">
            <h1>Your Profile</h1>
            <div className="profile-info">
                <div className="profile-picture">

                </div>
                <div className="user-details">
                    <p><h4 style={{ color: '#836a4a', fontFamily: 'Merriweather, sans-serif', fontSize: '20px' }}>Username:</h4> </p>
                    <p><h4 style={{ color: '#836a4a', fontFamily: 'Merriweather, sans-serif', fontSize: '20px' }}>Email:</h4> </p>
                    <p><h4 style={{ color: '#836a4a', fontFamily: 'Merriweather, sans-serif', fontSize: '20px' }}>Location:</h4> </p>
                    <p><h4 style={{ color: '#836a4a', fontFamily: 'Merriweather, sans-serif', fontSize: '20px' }}>Gender:</h4> </p>
                    <p><h4 style={{ color: '#836a4a', fontFamily: 'Merriweather, sans-serif', fontSize: '20px' }}>Booked Appointments:</h4> </p>
                </div>
            </div>
            <div className="profile-actions">
                <button className="book-button" onClick={handleLogout}>Logout</button>
            </div>
        </div>
    );
}

export default Profile;
