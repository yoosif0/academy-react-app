import { EnhancedLoginForm } from '../forms/LoginForm/EnhancedLoginForm';
import React, { Component } from 'react';
import Title from '../text/Title';

class Login extends Component {
    render() {
        return (
            <div>
                <Title> Login </Title>
                <EnhancedLoginForm />
            </div>

        );
    }
}

export default Login;
