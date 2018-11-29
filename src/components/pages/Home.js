import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Heading from '../parts/Heading';
import Search from '../parts/Search';
import CreateUserLink from '../parts/CreateUserLink';
import SignInLink from '../parts/SignInLink';
import SignOut from '../parts/SignOut';

class Home extends Component{

  constructor(props){
    super(props);
    this.state={
      isLoggedIn: false
    }
  }

  componentDidMount(){
    this.loginFromToken();
    // axios.get('http://127.0.0.1:3000/users/profile/watever')
    // .then(console.log);
  }

  loginFromToken(){
    if ('localStorage' in window){
      console.log('localStorage OK');
      const token = localStorage.getItem('authToken');
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

  onChangeLogStatus(newStatus){
    this.setState({
      isLoggedIn: newStatus
    })
  }

  render(){

    let nav;
    if( this.state.isLoggedIn ){
      // nav = <SignOutLink/>;
      nav = <SignOut changeLogStatus={(newValue)=>this.onChangeLogStatus(newValue)} logStatus={this.state.isLoggedIn}/>;
    } else {
      nav = (
        <div>
          <CreateUserLink changeLogStatus={(newValue)=>this.onChangeLogStatus(newValue)} logStatus={this.state.isLoggedIn}/>
          <SignInLink changeLogStatus={(newValue)=>this.onChangeLogStatus(newValue)} logStatus={this.state.isLoggedIn}/>
        </div>
      );
    }

    return(
      <div>
        { nav }
        <Heading/>
        <Search history={this.props.history} isLoggedIn={this.state.isLoggedIn} />     {/*pass this down to Search.js then to ResultsList.js so can use this.props.history.push to redirect in ResultsList.js*/}
      </div>
    )
  }
}




export default Home;
