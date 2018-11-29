import React, {Component} from 'react';
import axios from 'axios';

import Heading from '../parts/Heading';


class User extends Component{

  constructor(){
    super();
    this.state={
      userDetails: {},
    }
  };

  componentDidMount(){
    const url = `http://127.0.0.1:3000/users/profile/${this.state.userDetails.email}`;

    axios.get(`${url}`)
    .then(res=>{
      console.log(res.data);
      this.setState({
        userDetails: res.data
      })
    })
  }

  RemoveBook(book){
    // console.log(book);      //gets book clicked on
    const url = `http://127.0.0.1:3000/users/profile/${this.state.userDetails.email}/bookdel`;

    let dataToSend= {
      bookToDelete: book,
      user: this.state.userDetails.email
    };

    axios.post(`${url}`, {dataToSend})
    .then(res=>{
      console.log(res.data);
      // this.props.history.push(`/user/${this.state.userDetails.email}`)
      window.location.reload();
    })
    .catch(err=>{
      console.warn(`Post (delete book) to user no good: ${err}`);
    })

  }

  render(){
    // console.log(this.state.userDetails.books);
    return(
      <div>
        <a href='./?#/'>Back</a>
        <Heading/>
        <p>Email: {this.state.userDetails.email}
        </p>
        <h4>Your reading list</h4>
        <ul>
          <ListItems list={this.state.userDetails}
            RemoveBook={this.RemoveBook.bind(this)}/>
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
          <button onClick={()=>props.RemoveBook(book)}>Remove from reading list</button>
        </li>
    })
  )
}



export default User;
