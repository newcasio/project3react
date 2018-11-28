import React, {Component} from 'react';

import axios from 'axios';


class CreateUser extends Component{

  constructor(){
    super();
    this.state ={
      email: '',
      password: '',
      isLoggedIn: false
    }
  };


  SubmitNewUser(e){

    e.preventDefault();

    const url = 'http://127.0.0.1:3000/users';

    //create an object of data to be sent
    // const dataToSend = {
    //   email: this.state.email,
    //   password: this.state.password
    // }
    axios.post(`${url}/create`, { email: this.state.email, password: this.state.password })
    .then(res =>{
      console.log(res.data);
      this.loginFromToken(res.data.token);
    })
    // this.props.changeLogStatus(true);
    // this.props.history.goBack();
  };

  loginFromToken(e){
    if ('localStorage' in window){
      console.log('localStorage OK');
      const token = window.localStorage.setItem('authToken',e);
      console.log(token);
      if (token){
        console.log('token OK');
        // axios.defaults.headers.common['Authorization'] = `${token}`;
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        this.setState({
          isLoggedIn: true
        });
      }
    } // localStorage available
  }

  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    })
  };


  render(){
    return(
      <div>
        <a href="/">Back to search</a>
        <h3>Register here</h3>
        <form onSubmit={(e)=>this.SubmitNewUser(e)}>  {/*auto call getBookResults on search button click*/}
          <label>Email</label>
          {/*input field, when typing calls handleChange method and changes state*/}
          <input type="text" name='email'  onChange={(input)=>this.handleChange(input)} />
          <label>Password</label>
          <input type="text" name='password'   onChange={(input)=>this.handleChange(input)} />
          <button>Create Account</button>
        </form>
      </div>
    )
  }
};


export default CreateUser;
