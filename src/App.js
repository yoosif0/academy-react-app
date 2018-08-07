import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Signup from './components/routes/Signup';
import Login from './components/routes/Login';
import { BrowserRouter, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { PrivateRoute } from './components/routing-utils/PrivateRoute';
import MyProfile from './components/routes/MyProfile';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    isAuthenticated: state.isAuthenticated
  }
}

class PApp extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <div className="container">
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            < PrivateRoute authed={this.props.isAuthenticated} path="/profile" component={MyProfile} />
          </div>
          <ToastContainer />
        </div>
      </BrowserRouter>
    );
  }
}

const App = connect(mapStateToProps, {})(PApp)
export default App;
