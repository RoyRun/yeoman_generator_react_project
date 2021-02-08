import React, { Component } from 'react'
import Nav from './Nav';

class Frame extends Component {
  render(){
    return (
      <div>
        <section>
          {this.props.children}
        </section>
      </div>
    )
  }
}
export default Frame;