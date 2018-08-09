import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar'
import { BrowserRouter, Route } from 'react-router-dom'
import Login from './components/routes/Login';
import Signup from './components/routes/Signup';
import MyProfile from './components/routes/MyProfile';
import { ToastContainer } from 'react-toastify';
import { PrivateRoute } from './components/HOC/PrivateRoute';
import { connect } from 'react-redux';

const mapStateToProps = () => state => ({
  isAuthenticated: state.isAuthenticated
})

class PApp extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <div className="container">
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <PrivateRoute authed={this.props.isAuthenticated} path="/profile" component={MyProfile} />
          </div>
          <ToastContainer />
        </div>
        
      </BrowserRouter>
    );
  }
}
const App = connect(mapStateToProps, {})(PApp)
export default App;
