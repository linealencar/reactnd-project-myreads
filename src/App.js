import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import ListBook from './ListBook';
import SearchBook from './SearchBook';
import { Route } from 'react-router-dom';
import AlertContainer from 'react-alert';

class BooksApp extends React.Component {
  state = {
    books: []
  };

  alertOptions = {
    offset: 14,
    position: 'top left',
    theme: 'dark',
    time: 5000,
    transition: 'scale'
  };

  showAlert = () => {
    this.msg.show('Shelf changed successfully', {
      time: 2000,
      type: 'success'
    });
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
        <AlertContainer ref={a => (this.msg = a)} {...this.alertOptions} />
        <Route
          path="/search"
          render={() => (
            <SearchBook
              onChangeShelf={this.changeShelf}
              onAlert={this.showAlert}
              books={this.state.books}
            />
          )}
        />
        <Route
          exact
          path="/"
          render={() => (
            <ListBook
              onChangeShelf={this.changeShelf}
              onAlert={this.showAlert}
              books={this.state.books}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
