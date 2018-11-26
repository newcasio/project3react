import React, {Component} from 'react';

import Heading from '../parts/Heading';
import Search from '../parts/Search';
import CreateUserLink from '../parts/CreateUserLink';
import SignInLink from '../parts/SignInLink';
import ReactDOM from 'react-dom';



class Home extends Component{
  render(){
    return(
      <div>
        <CreateUserLink/><br/>
        <SignInLink/>
        <Heading/>
        <Search history={this.props.history} />     {/*pass this down to Search.js then to ResultsList.js so can use this.props.history.push to redirect in ResultsList.js*/}
      </div>
    )
  }
}




export default Home;
