import React, { lazy, Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import './Intro.css';

// Lazy load the video component
const LazyVideo = lazy(() => import('./Lazyvideo'));

const Intro = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/appointment");
    };

    return (
        <div className="intro" id="intro">
            <Suspense fallback={<div>Loading video...</div>}>
                {/* Lazy loaded video component */}
                <LazyVideo handleClick={handleClick} />
            </Suspense>
            <div className="overlay">
                <h2 className="smaller-section-title">NU Skin Laser & Beauty Clinic</h2>
                <button className='book-button' onClick={handleClick}>Book an appointment</button>
                <p>Transforming Beauty, Inside and Out</p>
            </div>
        </div>
    );
}

export default Intro;
