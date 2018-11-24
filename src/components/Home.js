import React, {Component} from 'react';

import Heading from './Heading';
import Search from './Search';



class Home extends Component{
  render(){
    return(
      <div>
        <Heading/>
        <h2>Hello from Home Component</h2>
        <Search />
      </div>
    )
  }
}


export default Home;
