import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar'
import { BrowserRouter, Route } from 'react-router-dom'
import Login from './components/routes/Login';
import Signup from './components/routes/Signup';
import MyProfile from './components/routes/MyProfile';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/profile" component={MyProfile} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
