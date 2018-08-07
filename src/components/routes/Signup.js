
import React, { Component } from 'react';
import { EnhancedSignupForm } from '../forms/SignupForm/EnhancedSignupForm';
import Title from '../text/Title';

class Signup extends Component {
    render() {
        return (
              <div>
                <Title> Signup </Title>
                <EnhancedSignupForm />
            </div>

        );
    }
}

export default Signup;
