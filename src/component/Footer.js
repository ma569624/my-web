import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div class="newsletter ptb-100">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-5">
                            <div class="newsletter-text-area">
                                <h3>100% Quality Assured</h3>
                            </div>
                        </div>
                        <div class="col-lg-7">
                            <div class="newsletter-form-area pt-30">
                                {/* <form class="newsletter-form" data-toggle="validator">
                                                <div class="input-group">
                                                    <input type="email" class="input-newsletter form-control" placeholder="Enter Your Email Which We Will Contact You to Know your Problem" name="EMAIL" required autocomplete="off"> /</input>
                                                        <button class="default-button" type="submit"><span><i class="flaticon-paper-plane"></i></span></button>
                                                </div>
                                            </form> */}
                                <div id="validator-newsletter" class="form-result"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer ptb-100">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                            <div class="footer-logo-area">
                                <img src="/assets/images/New/lappy_logo.png" alt="logo" />
                                <p>Contact Lappy Center for the best quality services at the most reasonable prices! We handle laptop
                                    and MacBook repairs</p>
                                <div class="footer-social-area">
                                    <ul>
                                        <li><a href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
                                        <li><a href="https://twitter.com/" target="_blank"><i class="fab fa-twitter"></i></a></li>
                                        <li><a href="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram"></i></a></li>
                                        <li><a href="https://www.pinterest.com/" target="_blank"><i class="fab fa-pinterest-p"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                            <div class="footer-links footer-lp footer-services">
                                <h3>Services</h3>
                                <ul>
                                    <li><Link to={'/service'}>MacBook Repaire</Link></li>
                                    <li><Link to={'/service'}>Mac Mini Repaire</Link></li>
                                    <li><Link to={'/service'}>iMac Repaire</Link></li>
                                    <li><Link to={'/service'}>Other Laptop Repaire</Link></li>

                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                            <div class="footer-links footer-lp">
                                <h3>Quick Links</h3>
                                <ul>
                                    <li><Link to={'/'}>Home</Link></li>
                                    <li><Link to={'gallery'}>Our Gallery</Link></li>
                                    <li><Link to={'about'}>About Us</Link></li>
                                    <li><Link to={'contact'}>Contact Us</Link></li>
                                    <li><Link to={'process'}>Our Process</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                            <div class="footer-links footer-contact">
                                <h3>Get In Touch</h3>
                                <div class="footer-contact-card">
                                    <i class="flaticon-phone-call"></i>
                                    <h6>Phone</h6>
                                    <p><a href="tel:+91 6375549039">+91 6375549039</a></p>
                                </div>
                                <div class="footer-contact-card">
                                    <i class="flaticon-email"></i>
                                    <h6>Email</h6>
                                    <p><a href="Mailto: ms569624@gmail.com"><span class="__cf_email__" data-cfemail="5e373038311e2c3b2e3f703d3133">ms569624@gmail.com</span></a></p>
                                </div>
                                <div class="footer-contact-card">
                                    <i class="flaticon-location"></i>
                                    <h6>Loaction</h6>
                                    <p><a href="https://goo.gl/maps/GhyNv5syUCu3Dsfj8" target="_blank">A 98, Bindapur Extn, Jivan Park, Bindapur, Delhi, 110059</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="copyright">
                <div class="container">
                    <p>Copyright @ Lappy Center 2022 | All Rights Reserved 
                    </p>
                </div>
            </div>


            <div class="progress-wrap">
                <svg class="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                    <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
                </svg>
            </div>
        </>
    )
}

export default Footer