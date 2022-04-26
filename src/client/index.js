import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from '../share/routes';
import { Provider } from 'react-redux';
import store from './createStore';
import Home from '../share/pages/Home';

// hydrate 二次渲染，复用dom节点，不会产生额外开销
ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
