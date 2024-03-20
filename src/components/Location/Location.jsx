import React from 'react';
import phoneIcon from '../../assets/images/phone-icon.jpg';
import addressIcon from '../../assets/images/address-icon.jpg';
import './Location.css';

const Location = () => {
    return (
        <div className='contact'>
            <h3 className='text-center pb-4'>Contact us </h3>
            <div className="location-container">
                <div className="contact-info">
                    <img className="icon" src={phoneIcon} alt="phone" />
                    <div className="contact-details">
                        <div><span style={{ color: "#867357" }}><b>Phone:</b></span></div>
                        <div><span style={{ color: "#8a601c" }} >+61298293232</span></div>
                    </div>
                </div>
                <div className="contact-info">
                    <img className="icon" src={addressIcon} alt="address" />
                    <div className="contact-details">
                        <div><span style={{ color: "#867357" }}><b>Address:</b></span></div>
                        <div><span style={{ color: "#8a601c" }}>Shop AG09, 52 Sergeant St, Edmondson Park NSW 2174, Australia</span></div>
                    </div>
                </div>
                <div className="business-hours">
                    <span><b>Business Hours:</b></span>
                    <div className="business-hours-wrapper">
                        <div className="fs-5"><b>Friday:</b> 06:00 AM - 09:00 PM</div>
                        <div className="fs-5"><b>Saturday:</b> 06:00 AM - 09:00 PM</div>
                        <div className="fs-5"><b>Sunday:</b> 09:30 AM - 04:00 PM</div>
                        <div className="fs-5"><b>Monday:</b> 09:30 AM - 06:00 PM</div>
                        <div className="fs-5"><b>Tuesday:</b> 09:30 AM - 06:00 PM</div>
                        <div className="fs-5"><b>Wednesday:</b> 09:30 AM - 06:00 PM</div>
                        <div className="fs-5"><b>Thursday:</b> 09:30 AM - 08:00 PM</div>
                    </div>
                </div>
            </div>
            <div className='google-map-container pt-4'>
                <div className='google-map pe-5'>

                </div>
            </div>
        </div>
    );
}

export default Location;
