import app from './http';
import render from './render';
import createStore from './createStore';
import { matchRoutes } from 'react-router-config';
import routes from '../share/routes';

app.get('*', (req, res) => {
  //1、请求地址 req.path
  //2、获取路由配置信息，routes
  //3、根据请求地址匹配出要渲染的组件的路由对象信息
  const store = createStore();
  const promise = matchRoutes(routes, req.path).map(({ route }) => {
    if (route.loadData) return route.loadData(store);
  });

  Promise.all(promise).then(() => {
    res.send(render(req, store));
  });
  res.send(render(req, store));
});
