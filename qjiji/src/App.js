import React, { Component } from 'react';
import Navigation from './Navigation';
import Home from './Home';
import Textbook from './Textbook/Textbook';
import NewPosting from './NewPosting/NewPosting';
const axios = require('axios');

class App extends Component {

  state = {
    listings: [],
    showListings: false,
    addListing: false
  }

toggleListingsHandler = () => {
    const doesShow = this.state.showListings;
    this.setState({showListings: !doesShow})
}

toggleAddListingHandler = () => {
  const doesShow = this.state.addListing;
  this.setState({addListing: !doesShow})
}

submitPostingHandler = (event) => {

  event.preventDefault();
  
  const newPosting = {
    courseName: event.target.name.value,
    email: event.target.email.value,
    description: event.target.description.value
  };

  const newPostingList = [...this.state.listings, newPosting];
  this.setState({listings: newPostingList});
}

fetchBooks = () => {
  let self = this;
  axios({
    method: 'get',
    url: '/posts'
  })
  .then(function (response) {
    console.log(response);
    self.setState({listings: response.data});
  });
}

  render () {

    let postings = null;

    if (this.state.showListings) {
      console.log("print");
      this.fetchBooks();
      let listings = this.state.listings;
      if (listings.length) {
        postings = 
        <div>
          {
            listings.map((book) => {
              return <Textbook 
              courseName={book.book_course}
              email={book.contact_email}
              description={book.book_description} />
            })
          }
        </div>
      } else {
        postings = <span>Loading textbooks...</span>
      }
      console.log(postings);
    }

    let listingForm = null;

    if (this.state.addListing) {
      listingForm = 
        <div>
          <NewPosting submitted={event => this.submitPostingHandler(event)} />
        </div>
    }

    return (
      <div className="App">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
        <Navigation />
        <Home />
        <div style={{textAlign: 'center'}}>
          <button
          onClick={this.toggleListingsHandler}>Show Textbook Listings</button>
          <button
          onClick={this.toggleAddListingHandler}>Add Textbook Listings</button>
        </div>
        {listingForm}
        {postings}
        
      </div>
    );
  }
}

export default App;
