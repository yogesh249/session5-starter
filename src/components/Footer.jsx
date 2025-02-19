import React from 'react';
import '../assets/css/footer.css';

function Footer () {
    return (
        <footer id="footer" className="footer dark-background">
            <div className="container footer-top">
                <div className="row gy-4">
                    <div className="col-lg-4 col-md-6 footer-about">
                        <a href="index.html" className="logo d-flex align-items-center">
                            <span className="sitename">Devi</span>
                        </a>
                        <div className="footer-contact pt-3">
                            <p>A108 Adam Street</p>
                            <p>New York, NY 535022</p>
                            <p className="mt-3"><strong>Phone:</strong> <span>+1 5589 55488 55</span></p>
                            <p><strong>Email:</strong> <span>info@example.com</span></p>
                        </div>
                        <div className="social-links d-flex mt-4">
                            <a href=""><i className="bi bi-twitter-x"></i></a>
                            <a href=""><i className="bi bi-facebook"></i></a>
                            <a href=""><i className="bi bi-instagram"></i></a>
                            <a href=""><i className="bi bi-linkedin"></i></a>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-3 footer-links">
                        <h4>Useful Links</h4>
                        <ul>
                            <li><i className="bi bi-chevron-right"></i> <a href="#">Home</a></li>
                            <li><i className="bi bi-chevron-right"></i> <a href="#">About us</a></li>
                            <li><i className="bi bi-chevron-right"></i> <a href="#">Services</a></li>
                            <li><i className="bi bi-chevron-right"></i> <a href="#">Terms of service</a></li>
                            <li><i className="bi bi-chevron-right"></i> <a href="#">Privacy policy</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-2 col-md-3 footer-links">
                        <h4>Our Services</h4>
                        <ul>
                            <li><i className="bi bi-chevron-right"></i> <a href="#">Web Design</a></li>
                            <li><i className="bi bi-chevron-right"></i> <a href="#">Web Development</a></li>
                            <li><i className="bi bi-chevron-right"></i> <a href="#">Product Management</a></li>
                            <li><i className="bi bi-chevron-right"></i> <a href="#">Marketing</a></li>
                            <li><i className="bi bi-chevron-right"></i> <a href="#">Graphic Design</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-4 col-md-12 footer-newsletter">
                        <h4>Our Newsletter</h4>
                        <p>Subscribe to our newsletter and receive the latest news about our products and services!</p>
                    </div>
                </div>
            </div>

            <div className="container copyright text-center mt-4">
                <p>© <span>Copyright</span> <strong className="px-1 sitename">Multipurpose</strong> <span>All Rights Reserved</span></p>
                <div className="credits">
                    Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a> Distributed by <a href="https://themewagon.com">ThemeWagon</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;