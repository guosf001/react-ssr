import React from 'react';
import Home from '../share/pages/Home';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from '../share/routes';
import { Provider } from 'react-redux';

export default (req, store) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path}>{renderRoutes(routes)}</StaticRouter>
    </Provider>,
  );

  const initialState = JSON.stringify(store.getState());

  return `
    <html>
      <head title="react-ssr"></head>
        <body>
            <div id="root">${content}</div>
            <script>window.INITIAL_STATE = ${initialState}</script>
            <script src="bundle.js"></script>
        </body>
    </html>
    `;
};
