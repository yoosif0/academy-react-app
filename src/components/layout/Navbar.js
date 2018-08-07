

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { unpersistMyInfo } from '../services/persistence';

const NavBarLink = ({ to, label }) => (
    <li className="nav-item">
        <NavLink to={to} activeClassName="active" className="nav-link">{label}</NavLink>
    </li>
)


const mapDispatchToProps = dispatch => ({
    loggedOut: () => dispatch({ type: 'LOGGED_OUT' }),
})

const mapStateToProps = state => ({
    isAuthenticated: state.isAuthenticated
})

class PNavbar extends Component {
    logout = () => {
        this.props.loggedOut()
        unpersistMyInfo()
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
                <a className="navbar-brand">Bikes Rental</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <NavBarLink to="/login" label="Login" />
                        <NavBarLink to="/signup" label="Signup" />
                        {
                            this.props.isAuthenticated && <NavBarLink to="/profile" label="My Profile" />
                        }
                        
                    </ul>
                    {
                        this.props.isAuthenticated &&
                        <ul className="navbar-nav ml-auto mr-5">
                            <li className="nav-item" onClick={this.logout}>
                                <NavLink to="login" activeClassName="active" className="nav-link">Logout</NavLink>
                            </li>
                        </ul>
                    }

                </div>
            </nav>

        );
    }
}

const Navbar = connect(mapStateToProps, mapDispatchToProps)(PNavbar)
export default Navbar;
