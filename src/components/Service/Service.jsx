import React from 'react';
import './Service.css';
import skin from "../../assets/images/skin.jpeg";
import light from "../../assets/images/light.jpeg";
import woman from "../../assets/images/woman.jpg";
import man from "../../assets/images/man.jpg";
import womenPkg from "../../assets/images/package.jpg";
import men from "../../assets/images/menpkg.jpg";

const Service = () => {
    const services = [
        { image: skin, title: 'Skin treatment', description: 'Glow with Confidence: Discover Your Radiance!' },
        { image: light, title: 'Skin lighting', description: 'Illuminate Your Beauty: Shine Brighter than Ever Before!' },
        { image: woman, title: 'Women section', description: 'Empowering Elegance: Where Beauty Meets Empowerment!' },
        { image: man, title: 'Men section', description: 'Refined Masculinity: Unleash Your Inner Gentleman!' },
        { image: womenPkg, title: 'Women packages', description: 'Indulge in Bliss: Tailored Packages for Every Woman!' },
        { image: men, title: 'Men packages', description: 'Elevate Your Grooming: Exclusive Packages for the Modern Man!' }
    ];

    return (
        <div className='all-grid'>
            <h1 className='grid-header'>Grooming Gauntlet :<span className='grid-span'> Explore Our Offerings! </span></h1>
            <div className="grid-container">
                {services.map((service, index) => (
                    <div className="grid-item" key={index}>
                        <img src={service.image} alt={service.title} className="about-image" />
                        <div className="grid-overlay">
                            <h2>{service.title}</h2>
                            <p>{service.description}</p>
                        </div>
                        <div className="initial-text">
                            <p className='initial-text-p'>{service.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Service;
