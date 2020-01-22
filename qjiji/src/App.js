import React, { Component } from 'react';
import Navigation from './Navigation';
import Home from './Home';
import Textbook from './Textbook/Textbook';

class App extends Component {

  state = {
    listings: [
      { courseName: 'APSC112', email: 'test@tester.com', description: 'sample-text' },
      { courseName: 'ELEC274', email: 'tester@tester.com', description: 'sample-text' },
      { courseName: 'MTHE235', email: 'testing@tester.com', description: 'sample-text' }
    ],
    showListings: true
  }

  toggleListingsHandler = () => {
    const doesShow = this.state.showListings;
    this.setState({showListings: !doesShow})
}


  render () {

    let postings = null;

    if (this.state.showListings) {
      postings = (
        <div>
          {this.state.listings.map((book) => {
            return <Textbook 
             courseName={book.courseName}
             email={book.email}
             description={book.description} />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
        <Navigation />
        <Home />
        <button 
        onClick={this.toggleListingsHandler}>Show Textbook Listings</button>
        {postings}
        
      </div>
    );
  }
}

export default App;
