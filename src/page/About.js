import React from 'react'

const About = () => {
  return (
    <>
        <div class="uni-banner">
        <div class="container-fluid container-large">
            <div class="uni-banner-text-area">
                <h1>About Us</h1>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li>About Us</li>
                </ul>
            </div>
        </div>
    </div>


    <div class="about ptb-100">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="about-text-area pr-20">
                        <div class="default-section-title">
                            <span>About Us</span>
                            <h3>Your Local Laptop & MacBook Repair Experts</h3>
                            <p>Chahar Technologies established in the year of 2010 with a vision to provide Internet solutions with a comprehensive range of web services like Web Designing, Domain Name Registration, Web Hosting. FTP Server Space, E-Mail Solutions, and SSL Integration Service.Chahar Technologies gained recognition with high-quality projects on the local Indian market as well as outside India. Chahar Technologies is also providing. We have expertise in Web Designing, Development & SEO, public networking marketing, e-commerce, company logo, graphics, pay per just click.</p>

                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="about-img-area">
                        <img src="assets/images/about/about1.jpg" alt="image" />
                        <div class="about-img-text">
                            <i class="flaticon-badge"></i>
                            <h4>8 Years</h4>
                            <p>of Experiences</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


   
    <div class="services ptb-100 bg-f9f9f9">
        <div class="container">
            <div class="default-section-title default-section-title-middle">
                <span>Our Services</span>
                <h3>Laptop Repair Services Available in Delhi</h3>
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
                                <h4><a href="other.html">Windows laptop repair</a></h4>
                                <p>Visit charges of ₹159 will be adjusted with repair costs. Spare part costs extra; applicable as per rate card.</p>
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
                                <h4><a href="macbook.html">MacBook repair</a></h4>
                                <p>Visit charges of ₹159 will be adjusted with repair costs. Spare part costs extra applicable as per rate card.</p>
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
                                <h4><a href="imac.html">Deep clean service</a></h4>
                                <p>Software clean up to enhance laptop's performance. Deep cleaning of external and internal parts.</p>
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
    </>
  )
}

export default About