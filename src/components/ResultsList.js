import React, {Component} from 'react';

class ResultsList extends Component{

  componentDidUpdate() {
    console.log('comdidupdate is running');
    console.log(this.props.listFromGoogle);
  // Typical usage (don't forget to compare props):
    ListedBooks(this.props.listFromGoogle);
}

  render(){
    console.log(this.props.listFromGoogle);
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
  console.log('Listed books running');
  if (props !== []){
    console.log('listFromGoogle not empty');
    return props.data.map (book=> <li>{book.volumeInfo.title}</li>)
  }else{
    console.log('listFromGoogle is null');
    return null;
  }
}


export default ResultsList;
