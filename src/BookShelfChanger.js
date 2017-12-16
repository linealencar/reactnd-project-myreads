import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import PropTypes from 'prop-types';

class BookShellfChanger extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired,
    onAlert: PropTypes.func.isRequired
  };

  updateShelf = (newShelf, book) => {
    const { books, onChangeShelf, onAlert } = this.props;

    BooksAPI.update(book, newShelf).then(() => {
      book.shelf = newShelf;
      let newBooks = books.filter(b => b.id !== book.id).concat(book);
      onChangeShelf(newBooks);
      onAlert();
    });
  };

  render() {
    const { book } = this.props;
    return (
      <div className="book-shelf-changer">
        <select
          value={book.shelf}
          onChange={event => this.updateShelf(event.target.value, book)}
        >
          <option value="none" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

export default BookShellfChanger;
