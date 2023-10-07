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
                    <Route path="/service" element={<Macbook />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default RoutesApp