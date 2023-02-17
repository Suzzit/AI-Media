import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo from "../assets/images/logo.png"

function Navbar() {
    return (
        <div className="navbar-wrapper">
            <div className='navbar-wrapper__logodiv'>
                {/* <img src={logo} alt="" /> */}
                <span>AI-MEDIA</span>
            </div>
            <nav className="navbar-wrapper__navbar-main">
                <NavLink to={"/explore"}>
                    Community
                </NavLink>

                <NavLink className="navbar-wrapper__navbar-main__create" to={"/create"}>
                    Create
                </NavLink>
            </nav>

            <div className='navbar-wrapper__navbar-main__profile-main'>
                <img src={logo} alt='profilepic' />
            </div>
        </div>
    )
}

export default Navbar