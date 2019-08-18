import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';
import store from './storeConfig';
import ScrollToTop from './components/ScrollToTop';

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
      <ScrollToTop>
         <Router />
      </ScrollToTop>
      </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
