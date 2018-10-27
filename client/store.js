import { createStore, applyMiddleware } from 'redux';
import userReducer from './reducers';
import puppyReducer from './reducers';
import kittenReducer from './reducers'
import { combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

// //initial state
// const initialState = {
//     users: [],
//     puppies: [],
//     kittens: []
// }

//root reducer
const rootReducer = combineReducers( {
    users: userReducer,
    puppies: puppyReducer,
    kittens: kittenReducer
})

const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware,
        createLogger()
    )
);

export default store;