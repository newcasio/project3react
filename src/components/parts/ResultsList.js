import React, {Component} from 'react';

class ResultsList extends Component{

  constructor(){
    super();
    this.state={
      currentUserEmail: 'brad.ga.co',
      currentBookId: {}
    }
  }



  AddThisToReadingList(index){
    console.log('this');
    //set state
    //axios request to get book info
    //send to node update user
  }

  render(){
    console.log('Rendering');
    return(
      <div>
        <ul>
          <ListedBooks data ={this.props.listFromGoogle}/>
        </ul>
      </div>
    )
  }
};

const ListedBooks= props =>{
  if (props.data === undefined){
    return (<div>Loading....</div>)
  }

  return(
    props.data.map( (book, index)=>{
      return <li key={index}>
        <h4>Title: {book.volumeInfo.title}</h4>
        <div>Author: {book.volumeInfo.authors.map((element, index)=> <p key={index}>{element}</p>)}</div>
        <p>Description: {book.volumeInfo.description}</p>
        <p>Release Date: {book.volumeInfo.publishedDate}</p>
        <img src={book.volumeInfo.imageLinks.smallThumbnail}/>
        <br/>
        <button onClick={()=>this.AddThisToReadingList(index)}>Add to my reading list</button>
      </li>
    })
  )
}




export default ResultsList;
