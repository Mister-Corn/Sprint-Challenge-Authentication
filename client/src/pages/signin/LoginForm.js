import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Button, Dropdown, Group, Form, Input } from 'semantic-ui-react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.reset = {
      username: "",
      password: ""
    };
    this.state = {
      username: "",
      password: ""
    };
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  inputSpitter = (name, type="text", handler=this.handleInputChange) => {
    return <Input 
      type={type} 
      name={name} 
      value= {this.state[name]} 
      onChange={handler}
    />;
  }

  submitAndSignup = (loginObject) => {
    axios.post('http://localhost:5000/api/users',loginObject)
      .then(res => {
        console.log(res.data.token);
        console.log("received token:",res.data.token);
        this.props.send(res.data.token);
        this.setState({ ...this.reset });
      })
      .catch(err => {
        console.log("submitAndSignup ERROR:",err);
        alert('Registration unsuccessful. Please try again.')
      });
  }

  submitAndSignin = (loginObject) => {
    axios.post('http://localhost:5000/api/login',loginObject)
      .then(res => {
        console.log("submitAndSignin `this`:",this);
        console.log("received token:",res.data.token);
        this.props.send(res.data.token);
        this.setState({ ...this.reset });
      })
      .catch(err => {
        console.log("submitAndSignin ERROR:",err);
        alert('Login unsuccessful. Please try again.')
      });
  }

  formSubmit = (e) => {
    e.preventDefault();
    
    const loginObject = { 
      username: this.state.username, 
      password: this.state.password
     };

     if (this.props.match.path === '/signup') {
       this.submitAndSignup(loginObject);
     } else {
       this.submitAndSignin(loginObject);
     }
  }

  render() {
    return (
      <Form onSubmit={this.formSubmit} className="">
        <Form.Field>
          <label>Username</label>
          {this.inputSpitter('username')}
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          {this.inputSpitter('password', 'password')}
        </Form.Field>
        <Button>Submit</Button>
      </Form>
    );
  }
}

export default LoginForm;
