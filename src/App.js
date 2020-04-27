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
    addListing: false,
    showListingsButton: "Show Textbook Listings",
    addListingsButton: "Add Textbook Listing"
  };

  toggleListingsHandler = () => {
    const doesShow = this.state.showListings;
    this.setState({showListings: !doesShow});

    if (!this.state.showListings) {
      this.state.showListingsButton = "Hide Textbook Listings";
    } else {
      this.state.showListingsButton = "Show Textbook Listings";
    }
  }

  toggleAddListingHandler = () => {
    const doesShow = this.state.addListing;
    this.setState({addListing: !doesShow});

    if (!this.state.addListing) {
      this.state.addListingsButton = "Hide Add Listing";
    } else {
      this.state.addListingsButton = "Add Textbook Listing";
    }
  }

  submitPostingHandler = (event) => {

    event.preventDefault();
    
    const newPosting = {
      book_name: event.target.book_name.value,
      book_course: event.target.book_course.value,
      book_description: event.target.description.value,
      book_condition: event.target.book_condition.value,
      book_price: event.target.book_price.value,
      book_status: "available",
      contact_name: event.target.contact_name.value,
      contact_number: event.target.contact_number.value,
      contact_email: event.target.contact_email.value
    };

    let self = this;
    axios({
      method: 'post',
      url: '/posts',
      data: newPosting
    })
    .then(function (response) {
      self.setState({listings: response.data});
    });
    
    // Clear input fields
    event.target.book_name.value = "";
    event.target.book_course.value = "";
    event.target.description.value = "";
    event.target.book_condition.value = "";
    event.target.book_price.value = "";
    event.target.contact_name.value = "";
    event.target.contact_number.value = "";
    event.target.contact_email.value = "";

    alert("Your posting was added successfully!");

  }

  fetchBooks = () => {
    let self = this;
    axios({
      method: 'get',
      url: '/posts'
    })
    .then(function (response) {
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
              bookName={book.book_name}
              courseName={book.book_course}
              price={book.book_price}
              bookCondition={book.book_condition}
              contactName={book.contact_name}
              email={book.contact_email}
              phoneNumber={book.contact_number}
              description={book.book_description} />
            })
          }
        </div>
      } else {
        postings = <span>Loading textbooks...</span>
      }
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
          onClick={this.toggleListingsHandler}>{this.state.showListingsButton}</button>
          <button
          onClick={this.toggleAddListingHandler}>{this.state.addListingsButton}</button>
        </div>
        {listingForm}
        {postings}
        
      </div>
    );
  }
}

export default App;
