import { useNavigate } from 'react-router-dom';
import "./Contact.css";

const Contact = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/appointment");
    };

    return (
        <div className="contact-main">
            <div className="contact-container">
                <div className="contact-image"></div>
                <div className="overlay">
                    <h1>Radiant Skin Awaits at Our Clinic</h1>
                    <button className="book-button" onClick={handleClick}>Book an Appointment</button>
                    <p>Book your appointment now!</p>
                </div>
            </div>
        </div>
    );
}

export default Contact;
