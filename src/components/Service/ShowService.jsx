import React from 'react';
import Slider from 'react-slick';
import './ShowService.css'; // Import your CSS file here
import skin from "../../assets/images/skin.jpeg";

const ShowService = () => {
    // Sample data for services
    const services = [
        {
            name: "Service 1",
            description: "Description 1",
            price: "$10",
            image: skin
        },
        {
            name: "Service 2",
            description: "Description 2",
            price: "$20",
            image: skin
        },
        {
            name: "Service 3",
            description: "Description 3",
            price: "$30",
            image: skin
        },
        // Add more services as needed
    ];

    // Settings for React Slick Carousel
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Display three images side by side
        slidesToScroll: 1
    };

    return (
        <div className='main-service'>
            <div className='service-header'>
                <div className='on-service-image'><img src={skin} alt="Service Image" /></div>
                <h1>Service section</h1>
            </div>
            <div className='service-about'>
                <h3>A random Service</h3>
            </div>
            <div className='about-service'>
                <p>
                    Embark on a journey of possibilities as you delve deeper into our suite of services. Uncover tailored solutions designed to meet your unique needs and aspirations. With each scroll, unlock a wealth of opportunities and possibilities, curated to exceed your expectations. Your satisfaction is our priority, and as you explore further, rest assured that every detail is crafted with care to ensure your experience is nothing short of exceptional. So go ahead, scroll below, and let the adventure begin.
                </p>
            </div>
            <div className='service-showcasing'>
                <Slider {...settings}>
                    {services.map((service, index) => (
                        <div key={index} className="card" style={{ width: "18rem" }}>
                            <img className="card-img-top" src={service.image} alt="Service Image" />
                            <div className="card-body">
                                <h5 className="card-title">{service.name}</h5>
                                <p className="card-text">{service.description}</p>
                                <p className="card-text">Price: {service.price}</p>

                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default ShowService;
