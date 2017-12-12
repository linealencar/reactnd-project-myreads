import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BookShelfGrid from './BookShelfGrid';
import * as BooksAPI from './BooksAPI';

class SearchBook extends Component {
  state = {
    query: '',
    queryBooks: []
  };

  updateQuery = query => {
    const { books } = this.props;

    this.setState({ query: query.trim() });

    BooksAPI.search(query).then(searchBooks => {
      const queryBooks = searchBooks.map(searchBook => {
        const foundBook = books.find(book => book.id === searchBook.id);
        if (foundBook) {
          searchBook.shelf = foundBook.shelf;
        }
        //searchBook.shelf = 'none';
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
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={event => this.updateQuery(event.target.value)}
            />
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
