import React from 'react'
import { Link } from 'react-router-dom'

const BannerSection = () => {
  return (
    <>
        <div class="uni-banner">
                <div class="container container-large">
                    <div class="uni-banner-text-area">
                        <h1>Service</h1>
                        <ul>
                            <li><Link to={'/'}>Home</Link></li>
                            <li>Service</li>
                        </ul>
                    </div>
                </div>
            </div>
    </>
  )
}

export default BannerSection