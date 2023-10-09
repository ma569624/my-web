import React from 'react'

const FeatureSection = () => {
    return (
        <section>
            <div class="features pt-70 pb-100">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div class="features-card">
                                <img src="assets/images/icons/secure-shield.png" alt="image" />
                                <h4>Free Pickup & Drop</h4>
                                <p>No more unnecessary service center visits!.</p>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div class="features-card">
                                <img src="assets/images/icons/certificate.png" alt="image" />
                                <h4>ISO Certified Company</h4>
                                <p>Lappy Center is an ISO certified organization.</p>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div class="features-card">
                                <img src="assets/images/icons/user.png" alt="image" />
                                <h4>Experienced Engineers</h4>
                                <p>No need to find a technician. Get experts at home!</p>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div class="features-card">
                                <img src="assets/images/icons/setting.png" alt="image" />
                                <h4>High Quality Spare Parts</h4>
                                <p>Only high quality spares are used. Quality assured!</p>
                            </div>
                        </div>
                    </div>
                    <a class="section-bottom-link mt-30" href="contact.html">Contact for Repair <i class="flaticon-right-arrow"></i></a>
                </div>
            </div>
        </section>
    )
}

export default FeatureSection