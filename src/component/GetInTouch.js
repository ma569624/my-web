import React from 'react'

const GetInTouch = () => {
    return (
        <>
            <div class="sign-up ptb-100">
                <div class="container">
                    <div class="row justify-content-end">
                        <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                            <div class="sign-up-form-area">
                                <div class="default-section-title color-title">
                                    <h3>Get In Touch</h3>
                                    <p>Enter your contact details we will contact you shortly.</p>
                                </div>
                                <form>
                                    <input type="text" class="form-control" placeholder="Your Name" required />
                                    <input type="email" class="form-control" placeholder="Your Email" required />
                                    <input type="text" class="form-control" placeholder="Your Number" required />
                                    <textarea type="text" class="form-control" placeholder="Your Massege" required />
                                    <div class="form-check">
                                        <input type="checkbox" class="form-check-input" id="ship-different-address" required />
                                        <label class="form-check-label" for="ship-different-address">Include Doorstep Service</label>
                                    </div>
                                    <button class="default-button"><span>Submit Rrequest</span></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GetInTouch