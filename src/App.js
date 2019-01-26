import React, { Component } from 'react';
import Parent from './Parent';
import Children1 from './Children1';
import Children2 from './Children2';
import Children3 from './Children3';
import logo from './logo.svg';
import './App.css';
class App extends Component {
  render() {
    return (
      <div>
          <Parent 
          // Passed in some props 
          // someprop1
          //someprop2
          /**
           * These props must be called as functions taking in
           * the input in this case, (this.state) 
           * Here, we passed a function which i then execute
           * in this.props.children()
           * A common pattern used to share state between
           * components is to use render() prop
           * To be able to share state, you need to use a 
           * render prop component
           */
            someprop1={name => <Children1 name={name} /> }
            someprop2={age => <Children2 age={age} /> }
            someprop3={(current, handle) => <Children3 current={current} handle={handle} /> }
          />
      </div>
    );
  }
}

export default App;
