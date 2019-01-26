import React, { Component } from 'react'

class Parent extends Component {
    constructor(props) {
        super(props);
        this.state = { name: 'Flavio' , age: '35', current: 'walking' }
        this.handleWalking = this.handleWalking.bind(this);
    }
    handleWalking(e) { 
      const { current } = this.state;
      this.setState({
        [current]: e.target.value
      });
    }
  
  render() {
      console.log(this.state);
    return (
      <div>
       <p>Test</p>
       {/* These are now props to Parent component. */}
       {/* Accessible.  */}
       {/* We passed the prop as an invoked function */}
       {/* you pass a function which you then
           execute in {this.props.children()}.  */}
       { this.props.someprop1(this.state.name)}
       { this.props.someprop2(this.state.age)}
      { this.props.someprop3(this.state.current, this.handleWalking) }
      </div>
    )
  }
}
export default Parent;