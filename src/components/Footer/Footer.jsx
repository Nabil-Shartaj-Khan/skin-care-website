import './Footer.css';
import logo from '../../assets/images/logo.jpg';

const Footer = () => {
    return (
        <footer className="text-light pb-2">
            <div className="footer-container">
                <hr className='border border-3 border-secondary'></hr>
                <div className="row py-5">
                    <div className="col-md-4">
                        <div className="d-flex flex-column">
                            <img src={logo} alt="Company Logo" className="mb-2" style={{ maxWidth: '200px' }} />
                            <p className='footer-pg pt-3'>Shop AG09, 52 Sergeant St, Edmondson Park NSW 2174, Australia</p>
                            <p className='footer-pg'>Contact: +61298293232</p>
                        </div>
                    </div>

                    <div className="col-md-4 ">
                        <div className="d-flex flex-column">
                            <p className='fs-4'>Follow us on our socials!</p>
                            <div className="d-flex flex-wrap">
                                <a href="#" className="me-3 mb-2" style={{ textDecoration: 'none' }}>Facebook</a>
                                <a href="#" className="me-3 mb-2" style={{ textDecoration: 'none' }}>Instagram</a>
                                <a href="#" className="me-3 mb-2" style={{ textDecoration: 'none' }}>Twitter</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 ">
                        <div className="d-flex flex-column">
                            <p className='footer-pg'>Search across website</p>
                            <input type="text" placeholder="Search" className="mb-2 form-control" />
                        </div>
                    </div>
                </div>
                <hr className='border border-3 border-secondary' />
            </div>
        </footer>
    );
}

export default Footer;
