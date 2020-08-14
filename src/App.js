
import React from 'react';
//引用路由
import { BrowserRouter, Switch, Route } from "react-router-dom";
//引入组件
import Login from './views/login/index';

/**
 * HashRouter 使用URL中的hash（#）部分去创建路由，url会带上# 后台不需要处理
 * http://localhost:3000/#/
 * 
 * BrowserRouter 不会有#  项目上线后 需要后台处理url指向
 * 
 * createMemoryHistory  不会在地址栏被操作或读取
 *    
 * Switch 路径相同只匹配一个  
 * exact  精准匹配  
 */
class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <BrowserRouter>
          <Switch>
            <Route path='/' exact component={Login} />
          </Switch>
      </BrowserRouter>
    )
  }
}

export default App;