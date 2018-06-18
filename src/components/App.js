import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import {auth} from '../firebase/Initialize'

class App extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      isAllowed:false
    };
  }

  componentDidMount = () => {
    this.unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        if (user.email !== this.props.auth.user.email) {
          this.props.setCurrentUser(user);
        }
        this.setState({isAllowed: true}, () => {
          if ('/' !== this.props.location.pathname) {
            this.props.history.push('/');
          }
        });
        return true;
      }
      this.props.logOutAction();
      this.props.history.push('/login')
   });
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
