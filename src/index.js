import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './App';
import rootReducer from './Reducers/index';

const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
    <React.StrictMode>
        <Provider store = {store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
