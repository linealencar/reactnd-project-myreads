import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import PropTypes from 'prop-types';

class BookShelfGrid extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired
  };

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
    const { shelf } = this.props;

    return (
      <div className="bookshelf-books">
        <ol className="books-grid">
          {shelf.map(book => (
            <li key={book.id}>
              <div className="book">
                <div className="book-top">
                  <div
                    className="book-cover"
                    style={{
                      width: 128,
                      height: 193,
                      backgroundImage: `url(${book.imageLinks.smallThumbnail})`
                    }}
                  />
                  <div className="book-shelf-changer">
                    <select
                      onChange={event =>
                        this.updateShelf(event.target.value, `${book.id}`)
                      }
                    >
                      <option value="none" disabled>
                        Move to...
                      </option>
                      <option value="currentlyReading">
                        Currently Reading
                      </option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none">None</option>
                    </select>
                  </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default BookShelfGrid;
