import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {

  

  return (
    <div className='footer' id='footer'>
      <div className="footer-content">

        <Link to='/'><div className="footer-content-left"></div></Link>

        <Link to='/profile'><div className="footer-content-center"></div></Link>

        <Link to='/cart'><div className="footer-content-right"></div></Link>
        


      </div>      
    </div> 
  )
}

export default Footer
