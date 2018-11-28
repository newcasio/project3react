import React, {Component} from 'react';
import axios from 'axios';


class SignInLink extends Component{
  constructor(props){
    super(props);
    this.state ={
      email: '',
      password: '',
      loggedIn: this.props.logStatus
    }
  };

  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
    })
  };



  LogInUser(e){
    e.preventDefault();       //prevent reload on form submit
    axios.post("http://127.0.0.1:3000/users/signIn", {email: this.state.email, password: this.state.password})
    .then(res=>{
      console.log(res.data);
      //set returned token into the header of request
      axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.token}`;
      //store token to local storage
      if ('localStorage' in window){
            window.localStorage.setItem('authToken', res.data.token);
      }
      this.setState({
        loggedIn: true
      })
      this.props.changeLogStatus(true);
    })
    .catch(err => {
          console.warn(`login error:`, err);
          // this.error = 'Incorrect email or password.'  //error loggin in, catch error
    });
  }

  render(){
    return(
        <div>
          <form onSubmit={(e)=>this.LogInUser(e)}>
            <label>Email</label>
            <input type="text" name='email' onChange={(input)=>this.handleChange(input)} />
            <label>Password</label>
            <input type="text" name='password' onChange={(input)=>this.handleChange(input)} />
            <button>Log in</button>
          </form>
        </div>
    )
  }
}

export default SignInLink;
