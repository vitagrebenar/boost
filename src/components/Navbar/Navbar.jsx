import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

import profilePic from '../../assets/profile_pic.png'
import profilePicHover from '../../assets/profile_pic_hover.png'
import searchIcon from '../../assets/search.png'

const Navbar = ({ setShowLogin }) => {
  return (
    <div>
      <div className='navbar'>

        <Link to='/'>
          <img 
            className='meni-lijevo' 
            src={assets.novi_logo} 
            alt="" 
          />
        </Link>

        <ul className='meni-centar'>
          <li>
            <img 
              className='lokacija' 
              src={assets.location} 
              alt="" 
            />
          </li>

          <li>
            <p className='lokacija-tekst'>
              Croatia, CRO
            </p>
          </li>
        </ul>

        <div 
          className='meni-desno' 
          onClick={() => setShowLogin(true)}
        >
          <img 
            src={profilePic} 
            className='profile-icon profile-icon-normal'
            alt="Profile"
          />

          <img 
            src={profilePicHover} 
            className='profile-icon profile-icon-hover'
            alt="Profile"
          />
        </div>

      </div>

      <div className="search">
        <input 
          type="text" 
          className="searchTerm" 
          placeholder="Search..."
        />
        <img 
          src={searchIcon} 
          className="search-icon"
          alt="Search"
        />
      </div>

    </div>
  )
}

export default Navbar