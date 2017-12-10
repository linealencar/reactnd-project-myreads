import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';

class BookShellfChanger extends Component {
  updateShelf = (newShelf, idBook) => {
    const { books, onChangeShelf } = this.props;

    BooksAPI.get(idBook).then(book => {
      BooksAPI.update(book, newShelf).then(() => {
        book.shelf = newShelf;
        let newBooks = books.filter(b => b.id !== book.id).concat(book);
        onChangeShelf(newBooks);
      });
    });
  };

  render() {
    const { book } = this.props;
    return (
      <div className="book-shelf-changer">
        <select
          value={book.shelf}
          onChange={event => this.updateShelf(event.target.value, `${book.id}`)}
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
