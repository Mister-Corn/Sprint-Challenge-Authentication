import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import './App.css';
// Pages
import Welcome from './pages/Welcome';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Jokes from './pages/Jokes';

class App extends Component {
  constructor() {
    super();
    this.state = {
      token: "",
    };
  }

  sendTokenToApp = token => {
    this.setState({ token });
    this.props.history.push('/jokes');
  }

  render = () => {
    return (
      <div>
        <div className='header'>
          <h1>Welcome to DadJokes!</h1>
          <h3>Get ready to laugh and hate yourself at the same time!</h3>
        </div>
        <Switch>
          <Route exact path='/' render={(props) => <Welcome token={this.state.token} {...props} />} />
          <Route path="/signin" render={(props) => <SignIn send={this.sendTokenToApp} token={this.state.token} {...props} />} />
          <Route path="/signup" render={(props) => <SignUp send={this.sendTokenToApp} token={this.state.token} {...props} />} />
          <Route path='/jokes' render={(props) => <Jokes token={this.state.token} {...props}/>} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
