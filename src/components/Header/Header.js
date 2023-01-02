import React from 'react'
import { Link } from 'react-router-dom'
import user from "../../images/user.png"
import "./Header.scss"


const Header = () => {
  return (

    <div className="header">

      <Link to="/moviefinder">
        <div className="logo">Movie App</div>
      </Link>


      <div className="user-image">
        <img src={user} alt="userimage" />
      </div>

    </div>
  )
}

export default Header