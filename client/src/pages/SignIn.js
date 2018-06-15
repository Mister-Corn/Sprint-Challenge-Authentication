import React from 'react';
import LoginForm from './signin/LoginForm';

const SignIn = (props) => {
  return (
    <div className="sign-in">
      <h2>Log in to experience <del>horrible pain that rips through your being and violates your sense of self</del> family-friendly fun!</h2>
      <br/>
      <LoginForm {...props} />
    </div>
  );
};

export default SignIn;

