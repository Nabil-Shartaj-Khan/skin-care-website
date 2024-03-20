import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import imageOne from '../../assets/images/one.jpeg';
import imageTwo from '../../assets/images/two.jpeg';
import imageThree from '../../assets/images/three.jpeg';
import "./About.css"

const About = () => {
    const slides = [
        { image: imageOne, caption: "Impeccable Services", text: "Top-notch beauty services tailored to your needs. From hair styling to skincare treatments, we offer it all." },
        { image: imageTwo, caption: "Laser Brilliance", text: "Illuminate Your Beauty with Precision" },
        { image: imageThree, caption: "Acne treatment", text: "Conquer Acne with Our Expert Treatment." },
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
                    interval={3000}
                    transitionTime={1000}
                    showIndicators={false}
                    showArrows={false}
                >
                    {slides.map((slide, index) => (
                        <div key={index}>
                            <img src={slide.image} alt={`Slide ${index + 1}`} />
                            <div className="carousel-text">
                                <span>{slide.caption}</span>
                                <p className="description">{slide.text}</p>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    );
};

export default About;
