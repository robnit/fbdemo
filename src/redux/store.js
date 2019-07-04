import { createStore, compose } from 'redux';
import reducer from './reducer.js';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(reducer, devTools());
