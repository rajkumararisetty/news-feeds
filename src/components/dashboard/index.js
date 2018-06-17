import React, {PureComponent} from 'react';
import { toastr } from 'react-redux-toastr';
import { NavBar } from './nav';
import Feed from './feeds';
import './styles.css';
import { db } from '../../firebase/Initialize';

class Dashboard extends PureComponent {

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
    const { feedsAction } = this.props;
    const set = db.collection("posts").orderBy('createdTime', 'desc').limit(10);
    this.unSubscribe = set.onSnapshot(function(feedsList) {
        if (feedsList.size > 0) {
          toastr.info('Update', 'Updating List');
          feedsAction.listFeeds(feedsList);
        }
    });
  }

  componentWillUnmount = () => {
    this.unSubscribe();
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
      toastr.success('Success', 'Feed Added');
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
        toastr.success('Success', 'Logged Out');
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
