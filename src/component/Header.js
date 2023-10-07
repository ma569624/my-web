import { Link } from "react-router-dom"

const Header = () => {
    return (
        <>
            <div class="topbar">
                <div class="container-fluid container-large">
                    <div class="row align-items-center">
                        <div class="col-lg-8 col-md-9 col-sm-12 col-12">
                            <div class="topbar-left-area">
                                <ul>
                                    <li><i class="flaticon-phone-call"></i> <a href="tel:+91 6375549039">+ 91 6375549039</a></li>
                                    <li><i class="flaticon-email"></i> <a href="Mailto: ms569624@gmail.com"><span class="__cf_email__" data-cfemail="8ae3e4ece5caf8effaeba4e9e5e7">ms569624@gmail.com</span></a></li>
                                    <li><i class="flaticon-location"></i> <a href="https://goo.gl/maps/GhyNv5syUCu3Dsfj8" target="_blank">A 98, Bindapur Extn, Jivan Park, Bindapur, Delhi, 110059</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-3 col-sm-12 col-12">
                            <div class="topbar-social-icons">
                                <ul>
                                    <li><a href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
                                    <li><a href="https://twitter.com/" target="_blank"><i class="fab fa-twitter"></i></a></li>
                                    <li><a href="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram"></i></a></li>
                                    <li><a href="https://www.pinterest.com/" target="_blank"><i class="fab fa-pinterest-p"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="navbar-area">

                <div class="main-responsive-nav">
                    <div class="container-fluid container-large">
                        <div class="mobile-nav">
                            <Link to={'/'} ><img src="assets/images/New/lappy_logo(1).png" alt="logo" /></Link>
                            <ul class="menu-sidebar menu-small-device">
                                <li><a class="cart-icon" href="cart.html"><i class="flaticon-cart"></i><span>03</span></a></li>
                                <li><button class="popup-button"><i class="flaticon-loupe"></i></button></li>
                                <li><a class="default-button" href="contact.html">Book Now<i class="flaticon-right-arrow"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="main-nav">
                    <div class="container-fluid container-large">
                        <nav class="navbar navbar-expand-md navbar-light">
                            
                             <Link to={'/'}>
                                <img src="assets/images/New/lappy_logo.png" alt="logo" />
                             </Link>
                            
                            <div class="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                                <ul class="navbar-nav">
                                    <li class="nav-item ">
                                    <Link to={'/'}>
                                        Home
                                    </Link>

                                    </li>
                                    <li class="nav-item">
                                        <Link to={'/service'}>
                                        Services
                                        </Link>
                                        <ul class="dropdown-menu">
                                            <li class="nav-item">
                                                <Link to={'/service'}>
                                                  MacBook Repaire
                                                </Link>
                                            </li>
                                                
                                            <li class="nav-item">
                                            <Link to={'/service'}>Mac Mini Repaire</Link>
                                            </li>
                                            <li class="nav-item"><Link to={'/service'}>iMac Repaire</Link></li>
                                            <li class="nav-item"><Link to={'/service'}>Other Laptop Repaire</Link></li>
                                        </ul>
                                    </li>
                                    <li class="nav-item"> <Link to={'/process'}> Our Working Process</Link></li>
                                    <li class="nav-item"><Link to={'/gallery'}>  Our Gallery</Link></li>
                                    <li class="nav-item"><Link to={'/about'}>  About Us</Link></li>
                                    <li class="nav-item"><Link to={'/contact'}> Contact Us</Link></li>
                                </ul>
                                <div class="menu-sidebar">
                                    <ul>
                                        <li><a class="default-button" href="tel: +91 6375549039"><span>Call A Service <i class="flaticon-right-arrow"></i></span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header