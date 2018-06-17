import React, {Component} from 'react';
import { NavBar } from './nav';
import Feed from './feeds';
import './styles.css';

class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      feed : {
        postText: "",
        ownerEmail: this.props.auth.user.email,
        ownerId: this.props.auth.user.userId,
        like: 0,
        id:""
      }
    };
    this.logout = this.logout.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount = () => {
    this.props.feedsAction.getFeeds();
  }

  onChange = (event) => {
    event.preventDefault();
    const newFeed = Object.assign({}, this.state.feed);
    newFeed[event.target.name] = event.target.value;
    this.setState({feed: newFeed});
  }

  onSubmit = async (event) => {
    event.preventDefault();
    const status = this.props.feedsAction.addFeed(this.state.feed);
    if (status) {
      const newFeed = Object.assign({}, this.state.feed);
      newFeed.ownerId='';
      newFeed.postText='';
      newFeed.like='';
      newFeed.id='';
      this.setState({feed: newFeed});
      return true;
    }
  }

  logout = (event) => {
    event.preventDefault();
    this.props.authAction.logout().then((status) => {
      if (status) {
        this.props.history.push('/login');
      }
    });
  }

  render() {
    const { user } = this.props.auth;
    const { feedsList } = this.props
    const { feed } = this.state;
    return (
      <React.Fragment>
        <NavBar logout={this.logout} />
        <h3 className="welcome" >Welcome {user.email}</h3>
        <Feed feedsList={feedsList} currentFeed={feed} onChange={this.onChange} onSubmit={this.onSubmit} />
      </React.Fragment>
    );
  }
}

export default Dashboard;
