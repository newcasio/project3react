import React, {Component} from 'react';
import axios from 'axios';

import ResultsList from './ResultsList';

class Search extends Component{

  constructor(){
    super();
    this.state = {
      searchString: '',
      bookResults:[]
    }
  }

  handleChange(event){      //set state from form input
    this.setState({
      searchString: event.target.value
    });
  }

  getBookResults(){

    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${this.state.searchString}&key=AIzaSyBfdeYzd23jyR3fKx0oRtdlqCDK-NEzwcI`)
    .then(response=>{
      console.log('response', response.data);
      this.setState({
        bookResults: response.data.items
      })
    })
    .catch(err=>{
      console.warn(err);
    })
  }

  render(){
    return(
      <div>
        <h2>Book Search</h2>
        <form onSubmit={()=>this.getBookResults()}>  {/*auto call getBookResults on search button click*/}
          <input type="text" placeholder="Search here" onChange={(input)=>this.handleChange(input)} />   {/*input field, when typing calls handleChange method and changes state*/}
          <button>Search</button>
        </form>

        <ResultsList listFromGoogle={this.state.bookResults} history={this.props.history} />   {/*pass this down to Search.js then to ResultsList.js so can use this.props.history.push to redirect in ResultsList.js */}

      </div>
    )
  }
};

export default Search;
