import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { HomeService, Service } from '../ApiData'
import BannerSection from '../component/BannerSection';
// import OurService from '../component/OurService';

const Macbook = () => {
    const param = useParams();
    let { userid } = param
    const [data, setdata] = useState("")

    useEffect(() => {

        setdata(Service[userid - 1])

    }, [userid])



    return (
        <>
            <BannerSection />
            
            <div class="service-details pt-100 pb-100">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8">
                            <div class="details-page-text-area">
                                <img class="details-page-main-img" src={data.imgsrc} alt="image" />
                                <h3>{data.pagetitle}</h3>
                                <p>{data.pagedesc}</p>
                                <p>Voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventor veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia volup sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos.</p>
                                {/* <div class="details-page-text-img-area">
                                    <div class="row">
                                        <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                                            <img src="/assets/images/services/service2.jpg" alt="image" />
                                        </div>
                                        <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                                            <img src="/assets/images/services/service3.jpg" alt="image" />
                                        </div>
                                    </div>
                                </div> */}
                                <h4>About This Service</h4>
                                <p>Voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventor veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                                <div class="about-list">
                                    <ul>
                                        <li>24/7 Live Support</li>
                                        <li>Low Cost Services</li>
                                        <li>Quick Repair Services</li>
                                        <li>Fast Delivery</li>
                                    </ul>
                                </div>
                                <p>Voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventor veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia sit aspernatur aut odit aut fugit, sed quia consequu.</p>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="sidebar-area  pl-20">
                                <div class="sidebar-services">
                                    <ul>
                                        {
                                            Service.map((val, key) => (
                                                <>
                                                    <li><Link to={`/service/${val.id}`}><span>{val.title}</span> <i class="flaticon-double-chevron"></i></Link></li>
                                                </>
                                            ))
                                        }

                                    </ul>
                                </div>
                                <div class="sidebar-card sidebar-download mt-30">
                                    <h3> Offers & Deals </h3>
                                    <p>Get the best offers and discounts on repair services such as Motherboard Repair, Battery & Screen Replacement, SSD & RAM Upgrade, Keyboard & Trackpad Replacement and much more. Choose Lappy Maker to get the best deals and savings!</p>
                                    <a class="default-button" href="contact.html"> <span>Contact Us</span> </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>

    )
}

export default Macbook