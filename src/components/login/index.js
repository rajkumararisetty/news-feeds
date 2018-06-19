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
      <React.Fragment >
      {!isAuthenticated &&
        <div className="container py-5">
          <div className="row">
              <div className="col-md-12">
                  <div className="row">
                      <div className="col-md-6 mx-auto">
                          <div className="card rounded-0">
                              <div className="card-header">
                                  <h3 className="mb-0">Login</h3>
                              </div>
                              <div className="card-body">
                                    <div className="form-group">
                                        <label htmlFor="uname1">Email</label>
                                        <input value={loginCreds.email} onChange={this.onChange}  name="email" type="email" className="form-control form-control-lg rounded-0"/>
                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type="password" value={loginCreds.password} onChange={this.onChange} name="password" className="form-control form-control-lg rounded-0"  />
                                    </div>
                                    {loading ? <ReactLoading className="float-right" type="spin" color="#444"  height={30} width={30} /> :
                                    <button onClick={this.login} className="btn btn-success btn-lg float-right">Login</button> }
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
    </div>
      }
      </React.Fragment>
    );
  }
}

export default Login;
