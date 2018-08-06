import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Signup from './components/routes/Signup';
import Login from './components/routes/Login';
import { BrowserRouter, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
