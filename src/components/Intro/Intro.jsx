import './Intro.css';
import video from "../../assets/images/video-main.mp4";
import { useNavigate } from 'react-router-dom';

const Intro = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/appointment");
    };

    return (
        <div className="intro" id="intro">
            <video className="background-video" loop autoPlay muted>
                <source src={video} type="video/mp4" />
            </video>
            <div className="overlay">
                <h2>NU Skin Laser & Beauty Clinic</h2>
                <button className='book-button' onClick={handleClick}>Book an appointment</button>
                <p>Transforming Beauty, Inside and Out</p>
            </div>
        </div>
    );
}

export default Intro;
