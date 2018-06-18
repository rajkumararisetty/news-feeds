import React, {Component} from 'react';
import {toastr} from 'react-redux-toastr';
import ReactLoading from 'react-loading';
import {auth} from '../../firebase/Initialize';
import '../styles.css';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loginCreds: {
        email: '',
        password: '',
        loading: false
      },
      isAuthenticated: true
    }
  }

  componentDidMount = () => {
    this.unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          loading: false
        }, () => {
          this.props.history.push('/');
        });
        return true;
      }
      this.setState({isAuthenticated: false});
   });
  };

  componentWillUnmount = () => {
    this.unsubscribe()
  }

  login = async (event) => {
    event.preventDefault();
    this.setState({loading: true});
    const { email, password } = this.state.loginCreds;
    try {
      const status = await this.props.login(email, password);
      if (!status) {
        toastr.error('Something went wrong please try again');
        return true;
      }
    } catch(error) {
      this.setState({loading: false}, () => {
        toastr.error(error.message);
      });
      return true;
    }
  }

  onChange = (event) => {
    event.preventDefault();
    const creds = Object.assign({}, this.state.loginCreds);
    creds[event.target.name] = event.target.value;
    this.setState({loginCreds: creds})
  }

  render() {
    const {loginCreds, isAuthenticated, loading} = this.state;
    return (
      <div className="login-app">
      {!isAuthenticated &&
        <div id="login_div" className="main-div">
            <h3 className="login-head">Login</h3>
            <input value={loginCreds.email} name="email" onChange={this.onChange} type="email" placeholder="Email..." />
            <input value={loginCreds.password} name="password" onChange={this.onChange} type="password" placeholder="Password..." />
            {loading ? <ReactLoading type="spin" color="#444"  height={30} width={30} />
            : <button onClick={this.login} >Login to Account</button> }
        </div>
      }
      </div>
    );
  }
}

export default Login;
