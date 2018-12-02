import React, {Component} from 'react';

import axios from 'axios';


class CreateUser extends Component{

  constructor(props){
    super(props);
    this.state ={
      email: '',
      password: '',
      isLoggedIn: false
    }
  };


  SubmitNewUser(e){

    e.preventDefault();

    // this.props.changeLogStatus(true);

    const url = 'https://booker-node.herokuapp.com/users';

    axios.post(`${url}/create`, { email: this.state.email, password: this.state.password })
    .then(res =>{
      this.loginFromToken(res.data.token);
    })
    this.setState({
      isLoggedIn: true
    });
    setTimeout(this.props.history.goBack(),3000);

  };

  loginFromToken(tokenFromNode){
    if ('localStorage' in window){
      const token = window.localStorage.setItem('authToken',tokenFromNode);
      if (token){
        // axios.defaults.headers.common['Authorization'] = `${token}`;
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
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
