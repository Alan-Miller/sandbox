import {createStore, applyMiddleware, combineReducers} from 'redux';
import reduxPromiseMiddleware from 'redux-promise-middleware';
import swr from './swreducer';
// import applyMiddleware from 'redux'

const reducer = combineReducers({
  starwars: swr
})


export default createStore(
  reducer,
  applyMiddleware(reduxPromiseMiddleware())
);
