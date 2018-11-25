import React, {Component} from 'react';
import axios from 'axios';

import Heading from '../parts/Heading';


class User extends Component{

  constructor(){
    super();
    this.state={
      userDetails: {}
    }
  };

  componentDidMount(){
    const url = 'http://127.0.0.1:3000/users/profile/brad@ga.co';

    axios.get(`${url}`)
    .then(res=>{
      console.log(res.data);
      this.setState({
        userDetails: res.data
      })
    })
  }

  render(){
    // console.log(this.state.userDetails.books);
    return(
      <div>
        <Heading/>
        <p>Email: {this.state.userDetails.email}
        </p>
        <h4>Your reading list</h4>
        <ul>
          <ListItems list={this.state.userDetails}/>
        </ul>
      </div>
    )
  }
}


const ListItems = (props)=>{
  if (props.list.books === undefined){
    return(<div>Loading....</div>);
  };

  return(
    props.list.books.map((book, index) => {
        return <li key={index}>
          <p>Title: {book.name}</p>
          <p>Author: {book.author}</p>
          <p>Description: {book.description}</p>
          <img src={book.image}/>
        </li>
    })
  )
}





export default User;
