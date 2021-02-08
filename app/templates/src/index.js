import ReactDOM from 'react-dom'
import React from 'react';
import App from './app';
import './styles.less';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import './styles.less';

const render = Component => {
    ReactDOM.render(<ConfigProvider locale={zhCN}>
        <Component/>
    </ConfigProvider>, document.getElementById("root"))
}

render(App);

if (module.hot) {
    module.hot.accept('./app.js', function() {
      render(App);
    })
  }

