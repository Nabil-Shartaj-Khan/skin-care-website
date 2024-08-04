import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import imageOne from '../../assets/images/one.jpeg';
import imageTwo from '../../assets/images/two.jpeg';
import imageThree from '../../assets/images/three.jpeg';
import "./About.css"

const About = () => {
    const slides = [
        { image: imageOne, caption: "Acne Treatment", firstText: "Experience the Confidence of Clear Skin with Our Acne Treatments.", secondText: "" },
        { image: imageTwo, caption: "Treatment of the Month", firstText: "Buy 2 sessions of Full body ", secondText: " laser hair removal and receive two sessions free!" },
        { image: imageThree, caption: "Treatment of the Month", firstText: "Get Micro Dermabrasion for only 65$", secondText: "and receive free LED light therapy." },
    ];

    return (
        <div>
            <div className='carousel-heading text-center'>
                <h1>Discover Beauty, Discover Us!</h1>
                <h4>Where Great Services Meet Great Ambiance!</h4>
            </div>
            <div className="carousel-container">
                <Carousel
                    autoPlay
                    infiniteLoop
                    showThumbs={false}
                    showStatus={false}
                    stopOnHover={false}
                    interval={4000}
                    transitionTime={1000}
                    showIndicators={false}
                    showArrows={false}
                >
                    {slides.map((slide, index) => (
                        <div key={index}>
                            <img src={slide.image} alt={`Slide ${index + 1}`} />
                            <div className="carousel-text">
                                <span>{slide.caption}</span>
                                <p className="carousel-service-description">{slide.firstText}</p>
                                <p className="carousel-second-description">{slide.secondText}</p>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    );
};

export default About;
