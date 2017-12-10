import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BookShelfChanger from './BookShelfChanger';

class BookShelfGrid extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired
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
                  <BookShelfChanger
                    onChangeShelf={this.props.onChangeShelf}
                    books={this.props.books}
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
