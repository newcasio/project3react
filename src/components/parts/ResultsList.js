import React, {Component} from 'react';
import axios from 'axios';
import scrollToComponent from 'react-scroll-to-component';

import SignInLink from './SignInLink'

class ResultsList extends Component{

  constructor(){
    super();
    this.state={
      currentUserEmail: '',
      currentBookId: {}   //this is set by the AddThisToReadingList method
    }
  }

  // function topFunction(){
  //   document.documentElement.scrollTop = 0;
  // }

  AddThisToReadingList(book){
    this.setState({
      currentBookId: book       //send entire book object to state
    })

    const url = `https://booker-node.herokuapp.com/users/profile/update`;
    // const url = `http://127.0.0.1:3000/users/profile/update`;

    //create an object of data to be sent
    const dataToSend = {
      // currentUser : this.state.currentUserEmail,   //include this so node can find user to update
      groupedInfo : {
        name: book.volumeInfo.title,
        author: book.volumeInfo.authors,
        id: book.id,
        image: book.volumeInfo.imageLinks.smallThumbnail,
        description: book.volumeInfo.description,
        publishedDate: book.volumeInfo.publishedDate
      }
    };
    //post data to the backend to update individual user
    axios.post(url, {dataToSend})
    .then(res=>{
      console.log(res.data);
      this.props.history.push(`/userShow`)
    })
    .catch(err=>{
      console.warn(`Post no good: ${err}`);
    })
  }


  render(){
    return(
      <div>
        <ul>
          <ListedBooks
            data ={this.props.listFromGoogle}
            AddThisToReadingList={this.AddThisToReadingList.bind(this)}
            isLoggedIn={this.props.isLoggedIn}
          />
        </ul>
      </div>
    )
  }
};


//print the list delivered by props from search.js
const ListedBooks= props =>{

  if (props.data === undefined){
    return (<div>Loading....</div>)
  }

  return props.data.map( (book, index)=>{
    //conditional to check if each book in return listed contains all keys (must have keys, values can be empty)
    let author;
    if( 'authors' in book.volumeInfo ){
      author = <div>Author: {book.volumeInfo.authors.map((element, index)=> <p key={index}>{element}</p>)}</div>;
    } else {
      author = <div>(no author)</div>
    }

    let imageLink;
    if( 'imageLinks' in book.volumeInfo ){
      imageLink =  <img src={book.volumeInfo.imageLinks.smallThumbnail}/>
    } else {
      imageLink = <div>(no image)</div>
    }


    return <li key={index}>
      <h3>{book.volumeInfo.title}</h3>
      { author }
      <p class="searchResultsDescription">Description: {book.volumeInfo.description}</p>
      <p>Release Date: {book.volumeInfo.publishedDate}</p>
      { imageLink}
      <br/>
      {
        props.isLoggedIn
        ?
        <button onClick={()=>props.AddThisToReadingList(book)}>Add to my reading list</button>
        :
        // <button onClick={this.topFunction()}>Sign in to add to your reading list</button>
        <button onClick={()=>document.documentElement.scrollTop=0} id="myBtn" title="Go to top">Sign in to add to your reading list</button>
      }
    </li>
  });

}

export default ResultsList;
