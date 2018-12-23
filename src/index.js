import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise';
import reducers from './reducers';

import Routes from './routes';
import './css/style.css';

const store = createStore(
    reducers,
    applyMiddleware(promiseMiddleware)
)
ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter>
            <Routes/>
    </BrowserRouter>
    </Provider>

    , document.getElementById('root'));

