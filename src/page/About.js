import React from 'react'
import { Link } from 'react-router-dom'
import { Aboutdata, HomeService } from '../ApiData'
import BannerSection from '../component/BannerSection'

const About = () => {
    return (
        <>
            <BannerSection />


            <div class="about ptb-100">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            {
                                Aboutdata.map((val) => (
                                    <div class="about-text-area pr-20">
                                        <div class="default-section-title">
                                            <span>{val.subtitle}</span>
                                            <h3>{val.title}</h3>
                                            <p>{val.desc}</p>
                                        </div>
                                    </div>
                                ))
                            }
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
                        <h3>Top Website Services For You</h3>
                        <p>Contact for the best quality services at the most reasonable prices!</p>
                    </div>
                    <div class="section-content">
                        <div class="row justify-content-center">
                            {

                                HomeService.slice(0, 3).map((val, key) => (
                                    <>
                                        <div class="col-lg-4 col-md-6 col-sm-6 col-12" key={key}>
                                            <div class="service-card">
                                                <div class="service-card-img">
                                                    <img src={val.imgsrc} alt="image" />
                                                </div>
                                                <div class="service-card-text-area">
                                                    <i class={val.iconname}></i>
                                                    <h4>{val.title}</h4>
                                                    <p>{val.describetion}</p>
                                                    <Link class="read-more-btn" to={'/'}>Read More <i class="flaticon-right-arrow"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                ))
                            }
                        </div>
                        <div class="section-footer-button">
                            <Link class="default-button default-button-2 mt-30" to={'/'}><span>Browse Services <i class="flaticon-right-arrow"></i></span></Link>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default About