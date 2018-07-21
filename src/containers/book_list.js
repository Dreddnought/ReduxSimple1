import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    const { books, selectBook } = this.props;
    return books.map((book) => {
      return (
        <li
          key={book.title}
          onClick= {() => selectBook(book)}
          className="list-group-item">
          {book.title}
        </li>
      );
    });
  }
  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  // Whatever is returned from here will show up as props in BookList.
  return {
    books: state.books
  };
}

// Anything returned from this function will end up as props on the BookList container.
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called result should be passed to all of our reducers.
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// Promote BookList from a component to a container - it needs to know about this new
// dispatch method, selectBook.  Make it availableas a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);