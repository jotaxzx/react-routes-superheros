import React from 'react'
import {
    Link,
    NavLink
    
  } from "react-router-dom";

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <Link to="/" className="navbar-brand" >Superheros</Link>
            
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ml-auto">
                <NavLink exact activeClassName="active" to="/marvel" className="nav-item nav-link" >Marvel </NavLink>
                <NavLink exact activeClassName="active" to="/dc" className="nav-item nav-link" >DC</NavLink>
                {/* <NavLink exact activeClassName="active" to="/login" className="nav-item nav-link" >Logout</NavLink>*/}
                
                </div>
            </div>
</nav>
    )
}