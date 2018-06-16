import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as AuthAction from './actions/AuthActions'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// import db from './firebase/Initialize';
// console.log(db);
class App extends Component {
  simpleAction = (event) => {
    this.props.simpleAction();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <pre>
        {
          JSON.stringify(this.props)
        }
        </pre>
        <button onClick={this.simpleAction}>Test redux action</button>
      </div>
    );
  }
}


const   mapStateToProps = (state) => {
  return {
    auth: state.AuthReducer
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(AuthAction, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
