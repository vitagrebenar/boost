import React from 'react'
import './Footer.css'

import homeUnactive from '../../assets/home_unactive.png'
import homeActive from '../../assets/home_active.png'
import userUnactive from '../../assets/user_unactive.png'
import userActive from '../../assets/user_active.png'
import cartUnactive from '../../assets/cart_unactive.png'
import cartActive from '../../assets/cart_active.png'

import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">

        <Link to='/' className="footer-link">
          <img
            src={homeUnactive}
            className="footer-icon home-icon"
            alt="Home"
          />
          <img
            src={homeActive}
            className="footer-icon home-icon-active"
            alt="Home"
          />
        </Link>

        <Link to='/profile' className="footer-link">
          <img
            src={userUnactive}
            className="footer-icon user-icon"
            alt="Profile"
          />
          <img
            src={userActive}
            className="footer-icon user-icon-active"
            alt="Profile"
          />
        </Link>

        <Link to='/cart' className="footer-link">
          <img
            src={cartUnactive}
            className="footer-icon cart-icon"
            alt="Cart"
          />
          <img
            src={cartActive}
            className="footer-icon cart-icon-active"
            alt="Cart"
          />
        </Link>

      </div>
    </div>
  )
}

export default Footer