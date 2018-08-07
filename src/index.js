import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css'
import 'react-toastify/dist/ReactToastify.css';
import { store } from './reducers';
import { Provider } from 'react-redux';


ReactDOM.render(

    <Provider store={store}>
        <App />
    </Provider>


    , document.getElementById('root'));
registerServiceWorker();
