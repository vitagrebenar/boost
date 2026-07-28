import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Navbar = ({setShowLogin}) => {
  return (

    <div>
      <div className='navbar'>
        <Link to='/'><img className='meni-lijevo' src={assets.novi_logo} alt="" /></Link>

        <ul className='meni-centar'>
          <li><img className='lokacija' src={assets.location} alt="" /></li>
          <li><p className='lokacija-tekst'>Croatia, CRO</p></li>
        </ul>

        <div className='meni-desno' onClick={()=>setShowLogin(true)}></div>
      </div>

      <div class="search">
        <input type="text" class="searchTerm" placeholder="Search..."></input>
      </div>
    </div>

  )
}

export default Navbar
