import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';
import './ShowService.css';
import axios from 'axios';
import skinImage from "../../assets/images/skin.jpeg";
import lightImage from "../../assets/images/light.jpeg";
import womanImage from "../../assets/images/woman.jpg";

const ShowService = () => {
    const { service_id } = useParams();
    const [service, setService] = useState(null);
    const [subcategories, setSubcategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchService = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/services/${service_id}`);
                setService(response.data);
                setLoading(false);
                setError(null);
            } catch (error) {
                console.error('Error fetching service:', error);
                setLoading(false);
                setError(error.message);
            }
        };

        const fetchSubcategories = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/subcategories/${service_id}`);
                setSubcategories(response.data);
            } catch (error) {
                console.error('Error fetching subcategories:', error);
            }
        };

        fetchService();
        fetchSubcategories();
    }, [service_id]);

    useEffect(() => {
        console.log("Service ID:", service_id);
        console.log("Service:", service);
        console.log("Subcategories:", subcategories);
        console.log("Loading:", loading);
        console.log("Error:", error);
    }, [service_id, service, subcategories, loading, error]);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div className='main-service'>
            <div className='service-header'>
                <div className='on-service-image'><img src={skinImage} alt="Service Image" /></div>
                <h1>{service ? service.service_name : 'Service section'}</h1>
            </div>

            <div className='about-service'>
                <p>
                    {service ? service.description : `Embark on a journey of possibilities as you delve deeper into our suite of services. Uncover tailored solutions designed to meet your unique needs and aspirations. With each scroll, unlock a wealth of opportunities and possibilities, curated to exceed your expectations. Your satisfaction is our priority, and as you explore further, rest assured that every detail is crafted with care to ensure your experience is nothing short of exceptional. So go ahead, scroll below, and let the adventure begin.`}
                </p>
            </div>

            <div className='service-showcasing'>
                <Slider {...settings}>
                    {subcategories.map((subcategory, index) => (
                        <div key={index} className="new-card">
                            <div className="new-card-body">
                                <h5 className="new-card-title">{subcategory.subcategory_name}</h5>
                                <img src={skinImage} alt={subcategory.subcategory_name} className="new-card-img-top" />
                                <p className="new-card-para">{subcategory.description}</p>
                                <p className="new-card-too">Price: {subcategory.price}$</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default ShowService;
