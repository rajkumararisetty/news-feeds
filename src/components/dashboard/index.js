import React, {PureComponent} from 'react';
import { toastr } from 'react-redux-toastr';
import NavBar from './nav';
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
        like: [],
        id:"",
        nextFeeds:''
      }
    };
    this.logout = this.logout.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onLike = this.onLike.bind(this);
    this.onScroll = this.onScroll.bind(this);
  }

  componentDidMount = () => {
    this.props.feedsAction.getInitialFeeds().then((nextFeeds) => {
      this.setState({nextFeeds});
    }).catch(error => {
      console.log(error);
    });
  };

  componentWillUnmount = () => {
    this.unSubscribe();
  };

  onScroll = async () => {
    try {
      const nextFeeds = await this.props.feedsAction.getNextFeeds(this.state.next)
      this.setState({
        nextFeeds
      });
    } catch(error) {
      console.log('error');
    }

  };

  onChange = (event) => {
    event.preventDefault();
    const newFeed = Object.assign({}, this.state.feed);
    newFeed[event.target.name] = event.target.value;
    this.setState({feed: newFeed});
  };

  onLike = (event, feed) => {
    event.preventDefault();
    if ((feed.like).indexOf(this.props.auth.user.email) === -1) {
      const like = [this.props.auth.user.email, ...feed.like];
      this.props.feedsAction.updateFeeds(feed.id, like).catch(error => {
        toastr.error('Something went wrong please try again');
      });
    } else {
      toastr.warning('Hey', 'You already liked this');
    }
  };

  onSubmit = async (event) => {
    event.preventDefault();
    try {
      const status = await this.props.feedsAction.addFeed(this.state.feed);
      if (status) {
        toastr.success('Success', 'Feed Added');
        const newFeed = Object.assign({}, this.state.feed);
        newFeed.postText = "";
        newFeed.ownerEmail = this.props.auth.user.email;
        newFeed.ownerId = this.props.auth.user.userId;
        newFeed.like = [];
        newFeed.id = "";
        this.setState({feed: newFeed});
        return true;
      }
    } catch(error) {
      toastr.error('Something went wrong please try again');
    }
  };

  logout = (event) => {
    event.preventDefault();
    this.props.authAction.logout().then((status) => {
      if (status) {
        this.props.history.push('/login');
      }
    });
  };

  render() {
    const { user } = this.props.auth;
    const { feedsList } = this.props
    const { feed } = this.state;
    return (
      <React.Fragment>
        <NavBar logout={this.logout} />
        <div className="container py-5">
          <Feed onLike={this.onLike} feedsList={feedsList} currentFeed={feed} onChange={this.onChange} onSubmit={this.onSubmit} />
        </div>
      </React.Fragment>
    );
  }
}

export default Dashboard;
