import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../component/Header'
import Footer from '../component/Footer'
import Home from '../page/Home'
import Gallery from '../page/Gallery'
import Contact from '../page/Contact'
import Process from '../page/Process'
import Macbook from '../page/Macbook'
import About from '../page/About'
import Services from '../page/Services'
import PricePlan from '../page/PricePlan'

const RoutesApp = () => {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/process" element={<Process />} />
                    <Route path='/service/:userid' element={<Macbook />} />
                    <Route path='/services' element={<Services />} />
                    <Route path='/price' element={<PricePlan />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default RoutesApp