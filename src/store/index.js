import {createStore, applyMiddleware} from 'redux';
import reducer from './reducer.js';
import thunk from 'redux-thunk'

const store = createStore(reducer,applyMiddleware(thunk));
// applyMiddleware 让actionCreater可以返回一个函数
export default store;