import React, {PureComponent} from 'react';
import '../styles.css';

class Dashboard extends PureComponent {

  logout = (event) => {
    event.preventDefault();
    this.props.logout().then((status) => {
      if (status) {
        this.props.history.push('/login');
      }
    });
  }

  render() {
    const { user } = this.props.auth;
    return (
      <div className="loggedin-div">
      <h3>Welcome {user.email}</h3>
          <p id="user_para">Welcome to news feeds web app. You are currently logged in.</p>
          <button onClick={this.logout}>Logout</button>
      </div>
    );
  }
}

export default Dashboard;
