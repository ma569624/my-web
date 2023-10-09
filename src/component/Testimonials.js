import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { testimonial } from '../ApiData';


const Testimonials = () => {

    const TestimonialOptions = {
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        animateOut: 'bounceOut',
        animateIn: 'bounceIn',
        nav: false,
        dots: false,
        margin: 100,
        responsive: {
            1100: {
                items: 3,
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
            <div class="testimonials ptb-100">
                <div class="container">
                    <div class="default-section-title default-section-title-middle">

                        <h3>What Our Clients Say</h3>
                    </div>
                    <div class="section-content">
                        <div class="testimonial-slider-area-2">

                            <OwlCarousel className='home-banner-slider-area owl-theme' {...TestimonialOptions}>
                                {
                                    testimonial.map((item) => (
                                        <>
                                            <div class='item'>
                                                <div class="testimonial-card">
                                                    <p>‘’ {item.paragraph} ’’</p>
                                                    <div class="testimonial-intro-area">
                                                        <img src={item.imgsrc} alt="image" />
                                                        <div class="testimonial-card-intro-text">
                                                            <h6>{item.name}</h6>
                                                            <span>{item.title}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    ))
                                }
                            </OwlCarousel>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonials