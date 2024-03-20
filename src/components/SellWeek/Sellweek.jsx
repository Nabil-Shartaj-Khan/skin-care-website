import React from 'react';
import './Sellweek.css';
import one from "../../assets/images/1.png";
import two from "../../assets/images/2.png";

const Sellweek = () => {
    return (
        <div className="sellweek-container">
            <div className="header">
                <h2>Revitalize Your Radiance!</h2>
            </div>
            <div className="image-wrapper">
                <img src={one} alt="Image 1" />
                <img src={two} alt="Image 2" />
            </div>
        </div>
    );
}

export default Sellweek;
