import React, {Component} from 'react';
import axios from 'axios';

import Heading from '../parts/Heading';


class UserShow extends Component{

  constructor(){
    super();
    this.state={
      userDetails: [],
    }
  };

  componentDidMount(){
    const url = `http://127.0.0.1:3000/users/profile`;
    // const url = `http://127.0.0.1:3000/users/profile/${this.state.userDetails.email}`;
    this.loginFromToken();

    axios.get(`${url}`)
    // axios.get(`${url}`)
    .then(res=>{
      console.log('res', res.data);
      this.setState({
        userDetails: res.data
      })
    })
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


  RemoveBook(book){
    // console.log(book);      //gets book clicked on
    const url = `http://127.0.0.1:3000/users/profile/bookdel`;
    // const url = `http://127.0.0.1:3000/users/profile/${this.state.userDetails.email}/bookdel`;

    let dataToSend= {
      bookToDelete: book,
      user: this.state.userDetails.email
    };

    axios.post(url, {dataToSend})
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
        <a href='./#/'>Back</a>
        <Heading/>
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
  if ( !props.list.length ){
    return(<div>Loading....</div>);
  };

  console.log('list', props.list);

  return(
    props.list.map((book, index) => {
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



export default UserShow;
