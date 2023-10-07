import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


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
                                <div class='item'>
                                    <div class="testimonial-card">
                                        <p>‘’ Trustworthy and value for money. Lappy Center provides genuine spare parts with one year warranty at about 30-50% price of Apple's Refurbished spares and three months warranty. Complete transparency and no cheating. ’’</p>
                                        <div class="testimonial-intro-area">
                                            <img src="assets/images/testimonials/1.jpg" alt="image" />
                                            <div class="testimonial-card-intro-text">
                                                <h6>Yash</h6>
                                                <span>Event Manager</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class='item'>
                                    <div class="testimonial-card">
                                        <p>‘’It was a wonderful experience getting my MacBook Pro screen replaced at Lappy Center. They are very professional when it comes to service. I was pleasantly surprised by their thorough knowledge of the product. ’’</p>
                                        <div class="testimonial-intro-area">
                                            <img src="assets/images/testimonials/2.jpg" alt="image" />
                                            <div class="testimonial-card-intro-text">
                                                <h6>Ranjan Tiwari</h6>
                                                <span>Businessman</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class='item'>
                                    <div class="testimonial-card">
                                        <p>‘’ I was so worried when I heard the price for the motherboard and battery from Apple store but the lappy Center just provided me the service in just half amount. And the best thing it was free pick-up & drop facility. ’’</p>
                                        <div class="testimonial-intro-area">
                                            <img src="assets/images/testimonials/3.jpg" alt="image" />
                                            <div class="testimonial-card-intro-text">
                                                <h6>Sanjana</h6>
                                                <span>Artish</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class='item'>
                                    <div class="testimonial-card">
                                        <p>‘’Just got my 2017 macbook pro's battery replaced. The whole process was very smooth; the guy came to my house and replaced the battery The price was also almost half as compared to what apple service centre quoted me. ’’</p>
                                        <div class="testimonial-intro-area">
                                            <img src="assets/images/testimonials/4.jpg" alt="image" />
                                            <div class="testimonial-card-intro-text">
                                                <h6>Alok Pandey</h6>
                                                <span>Professor</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class='item'>
                                    <div class="testimonial-card">
                                        <p>‘’ It was great to find a place where they could fix my MacBook after Apple suggested there was nothing to do but buy a new computer. They were professional and honest and did a great job. ’’</p>
                                        <div class="testimonial-intro-area">
                                            <img src="assets/images/testimonials/5.jpg" alt="image" />
                                            <div class="testimonial-card-intro-text">
                                                <h6>Arjun</h6>
                                                <span>IT Student</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class='item'>
                                    <div class="testimonial-card">
                                        <p>‘’ They were very friendly and very helpful. They have great customer service and accurate information on the status of your repair. Service was excellent and their prices was very reasonable.I’m very thankful.’’</p>
                                        <div class="testimonial-intro-area">
                                            <img src="assets/images/testimonials/6.jpg" alt="image" />
                                            <div class="testimonial-card-intro-text">
                                                <h6>Anjali</h6>
                                                <span>fashion designer</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </OwlCarousel>



                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonials