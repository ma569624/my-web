import React from 'react'
import { FeatureSec } from '../ApiData'

const FeatureSection = () => {
    return (
        <section>
            <div class="features pt-70 pb-100">
                <div class="container">
                    <div class="row justify-content-center">
                        {
                            FeatureSec.map((item, key) => (
                                <>
                                    <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12" key={key}>
                                        <div class="features-card">
                                            <img src={item.iconsrc} alt="image" />
                                            <h4>{item.title}</h4>
                                            <p>{item.paragraph}</p>
                                        </div>
                                    </div>
                                </>
                            ))
                        }

                    </div>
                    <a class="section-bottom-link mt-30" href="contact.html">Contact for Repair <i class="flaticon-right-arrow"></i></a>
                </div>
            </div>
        </section>
    )
}

export default FeatureSection