import ReactDOM from 'react-dom';
import React from 'react';
import {Provider} from 'react-redux'
import store from './store'
import Router from 'react-router-dom'
import Main from './components/Main'
import '../public/index.css'

ReactDOM.render(
    <Provider store={store}>
    <Router>
        <Main />
    </Router>,
    document.getElementById('app')
    </Provider>
);
