import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import dead from "../../assets/images/deadskin.mp4";
import lip from "../../assets/images/LIP.jpg";
import laser from "../../assets/images/lasertreatment.mp4";
import './Before.css';

const Before = () => {
    const content = [
        { id: 1, type: "video", url: dead },
        { id: 2, type: "image", url: lip },
        { id: 3, type: "video", url: laser },
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className='before-after-man'>
            <div className='before-carousel-container pt-5'>
                <h1>Witness the magic of our treatments</h1>
                <h4>Turning 'Before' into 'After' bliss!"</h4>
                <div className="before-carousel">
                    <Slider {...settings}>
                        {content.map(item => (
                            <div key={item.id} >
                                {item.type === "video" ? (
                                    <video id={`video-${item.id}`} className="specific-video" autoPlay muted loop>
                                        <source src={item.url} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                ) : (
                                    <img src={item.url} alt="Before" />
                                )}
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default Before;
