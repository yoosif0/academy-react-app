
import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { unpersistMyInfo } from '../../services/persistence';
import { connect } from 'react-redux';
import { compose } from 'redux';

const NavBarLink = ({ label, to }) => (
    <li className="nav-item">
        <NavLink className="nav-link" activeClassName="active" to={to}> {label} </NavLink>
    </li>
)
const mapDispatchToProps = dispatch => ({
    logout: () => dispatch({ type: 'LOGGED_OUT' })
})
const mapStateToProps = state => ({
    isAuthenticated: state.isAuthenticated
})
class PNavbar extends Component {
    logout = () => {
        this.props.logout()
        unpersistMyInfo()
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" >Bike Rentals</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <NavBarLink to="/login" label="Login" />
                        <NavBarLink to="/signup" label="Signup" />
                        {
                            this.props.isAuthenticated &&
                            <NavBarLink to="/profile" label="My Profile" />
                        }
                    </ul>
                    {
                        this.props.isAuthenticated &&
                        <ul className="navbar-nav ml-auto mr-5">
                            <li className="nav-item" onClick={this.logout}>
                                <NavLink to="login" className="nav-link"> Logout </NavLink>
                            </li>
                        </ul>

                    }
                </div>
            </nav>
        );
    }
}

const Navbar = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,

)(PNavbar)
export default Navbar;
