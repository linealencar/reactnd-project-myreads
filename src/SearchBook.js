import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BookShelfGrid from './BookShelfGrid';
import * as BooksAPI from './BooksAPI';
import { Debounce } from 'react-throttle';

class SearchBook extends Component {
  state = {
    query: '',
    queryBooks: []
  };

  updateQuery = query => {
    const { books } = this.props;

    this.setState({ query });

    BooksAPI.search(query).then(searchBooks => {
      const queryBooks = searchBooks.map(searchBook => {
        const foundBook = books.find(book => book.id === searchBook.id);
        if (foundBook) {
          searchBook.shelf = foundBook.shelf;
        } else {
          searchBook.shelf = 'none';
        }
        return searchBook;
      });
      this.setState({ queryBooks });
    });
  };

  render() {
    const { query, queryBooks } = this.state;
    const { books } = this.props;

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
            onChangeShelf={this.props.onChangeShelf}
            shelf={queryBooks}
            books={books}
          />
        </div>
      </div>
    );
  }
}
export default SearchBook;
