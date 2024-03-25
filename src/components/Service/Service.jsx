import React from 'react';
import './Service.css';
import skin from "../../assets/images/skin.jpeg";
import light from "../../assets/images/light.jpeg";
import woman from "../../assets/images/woman.jpg";
import man from "../../assets/images/man.jpg";
import womenPkg from "../../assets/images/package.jpg";
import men from "../../assets/images/menpkg.jpg";
import { Link } from 'react-router-dom';

const Service = () => {
    const services = [
        { service_id: 1, image: skin, title: 'Skin treatment', description: 'Glow with Confidence: Discover Your Radiance!' },
        { service_id: 2, image: light, title: 'Skin lighting', description: 'Illuminate Your Beauty: Shine Brighter than Ever Before!' },
        { service_id: 3, image: woman, title: 'Full body laser', description: 'Empowering Elegance: Where Beauty Meets Empowerment!' },
        { service_id: 4, image: man, title: 'Tattoo removal', description: 'Refined Masculinity: Unleash Your Inner Gentleman!' },
        { service_id: 5, image: womenPkg, title: 'Women packages', description: 'Indulge in Bliss: Tailored Packages for Every Woman!' },
        { service_id: 6, image: men, title: 'Men packages', description: 'Elevate Your Grooming: Exclusive Packages for the Modern Man!' }
    ];

    return (
        <div className='all-grid'>
            <h1 className='grid-header'>Explore Our Offerings! </h1>
            <div className="grid-container">
                {services.map((service) => (
                    <Link to={`/show_service/${service.service_id}`} key={service.service_id} className="grid-item">
                        <img src={service.image} alt={service.title} className="about-image" loading="lazy" />
                        <div className="grid-overlay">
                            <h2>{service.title}</h2>
                            <p>{service.description}</p>
                        </div>
                        <div className="initial-text">
                            <p className='initial-text-p'>{service.title}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Service;
