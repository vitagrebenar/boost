import React from 'react'
import './Banner.css'
import { assets } from '../../assets/assets'

const Banner = () => {
  return (

    <div className='banner'>
      <div className="banner-overlay"><img src={assets.banner}/></div>
      <div className="banner-overlay2"><img src={assets.banner_veliki}/></div>

      <div className="tekst">

        <div className="naslov">
          <p>Special Offer</p>
          <p>for March</p>
        </div>
        <div className="podnaslov">
          <p>We are here with the best</p>
          <p>meals in town.</p>
        </div>

        <div className="button">Buy now</div>

      </div>

    </div> 




  )
}

export default Banner
