import React from 'react'
import './Profile.css'
import { assets } from '../../assets/assets'

const Profile = () => {
  return (
    <div className='profile'>

      <h2>Profile</h2>

      <img src={assets.profile_pic} alt="" className="profile-image" />

      <h2 className='info-naslov'>Personal info</h2>

      <div className="container">
        <div className="personal-info">
                <div className="box">
                    <p className='first-name'>First name</p>
                    <p className='last-name'>Emily</p>
                </div>

                <div className="box">
                    <p className='first-name'>Last name</p>
                    <p className='last-name'>Jason</p>
                </div>
        </div>
      </div>


      <h2 className='info-naslov2'>Contact info</h2>

      <div className="container">
        <div className="personal-info">
            <div>
                <div className="box">
                    <p className='first-name'>Phone number</p>
                    <p className='last-name'>+012 345 678</p>
                </div>

                <div className="box">
                    <p className='first-name'>Email</p>
                    <p className='last-name'>emily.jason@gmail.com</p>
                </div>
            </div>
        </div>
      </div>


      <h2 className='info-naslov2'>Location info</h2>

      <div className="container">
        <div className="personal-info">
          <div>
            <div className="box">
              <p className='first-name'>Country</p>
              <p className='last-name'>Croatia</p>
            </div>

            <div className="box">
              <p className='first-name'>City</p>
              <p className='last-name'>Zagreb</p>
            </div>

            <div className="box">
              <p className='first-name'>Adress</p>
              <p className='last-name'>Getaldićeva ulica 2</p>
            </div>
          </div>
        </div>
      </div>

    </div>


  )
}

export default Profile
