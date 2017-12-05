import React from 'react';
// import * as BooksAPI from './BooksAPI'
import './App.css';
import ListBook from './ListBook';
import SearchBook from './SearchBook';
import { Route } from 'react-router-dom';

class BooksApp extends React.Component {
  state = {};

  render() {
    return (
      <div className="app">
        <Route path="/search" component={SearchBook} />
        <Route exact path="/" component={ListBook} />
      </div>
    );
  }
}

export default BooksApp;
