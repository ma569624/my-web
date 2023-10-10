import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Service } from '../ApiData'

const Macbook = () => {
    const param  = useParams();
    let {userid} = param
    const [data, setdata] = useState("")

    useEffect(() => {
        let val  = userid
        setdata(Service[userid-1])
        console.warn(userid);
    },[param])
    


    return (
        <>
            <div class="uni-banner">
                <div class="container container-large">
                    <div class="uni-banner-text-area">
                        <h1>{data.title} Service</h1>
                        <ul>
                            <li><Link to={'/'}>Home</Link></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
            </div>


            <div class="services pt-70 pb-100">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8">
                            <div class="row justify-content-center">

                                <div class="col-lg-12 col-md-6 col-sm-6 col-12">
                                    <div class="service-card">
                                        <div class="service-card-img">
                                            <img src="" alt="image" />
                                        </div>
                                        <div class="service-card-text-area">
                                            <i class="flaticon-mechanics main-icon"></i>
                                            <h4>SSD Upgrade</h4>
                                            <p>Your device will be collected after getting your signature on the internal components of your Laptop.</p>

                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div class="col-lg-4">
                            <div class="sidebar-area mt-30 pl-20">
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