import React, { Component } from 'react';
import BookShelfChanger from './BookShelfChanger';
import PropTypes from 'prop-types';

class BookShelfGrid extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired,
    onAlert: PropTypes.func.isRequired
  };
  render() {
    const { shelf, books, onChangeShelf, onAlert } = this.props;

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
                  <BookShelfChanger
                    onChangeShelf={onChangeShelf}
                    onAlert={onAlert}
                    books={books}
                    book={book}
                  />
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
