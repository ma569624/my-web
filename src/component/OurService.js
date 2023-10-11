import React from 'react'
import { Link } from 'react-router-dom';
import {HomeService} from '../ApiData'

const OurService = () => {
  return (
    <section>
                <div class="services ptb-100 pt-5 bg-f9f9f9">
                    <div class="container">
                        <div class="default-section-title default-section-title-middle">
                            <span>Our Services</span>
                            <h3>Web App Services Available</h3>
                            <p>Contact for the best quality services at the most reasonable prices!</p>
                        </div>
                        <div class="section-content">
                            <div class="row justify-content-center">
                                {
                                    HomeService.map((val, key) => (
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
                            {/* <div class="section-footer-button">
                                <Link class="default-button default-button-2 mt-30" to={'/'}><span>Browse Services <i class="flaticon-right-arrow"></i></span></Link>
                            </div> */}
                        </div>
                    </div>
                </div>

            </section>
  )
}

export default OurService