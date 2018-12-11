import React, {Component} from 'react';

class ShowPageLink extends Component{

  directPage(){
    this.props.history.push(`/userShow`)
  }


  render(){
    return(
      <button class="topButtons" onClick={()=>this.directPage()}>My reading list</button>
    )
  }
}

export default ShowPageLink;
