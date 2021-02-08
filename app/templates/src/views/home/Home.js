import React, { Component } from 'react'
import styles from './Home.less';
import { renderRoutes } from 'react-router-config';
import { Button } from 'antd';
class Home extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount() {
     function fn() {
       var arrList = [];
       arrList[100000] = 'lg is coder';
     }
     fn();
  }
  
  render(){
    let { route } = this.props;
    return (
      <div className={styles.home}>
        <Button type="primary">button</Button>
        {renderRoutes(route.routes)}
      </div>
    )
  }
}
export default Home;