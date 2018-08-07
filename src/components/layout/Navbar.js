
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const NavBarLink = ({ label, to }) => (
    <li className="nav-item">
        <NavLink className="nav-link" to={to}> {label} </NavLink>
    </li>
)

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" >Bike Rentals</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <NavBarLink to="/login" label="Login"/>
                        <NavBarLink to="/signup" label="Signup"/>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;
