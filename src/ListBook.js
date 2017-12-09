import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import * as BooksAPI from './BooksAPI';
import BookShelfGrid from './BookShelfGrid';

class ListBook extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired
  };

  render() {
    let currentlyReading = this.props.books.filter(
      book => book.shelf === 'currentlyReading'
    );
    let wantToRead = this.props.books.filter(
      book => book.shelf === 'wantToRead'
    );
    let read = this.props.books.filter(book => book.shelf === 'read');

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <BookShelfGrid shelf={currentlyReading} />
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <BookShelfGrid shelf={wantToRead} />
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <BookShelfGrid shelf={read} />
            </div>
          </div>
          <div className="open-search">
            <Link to="/search">Add a book</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default ListBook;
