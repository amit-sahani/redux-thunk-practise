import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';
import reducers from './reducers';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

ReactDom.render(<Provider store={createStore(reducers)}>
                    <App /> 
                </Provider>,
                document.getElementById("root"));