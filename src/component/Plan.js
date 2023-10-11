import React from 'react'
import { Link } from 'react-router-dom'

const Plan = () => {
  return (
    <>
        <div class="pricing pt-70 pb-100">
                <div class="container">
                    <div class="row justify-content-center">
                        
                        <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div class="pricing-card pricing-card-2  pricing-card-3">
                                <h6>For Static Website</h6>
                                <h2>₹ 2499</h2>
                                <ul>
                                    <li><i class="flaticon-checked"></i> One-Hour Basic Training </li>
                                    <li><i class="flaticon-checked"></i> Keyboard not responsive </li>
                                    <li><i class="flaticon-checked"></i> Upgrading the Graphics Card</li>
                                    <li class="disable"><i class="flaticon-checked"></i> <del>Upgrading the CPU</del></li>
                                    <li class="disable"><i class="flaticon-checked"></i> <del>Hard Drive Replacement</del></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div class="pricing-card pricing-card-2 pricing-card-3">
                                <h6>For Dynamic Website</h6>
                                <h2>₹ 4499 </h2>
                                <ul>
                                    <li><i class="flaticon-checked"></i> One-Hour Basic Training </li>
                                    <li><i class="flaticon-checked"></i> Keyboard not responsive </li>
                                    <li><i class="flaticon-checked"></i> Upgrading the Graphics Card</li>
                                    <li><i class="flaticon-checked"></i> Upgrading the CPU</li>
                                    <li class="disable"><i class="flaticon-checked"></i> <del>Hard Drive Replacement</del></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-6 col-12">
                            <div class="pricing-card pricing-card-2 pricing-card-3">
                                <h6>For Ecommerce Website</h6>
                                <h2>₹ 8999 </h2>
                                <ul>
                                    <li><i class="flaticon-checked"></i> One-Hour Basic Training </li>
                                    <li><i class="flaticon-checked"></i> Keyboard not responsive </li>
                                    <li><i class="flaticon-checked"></i> Upgrading the Graphics Card</li>
                                    <li><i class="flaticon-checked"></i> Upgrading the CPU</li>
                                    <li><i class="flaticon-checked"></i> Hard Drive Replacement</li>
                                </ul>
                            </div>
                        </div>

                        <div class="section-footer-button">
                                <Link class="default-button default-button-2 mt-30" to={'/contact'}><span>Book A Plan<i class="flaticon-right-arrow"></i></span></Link>
                            </div>

                    </div>
                </div>
            </div>
    </>
  )
}

export default Plan