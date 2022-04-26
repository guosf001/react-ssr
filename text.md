### 服务端渲染

- 实现 react ssr -引入要渲染的 react 组件
- 通过 renderToString 方法将 react 组件转换为 html 字符串
- 将结果 html 字符串相应到客户端

renderToString 方法用来将 react 组件转换为 html 字符串

--parallel // 同时运行多个命令

- 服务端打包优化体积
- webpack-node-externals
- 通过 webpack 配置剔除打包文件中的 Node 模块

- 路由支持 实现思路分析
- 在 React SSR 项目中实现两端路由
- 客户端路由是用于支持用户通过点击链接的形式跳转页面
- 服务端路由是用于支持用户直接从浏览器地址中访问页面
- 客户端和服务器端工业一套路由规则

- 两端 redux

#### 服务端 store 数据填充

问题： 服务端创建的 store 是空的，组件并不能从 store 中获取到任何数据

- 解决： 服务器端在渲染组件之前获取到组件所需要的数据
- 在组件中添加 loadData 方法，此方法用于获取组件所需数据，方法被服务器端调用
- 将 loadData 方法保存在当前组件的路由信息对象中
- 服务器端在接收到请求后，根据请求地址匹配出要渲染的组件的路由信息
- 从路由信息中获取组件中的 loadData 方法并调用方法获取组件所需数据
- 当数据获取完成以后再渲染组件并将结果响应到客户端

#### react 警告消除

- 警告原因：客户端 store 在初始状态下是没有数据的，在渲染组件的时候生成的是空 ul，但是服务器端是先获取数据再进行的组件渲染，所以生成的是有子元素的 ul，hydrate 方法在对的时候发现两者不一致，所以报了个警告
- 解决思路，将服务器端获取到的数据回填给客户端，让客户端有初始数据

#### 防止 xss 攻击

- import serialize from 'serialize-javascript'
- const initialState = serialize(store.getState())
