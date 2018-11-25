import React, {Component} from 'react';

import Heading from '../parts/Heading';
import Search from '../parts/Search';



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
