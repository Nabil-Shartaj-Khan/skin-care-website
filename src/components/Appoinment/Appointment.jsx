import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Appointment.css';
import { useNavigate, Link } from 'react-router-dom';

const Appointment = () => {
    const [mobile, setMobile] = useState('');
    const [date, setDate] = useState('');
    const [serviceType, setServiceType] = useState('');
    const [error, setError] = useState(null);
    const [bookingSuccess, setBookingSuccess] = useState(false);
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        if (storedUsername) {
            setUsername(storedUsername);
        }
    }, []);

    const today = new Date();
    const minDate = today.toISOString().split('T')[0];
    const maxDate = new Date(today.getTime() + 14 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const userId = localStorage.getItem('userId');
            console.log('Data to be sent:', { mobile, date, serviceType, userId });
            const response = await axios.post('http://api.nuskinlaserandbeautyclinic.com.au/api/services/2', {
                mobile,
                date,
                serviceType,
                userId
            });

            console.log('Appointment booked successfully:', response.data);
            setBookingSuccess(true);
        } catch (error) {
            console.error('Error booking appointment:', error);
            setError('Failed to book appointment. Please try again later.');
        }
    };


    const navigateProfile = () => {
        navigate("/profile");
    };
    return (
        username ? (
            bookingSuccess ? (
                <div className='big-container'>
                    <h1 className='hello-header'>Thank you for booking!</h1>
                    <p className='text-center new-para-book'>Please check your profile for further details.</p>
                    <button className='center-button' onClick={navigateProfile}>Profile details</button>
                </div>
            ) : (
                <div className='big-container'>
                    <h1 className='hello-header'>Book your Appointment now!</h1>
                    <div className="appointment-container">
                        <form className="appointment-form shadow-lg" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="mobile">Mobile:</label>
                                <input
                                    type="tel"
                                    id="mobile"
                                    value={mobile}
                                    onChange={(e) => setMobile(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="date">Date:</label>
                                <input
                                    type="date"
                                    id="date"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                    min={minDate}
                                    max={maxDate}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="serviceType">Service Type:</label>
                                <select
                                    id="serviceType"
                                    value={serviceType}
                                    onChange={(e) => setServiceType(e.target.value)}
                                    required
                                >
                                    <option value="">Select a service type</option>
                                    <option value="Service A">Skin treatment</option>
                                    <option value="Service B">Skin lighting</option>
                                    <option value="Service C">Women section</option>
                                    <option value="Service D">Men section</option>
                                    <option value="Service E">Women packages</option>
                                    <option value="Service F">Men packages</option>
                                </select>
                            </div>
                            <button type="submit">Book Appointment</button>
                        </form>
                        {error && <p className="error-message">{error}</p>}
                    </div>
                </div>
            )
        ) : (
            <div className="appointment-container">
                <h1 className="appointment-text">Your journey begins here!</h1>

                <Link to={"/login"} className='book-button'>Login/Register</Link>
                <p className='appointment-koro'>Unlock a world of exclusive benefits! Log in or sign up now.</p>

            </div>
        )
    );
};

export default Appointment;