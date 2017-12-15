import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BookShelfGrid from './BookShelfGrid';
import * as BooksAPI from './BooksAPI';
import { Debounce } from 'react-throttle';
import PropTypes from 'prop-types';

class SearchBook extends Component {
  state = {
    query: '',
    queryBooks: []
  };

  static propTypes = {
    books: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired,
    onAlert: PropTypes.func.isRequired
  };

  updateQuery = query => {
    if (!query) {
      this.setState({ queryBooks: [] });
      return;
    }
    const { books } = this.props;
    this.setState({ query });

    BooksAPI.search(query).then(searchBooks => {
      const queryBooks = searchBooks.map(searchBook => {
        for (const book of books) {
          if (book.id === searchBook.id) {
            searchBook.shelf = book.shelf;
          } else {
            searchBook.shelf = 'none';
          }
        }
        return searchBook;
      });
      this.setState({ queryBooks });
    });
  };

  render() {
    const { queryBooks } = this.state;
    const { books, onChangeShelf, onAlert } = this.props;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          {/* {JSON.stringify(this.state)} */}
          <div className="search-books-input-wrapper">
            <Debounce time="400" handler="onChange">
              <input
                type="text"
                placeholder="Search by title or author"
                onChange={event => this.updateQuery(event.target.value)}
              />
            </Debounce>
          </div>
        </div>
        <div className="search-books-results">
          <BookShelfGrid
            onChangeShelf={onChangeShelf}
            onAlert={onAlert}
            shelf={queryBooks}
            books={books}
          />
        </div>
      </div>
    );
  }
}
export default SearchBook;
