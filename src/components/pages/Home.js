import React, {Component} from 'react';

import Heading from '../parts/Heading';
import Search from '../parts/Search';
import CreateUserLink from '../parts/CreateUserLink';
import SignInLink from '../parts/SignInLink';


class Home extends Component{
  render(){
    return(
      <div>
        <CreateUserLink/><br/>
        <SignInLink/>
        <Heading/>
        <Search />
      </div>
    )
  }
}




export default Home;
