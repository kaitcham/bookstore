import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import bookReducer from './books/books';
import checkReducer from './categories/categories';

const rootReducer = combineReducers({
  book: bookReducer,
  checkStatus: checkReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
