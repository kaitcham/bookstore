import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import Progress from './Progress';

const Book = ({ book }) => {
  const { title, author } = book;
  const dispatch = useDispatch();
  const removeBookFromStore = (id) => {
    dispatch(removeBook(id));
  };
  return (
    <li className="book">
      <div className="book-section">
        <h4>{author}</h4>
        <h3>{title}</h3>
        <div className="buttons">
          <button type="button">Comment</button>
          <button
            type="button"
            onClick={() => removeBookFromStore(book.item_id)}
          >
            Remove
          </button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="progress-section">
        <Progress />
        <div className="update-progress">
          <h5>Current Chapter</h5>
          <h6>Chapter 17</h6>
          <button type="button">Update Progress</button>
        </div>
      </div>
    </li>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
