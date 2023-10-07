import React from 'react'

const Contact = () => {
  return (
    <>
        <div class="uni-banner">
        <div class="container-fluid container-large">
            <div class="uni-banner-text-area">
                <h1>Contact Us</h1>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </div>
    </div>


    <div class="contact ptb-100">
        <div class="container">
            <div class="row g-5">
                <div class="col-lg-6">
                    <div class="contact-form-text-area">
                        <form id="contactForm">
                            <div class="row">
                                <div class="col-md-6 col-sm-6 col-12">
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Name" id="name" required data-error="Please enter your name" />
                                        <div class="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-6 col-12">
                                    <div class="form-group">
                                        <input type="email" name="email" class="form-control" placeholder="Email" id="email" required data-error="Please enter your Email" />
                                        <div class="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-6 col-12">
                                    <div class="form-group">
                                        <input type="text" name="phone_number" class="form-control" placeholder="Phone Number" id="phone_number" required data-error="Please enter your phone number" />
                                        <div class="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-6 col-12">
                                    <div class="form-group">
                                        <input type="text" name="msg_subject" class="form-control" placeholder="Subject" id="msg_subject" required data-error="Please enter your subject" />
                                        <div class="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div class="col-md-12 col-sm-12 col-12">
                                    <div class="form-group">
                                        <textarea name="message" id="message" class="form-control" placeholder="Your Messages.." cols="30" rows="5" required data-error="Please enter your message"></textarea>
                                        <div class="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div class="col-md-12 col-sm-12 col-12">
                                    <button class="default-button" type="submit"><span>Send Message</span></button>
                                    <div id="msgSubmit" class="h6 text-center hidden"></div>
                                    <div class="clearfix"></div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="customer-support-area">
                        <h4>Customer Support</h4>
                        <p>Experienced, hand-picked Professionals to serve you at your doorstep</p>
                        <ul class="contact-list">
                            <li><i class="flaticon-phone-call"></i><a href="tel:+91 6375549039">+91 6375549039</a></li>
                            <li><i class="flaticon-email"></i><a href="Mailto: ms569624@gmail.com"><span class="__cf_email__" data-cfemail="573e39313817253227367934383a">ms569624@gmail.com</span></a></li>
                            <li><i class="flaticon-location"></i><a href="https://goo.gl/maps/D8eSMhkTP4a7n1Pd8" target="_blank">A 98, Bindapur Extn, Jivan Park, Bindapur, Delhi, 110059</a></li>
                        </ul>
                        <h4>Working Hours</h4>
                        <ul class="working-time">
                            <li><span>Mon - Sat</span> <span>9:00AM - 6:00PM</span></li>
                            <li><span>Sun</span><span>Closed</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div class="contact-google-map">
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7004.980307016322!2d77.0667702!3d28.6150683!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04cf358079a5%3A0x18d5a06df0aaa25d!2sJivan%20Park!5e0!3m2!1sen!2sin!4v1664022756038!5m2!1sen!2sin" width="100%" height="100%" style={{border: 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    </>
  )
}

export default Contact