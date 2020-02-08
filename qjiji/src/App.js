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
    this.setState({addListing: doesShow})
  }

  toggleAddListingHandler = () => {
    const doesShow = this.state.addListing;
    this.setState({addListing: !doesShow})
    this.setState({showListings: doesShow})
  }

  submitPostingHandler = (event) => {

    event.preventDefault();
    
    const newPosting = {
      book_name: event.target.name.value,
      book_course: 'ABC101',
      book_description: event.target.description.value,
      book_condition: "New",
      book_price: 150,
      book_status: "available",
      contact_name: "John",
      contact_number: "6471112222",
      contact_email: event.target.email.value
    };

    let self = this;
    axios({
      method: 'post',
      url: '/posts',
      data: newPosting
    })
    .then(function (response) {
      console.log(response);
      self.setState({listings: response.data});
    });
    console.log(this.state.listings);

    event.target.name.value = "";
    event.target.description.value = "";
    event.target.email.value = "";
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

    this.fetchBooks();

    if (this.state.showListings) {
      let listings = this.state.listings;
      if (listings.length) {
        postings = 
        <div>
          {
            listings.map((book) => {
              return <Textbook 
              courseName={book.book_name}
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
