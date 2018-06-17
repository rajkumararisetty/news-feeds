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

  authenticateAndRedirect  = () => {
    this.unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        if (user.email !== this.props.auth.user.email) {
          this.props.setCurrentUser(user);
        }
        this.setState({isAllowed: true});
        return true;
      }
      this.props.logOutAction();
      this.props.history.push('/login')
   });
  }

  componentWillReceiveProps = (newProps) => {
    if (newProps.location.pathname !== '/login') {
      this.authenticateAndRedirect();
    }
  }

  componentDidMount = () => {
    this.authenticateAndRedirect();
  }

  componentWillUnmount = () => {
    this.unsubscribe()
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
