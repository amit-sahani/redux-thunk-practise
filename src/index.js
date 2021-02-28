import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';
import reducers from './reducers';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

const store = createStore(reducers, applyMiddleware(thunk))

ReactDom.render(<Provider store={store}>
                    <App /> 
                </Provider>,
                document.getElementById("root"));