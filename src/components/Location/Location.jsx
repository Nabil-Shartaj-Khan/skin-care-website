import React from 'react';

import phoneIcon from '../../assets/images/phone-icon.jpg';
import addressIcon from '../../assets/images/address-icon.jpg';
import './Location.css';

const Location = () => {
    return (
        <div className='contact'>
            <h3 >Contact us :  Enhance Your Skin's Brilliance!</h3>
            <div className="location-container">
                <div className='flex-it'>
                    <div className="contact-info">
                        <img className="icon" src={phoneIcon} alt="phone" />
                        <div className="contact-details">
                            <div><span style={{ color: "#867357" }}>Phone:</span></div>
                            <div><span style={{ color: "#8a601c" }} >+61298293232</span></div>
                        </div>
                    </div>
                    <div className="contact-info">
                        <img className="icon" src={addressIcon} alt="address" />
                        <div className="contact-details">
                            <div><span style={{ color: "#867357" }}>Address:</span></div>
                            <div><span style={{ color: "#8a601c" }}>Shop AG09, 52 Sergeant St, Edmondson Park NSW 2174, Australia</span></div>
                        </div>
                    </div>
                </div>
                <div className="business-hours">
                    <span>Business Hours:</span>
                    <div className="business-hours-wrapper">
                        <div className='fs-5'><b className='pe-1'>Friday : </b> 9:30 AM – 6:30PM</div>
                        <div className='fs-5'><b className='pe-1'>Saturday : </b> 9:30 AM – 5:00PM</div>
                        <div className='fs-5'><b className='pe-1'>Sunday :</b> 9:30 AM – 4:00PM</div>
                        <div className='fs-5'><b className='pe-1'>Monday :</b> 9:30 AM – 6:00PM</div>
                        <div className='fs-5'><b className='pe-1'>Tuesday :</b> 9:30 AM – 6:00PM</div>
                        <div className='fs-5'><b className='pe-1'>Wednesday :</b> 9:30 AM – 6:00PM</div>
                        <div className='fs-5'><b className='pe-1'>Thursday :</b> 9:30 AM – 8:00PM</div>
                    </div>
                </div>
            </div>
            <div className='google-map-container pt-4'>
                <div className='google-map'>
                    <iframe
                        title="Google Maps"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d695.6075784856107!2d150.85735013430104!3d-33.96977139617858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ed97cfcfdb6f%3A0x56529caf12dcdeb0!2sNU%20Skin%20Laser%20%26%20Beauty%20Clinic!5e0!3m2!1sen!2sbd!4v1710756327613!5m2!1sen!2sbd"
                        width="1000"
                        height="520"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}

export default Location;
