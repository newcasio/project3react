import React, {Component} from 'react';

import axios from 'axios';


class CreateUser extends Component{

  constructor(){
    super();
    this.state ={
      email: '',
      password: ''
    }
  };


  SubmitNewUser(e){

    e.preventDefault();

    const url = 'http://127.0.0.1:3000/users';

    //create an object of data to be sent
    const dataToSend = {
      email: this.state.email,
      password: this.state.password
    }
    axios.post(`${url}/create`, {dataToSend})
    .then(res =>{
      console.log(res.data);
    })
  };


  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    })
  };


  render(){
    return(
      <div>
        <form onSubmit={(e)=>this.SubmitNewUser(e)}>  {/*auto call getBookResults on search button click*/}
          <label>Email</label>
          {/*input field, when typing calls handleChange method and changes state*/}
          <input type="text" name='email' onChange={(input)=>this.handleChange(input)} />
          <label>Password</label>
          <input type="text" name='password' onChange={(input)=>this.handleChange(input)} />
          <button>Create Account</button>
        </form>
      </div>
    )
  }
};


export default CreateUser;
