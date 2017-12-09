import React, { Component } from 'react';

class BookShelfGrid extends Component {
  // changeShelf = (newShelf, idBook) => {
  //   BooksAPI.get(idBook).then(book => {
  //     // console.log('Estante antiga ' + book.shelf);
  //     BooksAPI.update(book, newShelf);
  //     // console.log('Estante nova ' + book.shelf);
  //   });
  // };

  render() {
    const { shelf } = this.props;

    // let currentlyReading = books.filter(
    //   book => book.shelf === 'currentlyReading'
    // );
    // let wantToRead = books.filter(book => book.shelf === 'wantToRead');
    // let read = books.filter(book => book.shelf === 'read');

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
                    // onChange={event =>
                    //   this.changeShelf(event.target.value, `${book.id}`)
                    // }
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
        {/* <ol className="books-grid">
            {books.map(book => (
              <li key={book.id}>
                <div className="book">
                  <div className="book-top">
                    <div
                      className="book-cover"
                      style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url(${
                          book.imageLinks.smallThumbnail
                        })`
                      }}
                    />
                    <div className="book-shelf-changer">
                      <select
                      // onChange={event =>
                      //   this.changeShelf(event.target.value, `${book.id}`)
                      // }
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
          </ol> */}
      </div>
    );
  }
}

export default BookShelfGrid;
