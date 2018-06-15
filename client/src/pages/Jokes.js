import React, { Component, Fragment } from 'react';
import axios from 'axios';

class Jokes extends Component {

  constructor(props) {
    super(props);
    this.state = {
      jokes: [],
      loading: true,
      loginState: false,
      token: "",
    }
  }

  componentDidMount = () => {
    console.log("this.props",this.props);
    const token = this.props.token;
    console.log("this.props.token",token);
    const axiosWithToken = axios.create({
      headers: { "Authorization": token }
    });
    axiosWithToken.get('http://localhost:5000/api/jokes')
      .then(res => {
        this.setState({ jokes: res.data, loading: false, loginState: true})
      })
      .catch(error => { 
        const code = error.response.status;
        console.log("Error status code:",code);
        this.setState({loginState: false, loading: false});
      });
  }

  signinPlease = () => {
    setTimeout(() => this.props.history.push('/signin'), 2000);
    return (
      <h2>You're not logged in. Gimme a sec.</h2>
    );
  }

  jokesPlease = () => {
    return this.state.jokes.map(joke => {
      return (
        <Fragment>
          <h5>{joke.setup}</h5>
          <h5>{joke.punchline}</h5>
        </Fragment>
      );
    })
  }
  render = () => {
    if (!this.state.loading && this.state.loginState) {
      return this.jokesPlease();
    } else if (!this.state.loading && !this.state.loginState) {
      return this.signinPlease();
    } else {
      return <h1>Hold on to your hats! We're still loading!</h1>;
    }
  }

}

export default Jokes;