1、实现 react ssr
1、引入要渲染的 react 组件
2、通过 renderToString 方法将 react 组件转换为 html 字符串
3、将结果 html 字符串相应到客户端

renderToString 方法用来将 react 组件转换为 html 字符串

--parallel // 同时运行多个命令

- 服务端打包优化体积
- webpack-node-externals
- 通过 webpack 配置剔除打包文件中的 Node 模块
