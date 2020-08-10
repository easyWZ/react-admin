
import React from 'react';
// import logo from './logo.svg';
import './App.scss';
//引用路由
import { BrowserRouter, Switch, Route } from "react-router-dom";
//引入组件
// import Home from './views/Home';
// import About from './views/About';
// import News from './views/News';
import Login from './views/login/index';

/**
 * HashRouter 使用URL中的hash（#）部分去创建路由，url会带上# 后台不需要处理
 * http://localhost:3000/#/
 * 
 * BrowserRouter 不会有#  项目上线后 需要后台处理url指向
 * 
 * createMemoryHistory  不会在地址栏被操作或读取
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
      // <div className="test">
      //   <ul>
      //     <li>asdf</li>
      //     <li>asdf</li>
      //     <li>asdf</li>
      //     <li>asdf</li>
      //   </ul>
      //   {/* // Switch 路径相同只匹配一个
      // // exact 精准匹配  */}
      //   <BrowserRouter>
      //     <div className="container">
      //       <Switch>
      //         <Route path='/' exact component={Home} />
      //         <Route path='/about' component={About} />
      //         <Route path='/news' component={News} />
      //       </Switch>
      //     </div>
      //   </BrowserRouter>
      // </div>
    )
  }
}

export default App;