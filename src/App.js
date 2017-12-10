import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import ListBook from './ListBook';
import SearchBook from './SearchBook';
import { Route } from 'react-router-dom';

class BooksApp extends React.Component {
  state = {
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  }

  changeShelf = books => {
    this.setState({ books });
  };

  render() {
    return (
      <div className="app">
        <Route path="/search" component={SearchBook} />
        <Route
          exact
          path="/"
          render={() => (
            <ListBook
              onChangeShelf={this.changeShelf}
              books={this.state.books}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
