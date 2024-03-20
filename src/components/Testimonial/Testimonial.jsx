import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Testimonial.css';

const Testimonial = () => {
    // Mock testimonial data
    const testimonials = [
        { id: 1, name: 'Orheay Isaac', review: 'This is the best laser clinic I’ve ever been to. The care, the time and patience that the laser ladies show is amazing. I come and do full body laser and the results are incredible and speak for themselves, I’ve never felt softer and more beautiful in my life. Thank you!!! :)' },
        { id: 2, name: 'Kaneta B', review: 'Absolutely loved their service. I have been trying out their Micro and peel service and it really is making a difference to my skin which has been very problematic. Friendly staff and reasonable price. Will recommend this for those living closer to Edmondson Park and looking for a good skin care service' },
        { id: 3, name: 'Crazyapple66', review: 'Best experience ever .Everyone   is very friendly and their dealing with the clients is always  very professional.Nu skin laser is my preference and one of my recommendations .' },
    ];


    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className='testimonial-holder'>
            <h1 className="test-title">Voices of Delight</h1>
            <p className='para-test text-center'>Where Satisfaction Finds a Voice!</p>
            <div className="testimonial-container">
                <Slider {...settings}>
                    {testimonials.map(testimonial => (
                        <div key={testimonial.id} className="testimonial-card">
                            <span className='test-span'>&rdquo;</span>
                            <p>{testimonial.review}</p>
                            <hr />
                            <span className="test-name">{testimonial.name}</span>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default Testimonial;
