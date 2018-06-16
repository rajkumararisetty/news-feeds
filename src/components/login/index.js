import React, {PureComponent} from 'react';
import {auth} from '../../firebase/Initialize'
import '../styles.css';

class Login extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      loginCreds: {
        email: '',
        password: ''
      },
      isAuthenticated: true
    }
  }

  UNSAFE_componentWillMount = () => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.props.history.push('/feeds');
        return true;
      }
      this.setState({isAuthenticated: false});
   });
  };

  login = async (event) => {
    event.preventDefault();
    const { email, password } = this.state.loginCreds;
    const status = await this.props.login(email, password);
    if (status) {
      this.props.history.push('/feeds');
    }
  }

  onChange = (event) => {
    event.preventDefault();
    const creds = Object.assign({}, this.state.loginCreds);
    creds[event.target.name] = event.target.value;
    this.setState({loginCreds: creds})
  }

  render() {
    const {loginCreds, isAuthenticated} = this.state;
    return (
      <div className="login-app">
      {!isAuthenticated &&
        <div id="login_div" className="main-div">
            <h3 className="login-head">Login</h3>
            <input value={loginCreds.email} name="email" onChange={this.onChange} type="email" placeholder="Email..." />
            <input value={loginCreds.password} name="password" onChange={this.onChange} type="password" placeholder="Password..." />
            <button onClick={this.login} >Login to Account</button>
        </div>
      }
      </div>
    );
  }
}

export default Login;
