import React from 'react'

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Testimonials from '../component/Testimonials';
import Counter from '../component/Counter';
import GetInTouch from '../component/GetInTouch';

const Home = () => {
    const options = {
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        animateOut: 'bounceOut',
        // animateIn: 'bounceIn',
        nav: false,
        dots: false,
        margin: 100,
        responsive: {
            1100: {
                items: 1,
            },
            741: {
                items: 1,
            },
            500: {
                items: 1,
            }
        }
    }

    return (
        <>
            {/* <div id="pre-loader">
                <img class="preloader-img" src="assets/images/preloader1.gif" alt="gif" />
            </div> */}

            <section>
                <div class="home-banner">
                    <div class="shape">
                        <img class="shape1" src="assets/images/banner/banner-2-shape1.png" alt="image" />
                        <img class="shape2" src="assets/images/banner/banner-2-shape2.png" alt="image" />
                    </div>


                    <OwlCarousel className='home-banner-slider-area owl-theme' {...options}>
                        <div class='item'>
                            <div class="home-banner-single-slide">
                                <div class="container-fluid container-large">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="banner-text-area banner-text-area-1">
                                                <h6>Mac & Windows Repairing Services</h6>
                                                <h1>welcome to Lappy Center Service.</h1>
                                                <p>Choose from a wide range of Laptop repair services from motherboard repair, battery replacement and much more in Delhi! .</p>
                                                <a class="default-button" href="contact.html"><span>Contact Us<i class="flaticon-right-arrow"></i></span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class='item'>
                            <div class="home-banner-single-slide">
                                <div class="container-fluid container-large">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="banner-text-area banner-text-area-1">
                                                <h6>Mac & Windows Repairing Services</h6>
                                                <h1>welcome to Lappy Center Service.</h1>
                                                <p>Choose from a wide range of Laptop repair services from motherboard repair, battery replacement and much more in Delhi! .</p>
                                                <a class="default-button" href="contact.html"><span>Contact Us<i class="flaticon-right-arrow"></i></span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class='item'>
                            <div class="home-banner-single-slide hbs-2">
                                <div class="container-fluid container-large">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="banner-text-area banner-text-area-1">
                                                <h6>Mac & Windows Repairing Services</h6>
                                                <h1>Best Services All Over The City</h1>
                                                <p>Just get in touch with us and describe the issue  you are facing with your laptop device.</p>
                                                <a class="default-button" ><span>Contact Us <i class="flaticon-right-arrow"></i></span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class='item'>
                            <div class="home-banner-single-slide hbs-3">
                                <div class="container-fluid container-large">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="banner-text-area banner-text-area-1">
                                                <h6>Mac & Windows Repairing Services</h6>
                                                <h1>Repair Your Laptop From Experts.</h1>
                                                <p>Get an expert Lappy Center technician at your home to fix your Laptop issue.</p>
                                                <a class="default-button" href="contact.html"><span>Contact Us <i class="flaticon-right-arrow"></i></span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel>

                </div>

            </section>


            <section>
                <div class="features pt-70 pb-100">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div class="features-card">
                                    <img src="assets/images/icons/secure-shield.png" alt="image" />
                                    <h4>Free Pickup & Drop</h4>
                                    <p>No more unnecessary service center visits!.</p>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div class="features-card">
                                    <img src="assets/images/icons/certificate.png" alt="image" />
                                    <h4>ISO Certified Company</h4>
                                    <p>Lappy Center is an ISO certified organization.</p>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div class="features-card">
                                    <img src="assets/images/icons/user.png" alt="image" />
                                    <h4>Experienced Engineers</h4>
                                    <p>No need to find a technician. Get experts at home!</p>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                <div class="features-card">
                                    <img src="assets/images/icons/setting.png" alt="image" />
                                    <h4>High Quality Spare Parts</h4>
                                    <p>Only high quality spares are used. Quality assured!</p>
                                </div>
                            </div>
                        </div>
                        <a class="section-bottom-link mt-30" href="contact.html">Contact for Repair <i class="flaticon-right-arrow"></i></a>
                    </div>
                </div>
            </section>

            <section>
                <div class="about pb-100">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-lg-6">
                                <div class="about-img-area-3">
                                    <img src="assets/images/New/hm-ab.jpg" alt="image" />
                                    <div class="about-img-text-3">
                                        <h3>8 Years</h3>
                                        <p>Of Experiences</p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <div class="about-text-area-3 pl-20">
                                    <div class="default-section-title">
                                        <span>About Us</span>
                                        <h3>Website Designing Company In Delhi</h3>
                                        <p>Chahar Technologies is a Delhi-based Website Designing & Development Company, That works in Static Website Designing, Dynamic Website Designing, Core Php Development, WordPress Website Designing, Codeigniter Website Development, and E-commerce website development in Delhi. </p>
                                        <p>Alternatives on here we are at global customers. Professionalism, reliability, ability, and knowledge are the main resources of our groups for providing outcomes in the quickest possible time. Chahar Technologies was established in the year of 2010 with a vision to provide Internet solutions with a comprehensive range of web services like Web Designing, Domain Name Registration, Cheap Domain, and Hosting Company in Delhi. we also offer: </p>
                                    </div>
                                    <div class="about-list">
                                        <ul>
                                            <li>Screen & Battery Replacement</li>
                                            <li>SSD & RAM Upgrade</li>
                                            <li>Keyboard & Touchpad Replacement</li>
                                            <li>Liquid Damage Repair and much more</li>
                                        </ul>
                                    </div>
                                    <a class="default-button mt-30" href="about.html"><span>About Our Company <i class="flaticon-right-arrow"></i></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section>
                <div class="services ptb-100 bg-f9f9f9">
                    <div class="container">
                        <div class="default-section-title default-section-title-middle">
                            <span>Our Services</span>
                            <h3>Web Development Services Available in Delhi</h3>
                            <p>Contact Lappy Center for the best quality services at the most reasonable prices! We handle laptop and MacBook repairs</p>
                        </div>
                        <div class="section-content">
                            <div class="row justify-content-center">
                                <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div class="service-card">
                                        <div class="service-card-img">
                                            <a href="other.html"><img src="assets/images/New/hm-ser1.jpg" alt="image" /></a>
                                        </div>
                                        <div class="service-card-text-area">
                                            <i class="flaticon-repairing-service main-icon"></i>
                                            <h4><a href="other.html">Ecommerce Website Designing</a></h4>
                                            <p>E-Commerce is a popular way to sale your Products and service online over internet locally or globally. If you have website and did not take the advantages of this greate opportunity then you are not able to sale your.</p>
                                            <a class="read-more-btn" href="other.html">Read More <i class="flaticon-right-arrow"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div class="service-card">
                                        <div class="service-card-img">
                                            <a href="macbook.html"><img src="assets/images/New/hm-ser.jpg" alt="image" /></a>
                                        </div>
                                        <div class="service-card-text-area">
                                            <i class="flaticon-mechanics main-icon"></i>
                                            <h4><a href="macbook.html">Responsive Website Designing</a></h4>
                                            <p>Responsive Website Design is the approach which define that design or development should be depend on the user behavior and environment based on the multimedia devices utility like- their media screen size, platform and orientation.</p>
                                            <a class="read-more-btn" href="macbook.html">Read More <i class="flaticon-right-arrow"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div class="service-card">
                                        <div class="service-card-img">
                                            <a href="imac.html"><img src="assets/images/New/hm-ser3.jpg" alt="image" /></a>
                                        </div>
                                        <div class="service-card-text-area">
                                            <i class="flaticon-big-gear main-icon"></i>
                                            <h4><a href="imac.html">Web Designing Service</a></h4>
                                            <p>A Website is the source of gathering whole information about the business or brand to wrap them one things for the world wide web where the user or viewer can exchange and gain information. Now a day’s A Website is most important for each and every business or services because today’s market trends is digital and</p>
                                            <a class="read-more-btn" href="imac.html">Read More <i class="flaticon-right-arrow"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div class="service-card">
                                        <div class="service-card-img">
                                            <a href="other.html"><img src="assets/images/New/hm-ser1.jpg" alt="image" /></a>
                                        </div>
                                        <div class="service-card-text-area">
                                            <i class="flaticon-repairing-service main-icon"></i>
                                            <h4><a href="other.html">Website Re -Design Company</a></h4>
                                            <p>Chahartechnologies is a best re-designing company in delhi.Browser our portable Re-website Designing Company in Delhi India, which offer you best packages of web designing and development services for any size of business. We are reliable approach for maintaining your website updating and new</p>
                                            <a class="read-more-btn" href="other.html">Read More <i class="flaticon-right-arrow"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div class="service-card">
                                        <div class="service-card-img">
                                            <a href="macbook.html"><img src="assets/images/New/hm-ser.jpg" alt="image" /></a>
                                        </div>
                                        <div class="service-card-text-area">
                                            <i class="flaticon-mechanics main-icon"></i>
                                            <h4><a href="macbook.html">Dynamic Website Designing</a></h4>
                                            <p>Dynamic website designing required progressed and more muddled coding than static sites planning. The format of the pages and the substance of the website pages are made independently All the substance is put away in a database,Words, numbers, and pictures are put away as exceptional components.</p>
                                            <a class="read-more-btn" href="macbook.html">Read More <i class="flaticon-right-arrow"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div class="service-card">
                                        <div class="service-card-img">
                                            <a href="imac.html"><img src="assets/images/New/hm-ser3.jpg" alt="image" /></a>
                                        </div>
                                        <div class="service-card-text-area">
                                            <i class="flaticon-big-gear main-icon"></i>
                                            <h4><a href="imac.html">Website Maintenace Service</a></h4>
                                            <p>Chahar Technologies is an effective website design & development company in New Delhi India. We maintain Core Php, Codeigniter, WordPress, Magento, etc. websites.</p>
                                            <a class="read-more-btn" href="imac.html">Read More <i class="flaticon-right-arrow"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="section-footer-button">
                                <a class="default-button default-button-2 mt-30" href="mini mac.html"><span>Browse Services <i class="flaticon-right-arrow"></i></span></a>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <Counter />

            <section>
                <div class="working-process ptb-100">
                    <div class="container">
                        <div class="default-section-title default-section-title-middle">
                            <span>Our Doorstep Service Process</span>
                            <h3>How We Work</h3>
                            <p>For battery, keyboard, trackpad, RAM, SSD upgrade</p>
                        </div>
                        <div class="section-content">
                            <div class="row justify-content-center">
                                <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div class="working-process-card-3">
                                        <span>01</span>
                                        <h6>01</h6>
                                        <h4>Contact Lappy Center</h4>
                                        <p>Just get in touch with us and describe the issue you are facing with your laptop device.</p>

                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div class="working-process-card-3">
                                        <span>02</span>
                                        <h6>02</h6>
                                        <h4>Schedule a Technician Visit</h4>
                                        <p>Book a free Lappy Center technician  visit at your doorstep as per your convenience.</p>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                                    <div class="working-process-card-3">
                                        <span>03</span>
                                        <h6>03</h6>
                                        <h4>Free Doorstep Installation</h4>
                                        <p>Get an expert Lappy Center technician at your home to fix your MacBook issue & Laptop issue.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <GetInTouch />

            <Testimonials />
        </>
    )
}


export default Home