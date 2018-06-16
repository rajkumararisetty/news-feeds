import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {auth} from '../firebase/Initialize'
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isAllowed:false
    };
  }

  componentDidMount = () => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.props.setCurrentUser({email: user.email});
        this.setState({isAllowed: true});
        return true;
      }
      this.props.logOutSuccess();
      this.props.history.push('/login')
   });
  }

  render() {
    return (
      <div className="App">
        {this.state.isAllowed && this.props.children}
      </div>
    );
  }
}

export default withRouter(App);
