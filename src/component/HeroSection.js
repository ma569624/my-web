import React from 'react'
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';

const HeroSection = () => {
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
        <section>
                <div class="home-banner">
                    <div class="shape">
                        <img class="shape1" src="assets/images/banner/banner-2-shape1.png" alt="image" />
                        <img class="shape2" src="assets/images/banner/banner-2-shape2.png" alt="image" />
                    </div>


                    <OwlCarousel className='home-banner-slider-area owl-theme' {...options}>
                        <div class='item'>
                            <div class="home-banner-single-slide">
                                <div class="container container-large">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="banner-text-area banner-text-area-1">
                                                <h6>Mac & Windows Repairing Services</h6>
                                                <h1>welcome to Lappy Center Service.</h1>
                                                <p>Choose from a wide range of Laptop repair services from motherboard repair, battery replacement and much more in Delhi! .</p>
                                                <Link class="default-button" href="contact.html"><span>Contact Us<i class="flaticon-right-arrow"></i></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class='item'>
                            <div class="home-banner-single-slide hbs-2">
                                <div class="container container-large">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="banner-text-area banner-text-area-1">
                                                <h6>Mac & Windows Repairing Services</h6>
                                                <h1>Best Services All Over The City</h1>
                                                <p>Just get in touch with us and describe the issue  you are facing with your laptop device.</p>
                                                <Link class="default-button" ><span>Contact Us <i class="flaticon-right-arrow"></i></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class='item'>
                            <div class="home-banner-single-slide hbs-3">
                                <div class="container container-large">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="banner-text-area banner-text-area-1">
                                                <h6>Mac & Windows Repairing Services</h6>
                                                <h1>Repair Your Laptop From Experts.</h1>
                                                <p>Get an expert Lappy Center technician at your home to fix your Laptop issue.</p>
                                                <Link class="default-button" href="contact.html"><span>Contact Us <i class="flaticon-right-arrow"></i></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel>

                </div>

            </section>
  )
}

export default HeroSection