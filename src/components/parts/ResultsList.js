import React, {Component} from 'react';
import axios from 'axios';

class ResultsList extends Component{

  constructor(){
    super();
    this.state={
      currentUserEmail: 'brad@ga.co',
      currentBookId: {}   //this is set by the AddThisToReadingList method
    }
  }

  AddThisToReadingList(book){
    this.setState({
      currentBookId: book       //send entire book object to state
    })

    const url = `http://127.0.0.1:3000/users/profile/${this.state.currentUserEmail}/update`;

    //create an object of data to be sent
    const dataToSend = {
      currentUser : this.state.currentUserEmail,   //include this so node can find user to update
      groupedInfo : {
        name: book.volumeInfo.title,
        author: book.volumeInfo.author,
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
    })
    .catch(err=>{
      console.warn(`Post no good: ${err}`);
    })

    let path = `#/user/${this.state.currentUserEmail}`;
    // console.log(path);
    console.log(this.props.history);
    // this.props.history.push(path);
  }

  render(){
    return(
      <div>
        <ul>
          <ListedBooks data ={this.props.listFromGoogle}
          AddThisToReadingList={this.AddThisToReadingList.bind(this)}/>
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

  return(
    props.data.map( (book, index)=>{
      return <li key={index}>
        <h3>{book.volumeInfo.title}</h3>
        <div>Author: {book.volumeInfo.authors.map((element, index)=> <p key={index}>{element}</p>)}</div>
        <p>Description: {book.volumeInfo.description}</p>
        <p>Release Date: {book.volumeInfo.publishedDate}</p>
        <img src={book.volumeInfo.imageLinks.smallThumbnail}/>
        <br/>
        <button onClick={()=>props.AddThisToReadingList(book)}>Add to my reading list</button>
      </li>
    })
  )
}

export default ResultsList;
