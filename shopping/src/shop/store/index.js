import { createStore, combineReducers } from 'redux';
import carReducer from './reducer/carReducer';

let reducers = combineReducers({
    carReducer
})

let store = createStore(reducers)

window.store = store

export default store;



