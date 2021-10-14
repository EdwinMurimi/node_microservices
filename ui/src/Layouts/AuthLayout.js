import React from 'react';
import LoginComponent from '../components/LoginComponent';
import SignUpComponent from '../components/SignUpComponent';
import { Route } from 'react-router-dom';
import '../styles/AuthLayoutStyles.css';

function AuthLayout() {
  return (
    <div className="auth-container">
      <div className="content-forms">
        <Route exact path="/auth" component={LoginComponent} />
        <Route path="/auth/sign-up" component={SignUpComponent} />
      </div>
    </div>
  )
}

export default AuthLayout
