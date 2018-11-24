import React, {Component} from 'react';

import Heading from './Heading';


class Book extends Component{
  render(){
    return(
      <div>
        <Heading/>
        <h2>Hello from Book Component.</h2>
      </div>
    )
  }
}


export default Book;
