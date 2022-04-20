import React from "react";
import Home from "../share/pages/home";
import { renderToString } from "react-dom/server";

export default () => {
    const content = renderToString(<Home />);
    return (`
    <html>
      <head title="react-ssr"></head>
        <body>
            <div id="root">${content}</div>
            <script src="bundle.js"></script>
        </body>
    </html>
    `);
}