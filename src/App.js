import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
       <h1>
         {this.props.count} 
       </h1>
       <button onClick = {() => this.props.dispatch({type: 'ADD'})} >+</button>
       <button onClick = {() => this.props.dispatch({type: 'SUBTRACT'})} >-</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state
  }
}

export default connect(mapStateToProps, null)(App);
