import { createStore, applyMiddleware, compose } from 'redux';
import {thunk} from 'redux-thunk'
import { userReducer } from './Reduicer/Reduicer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(userReducer, /* preloadedState, */ composeEnhancers(

    applyMiddleware(thunk)
  ));