import './Intro.css'
import video from "../../assets/images/video-main.mp4"
const Intro = () => {
    return (
        <div className="intro">
            <video className="background-video" loop autoPlay muted>
                <source src={video} type="video/mp4" />
            </video>
            <div className="overlay">
                <h2>NU Skin Laser & Beauty Clinic</h2>
                <p>Transforming Beauty, Inside and Out</p>
                <button className='book-button'>Book an appointment</button>
            </div>
        </div>
    );
}

export default Intro;