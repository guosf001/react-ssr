import React from "react";
import ReactDOM  from "react-dom";
import Home from "../share/pages/home";

// hydrate 二次渲染，复用dom节点，不会产生额外开销
ReactDOM.hydrate(<Home />, document.getElementById('root'))