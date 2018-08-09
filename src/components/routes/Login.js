import React, { Component } from 'react';
import { Title } from '../text/Title';
import { EnhancedLoginForm } from '../forms/LoginForm/EnhancedLoginForm';

class Login extends Component {
  render() {
    return (
      <div>
        <Title> Login Route </Title>
        <EnhancedLoginForm />
      </div>
    );
  }
}

export default Login;
