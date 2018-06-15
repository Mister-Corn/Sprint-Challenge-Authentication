import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Welcome = (props) => {

  const loginPlease = () => {
    return (
      <Fragment>
        <h3>Are you prepared?</h3>
        <br/>
        <Link to="/signin">Login Now!</Link>
        <Link to="/signup">Register Now!</Link>
      </Fragment>
    );
  };

  const jokesPlease = (props) => {
    setTimeout(()=>props.history.push('/jokes'),2000);
    return (
      <Fragment>
        <h3>Looks like you're already logged in.</h3>
        <h3>As much as it's a good idea to, don't close this window. I'ma take you the jokes. :)</h3>
      </Fragment>
    )
  }

  return (
    <div className="welcome">
      {loginPlease()}
    </div>
  );
};

export default Welcome;
