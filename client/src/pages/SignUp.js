import React from 'react';
import LoginForm from './signin/LoginForm';

const SignUp = (props) => {
  return (
    <div className="sign-up">
      <h2>Don't have an account? Let's make one <del>so we can sell your private information, make ridiculous bank, and party in Ibiza with Mark Zuckerberg</del> so you can get to the jokes, of course!</h2>
      <br/>
      <LoginForm {...props} />
    </div>
  );
};

export default SignUp;

