import React, {Component} from 'react';

class SignOut extends Component{

  constructor(props){
    super(props);
    this.state={
      isLoggedIn: this.props.logStatus
    }
  }

  LogOut(){
    this.setState({
      isLoggedIn: false
    })
    localStorage.removeItem('authToken');
    this.props.changeLogStatus(false);
  }

  render(){
    return(
      <button class="topButtons" onClick={()=>this.LogOut()}>Sign Out</button>
    )
  }

}

export default SignOut;
