import React, { Component } from 'react';
import Navigation from './Navigation';
import Home from './Home';
import Textbook from './Textbook/Textbook';
import NewPosting from './NewPosting/NewPosting';

class App extends Component {

  state = {
    listings: [
      { courseName: 'APSC112', email: 'test@tester.com', description: 'sample-text' },
      { courseName: 'ELEC274', email: 'tester@tester.com', description: 'sample-text' },
      { courseName: 'MTHE235', email: 'testing@tester.com', description: 'sample-text' }
    ],
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



  render () {

    let postings = null;

    if (this.state.showListings) {
      postings = 
        <div>
          {this.state.listings.map((book) => {
            return <Textbook 
             courseName={book.courseName}
             email={book.email}
             description={book.description} />
          })}
        </div>
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
