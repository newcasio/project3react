import React, {Component} from 'react';

import Heading from './Heading';


class User extends Component{
  render(){
    return(
      <div>
        <Heading/>
        <h2>Hello from User Component.</h2>
      </div>
    )
  }
}


export default User;
