import React from 'react';
import video from "../../assets/images/video-main.mp4";

const LazyVideo = ({ handleClick }) => {
    return (
        <video className="background-video" loop autoPlay muted>
            <source src={video} type="video/mp4" />
        </video>
    );
}

export default LazyVideo;
