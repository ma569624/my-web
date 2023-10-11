import React from 'react'

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Testimonials from '../component/Testimonials';
import Counter from '../component/Counter';
import GetInTouch from '../component/GetInTouch';
import { HomeAbout, } from '../ApiData';

import HeroSection from '../component/HeroSection';
import OurService from '../component/OurService';
import WorkingProcess from '../component/WorkingProcess';
import FeatureSection from '../component/FeatureSection';
import Plan from '../component/Plan';

const Home = () => {
    

    return (
        <>
            {/* <div id="pre-loader">
                <img class="preloader-img" src="assets/images/preloader1.gif" alt="gif" />
            </div> */}

            
            <HeroSection />

            <FeatureSection />

            <section>
                <div class="about pb-100">
                    <div class="container">
                        <div class="row align-items-center">
                            {
                                HomeAbout.map((item, key) => (
                                    <>
                                        <div class="col-lg-6">
                                            <div class="about-img-area-3">
                                                <img src={item.imgsrc} alt="image" />
                                                <div class="about-img-text-3">
                                                    <h3>{item.experince}</h3>
                                                    <p>Of Experiences</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-lg-6">
                                            <div class="about-text-area-3 pl-20">
                                                <div class="default-section-title">
                                                    <span>About Us</span>
                                                    <h3>{item.title}</h3>
                                                    <p>{item.desc}</p>
                                                </div>
                                                <div class="about-list">
                                                 {
                                                    item.points.map((val) => (
                                                    <ul>
                                                        <li>{val.points1}</li>
                                                    </ul>
                                                    ))
                                                 }
                                                    
                                                </div>
                                                <a class="default-button mt-30" href="about.html"><span>About Our Company <i class="flaticon-right-arrow"></i></span></a>
                                            </div>
                                        </div>
                                    </>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>


            <OurService />

            <Counter />

            <Plan />

            <WorkingProcess />

            <GetInTouch />

            <Testimonials />
        </>
    )
}


export default Home