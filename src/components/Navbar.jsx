import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className="nav_style">
                <NavLink activeClassName="active_class" to = "/">Compose Team</NavLink>
                <NavLink activeClassName="active_class" to = "/first">First Quarter</NavLink>
            </div>
        </>
    )
}

export default Navbar;
