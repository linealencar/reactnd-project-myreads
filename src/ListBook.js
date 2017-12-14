import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import BookShelfGrid from './BookShelfGrid';

class ListBook extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired,
    onAlert: PropTypes.func.isRequired
  };

  render() {
    const { books, onChangeShelf, onAlert } = this.props;
    let currentlyReading = books.filter(
      book => book.shelf === 'currentlyReading'
    );
    let wantToRead = books.filter(book => book.shelf === 'wantToRead');
    let read = books.filter(book => book.shelf === 'read');

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <BookShelfGrid
                onChangeShelf={onChangeShelf}
                onAlert={onAlert}
                shelf={currentlyReading}
                books={books}
              />
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <BookShelfGrid
                onChangeShelf={onChangeShelf}
                onAlert={onAlert}
                shelf={wantToRead}
                books={books}
              />
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <BookShelfGrid
                onChangeShelf={onChangeShelf}
                onAlert={onAlert}
                shelf={read}
                books={books}
              />
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
