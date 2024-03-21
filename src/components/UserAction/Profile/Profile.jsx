import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Profile.css';
import profile from "../../../assets/images/profile.jpg";

const Profile = () => {
    const navigate = useNavigate();
    const [userDetails, setUserDetails] = useState(null);
    const [bookedAppointments, setBookedAppointments] = useState([]);

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const userId = localStorage.getItem('userId');
                if (userId) {
                    const response = await axios.get(`http://localhost:5000/api/user/details/${userId}`);
                    setUserDetails(response.data);
                } else {
                    console.error('User ID not found in localStorage');
                }
            } catch (error) {
                console.error('Error fetching user details:', error);
            }
        };

        fetchUserDetails();
    }, []);

    useEffect(() => {
        const fetchBookedAppointments = async () => {
            try {
                const userId = localStorage.getItem('userId');
                if (userId) {
                    const response = await axios.get(`http://localhost:5000/api/appointments/${userId}`);
                    setBookedAppointments(response.data);
                } else {
                    console.error('User ID not found in localStorage');
                }
            } catch (error) {
                console.error('Error fetching booked appointments:', error);
            }
        };

        fetchBookedAppointments();
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('username');
        localStorage.removeItem('userId');
        navigate('/login');
        window.location.reload();
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    };

    return (
        <div className="profile-container">
            <h1>Your Profile</h1>
            <div className="profile-info">
                <div className="profile-card" style={{ width: '500px' }}>
                    <img src={profile} className="profile-picture rounded-circle" alt="Profile" />
                    <div className="profile-card-body">
                        <h5 className="profile-card-title">{userDetails ? userDetails.username : ''}</h5>
                        <p className="profile-card-text"><b>Email:</b> {userDetails ? userDetails.email : ''}</p>
                        <p className="profile-card-text"><b>Location:</b> {userDetails ? userDetails.location : ''}</p>
                        <p className="profile-card-text pb-4"><b>Gender:</b> {userDetails ? userDetails.gender : ''}</p>

                        <h6 className="profile-card-title">Booked Appointments:</h6>
                        {bookedAppointments.length > 0 ? (
                            <ul className='profile-card-text'>
                                {bookedAppointments.map(appointment => (
                                    <li key={appointment.id}>
                                        <p><b>Date:</b> {formatDate(appointment.appointment_date)}</p>
                                        <p><b>Contact Number:</b> {appointment.mobile}</p>
                                        <p><b>Service Type:</b> {appointment.service_type}</p>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="no-appointment">No appointments found</p>
                        )}

                        <button className="logout-button mt-5" onClick={handleLogout}>Logout</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
