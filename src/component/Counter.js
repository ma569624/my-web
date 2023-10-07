import React, { useState } from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'


const Counter = () => {
    const [counterup, setcounterup] = useState(false)
    
  return (
    <>
        <ScrollTrigger onEnter={() => setcounterup(true)} onExit={() =>     setcounterup(false)}>
        <div class="ff-intro ff-intro-1">
                <div class="container">
                    <div class="intro-video-area ptb-100">
                        <div class="row align-items-center">
                            <div class="col-lg-5 col-md-6 col-sm-12 col-12">
                                <div class="intro-video-text-area">
                                    <div class="default-section-title color-title">
                                        <h3>Be Smart. Choose Lappy Center.</h3>
                                    </div>
                                    <a class="default-button mt-30" href="other.html"><span>Browse Services <i class="flaticon-right-arrow"></i></span></a>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="fun-fact-area">
                        <div class="row justify-content-center">
                            <div class="col-lg-3 col-md-6 col-sm-6 col-6">
                                <div class="fun-fact-card">
                                    <i class="flaticon-success"></i>
                                    <h2><span class="odometer">{counterup && <CountUp start={0} end={825} duration={15} delay={1} />}</span>+</h2>
                                    <p>Repaire laptops</p>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-6 col-6">
                                <div class="fun-fact-card">
                                    <i class="flaticon-experience"></i>
                                    <h2><span class="odometer">{counterup && <CountUp start={0} end={793} duration={15} delay={1} />}</span>+</h2>
                                    <p>Happy Customer</p>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-6 col-6">
                                <div class="fun-fact-card">
                                    <i class="flaticon-guarantee-certificate"></i>
                                    <h2><span class="odometer" >{counterup && <CountUp start={0} end={9} duration={12} delay={1} />}</span>+</h2>
                                    <p>Award Winnings</p>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-6 col-6">
                                <div class="fun-fact-card">
                                    <i class="flaticon-expert"></i>
                                    <h2><span class="odometer" >{counterup && <CountUp start={0} end={10} duration={12} delay={1} />}</span>+</h2>
                                    <p>Experts Team</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </ScrollTrigger>
    </>
  )
}

export default Counter