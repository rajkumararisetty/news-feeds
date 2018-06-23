import React, {PureComponent} from 'react';
import { toastr } from 'react-redux-toastr';
import NavBar from './nav';
import Feed from './feeds';
import './styles.css';

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
        createdTime: ''
      },
      nextFeeds:false,
      feedsLoading: false
    };
    this.logout = this.logout.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onLike = this.onLike.bind(this);
    this.onScroll = this.onScroll.bind(this);
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.onScroll);
    this.props.feedsAction.getFeeds().then((nextFeeds) => {
      this.setState({nextFeeds});
    }).catch(error => {
      console.log(error);
    });
  };


  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  };

  onScroll = (event) => {
    event.preventDefault();
    const bodyContentHeight = document.body.offsetHeight;
    const dynamicScrolledHeight = window.pageYOffset;
    const scrollEnd = dynamicScrolledHeight + window.innerHeight;
    if ((bodyContentHeight >= scrollEnd) && !this.state.feedsLoading && this.state.nextFeeds) {
      this.setState({feedsLoading: true}, () => {
        const nextFeeds = this.props.feedsAction.getFeeds(this.state.nextFeeds).then(nextFeeds => {
          this.setState({
            nextFeeds,
            feedsLoading: false
          });
        }).catch(error => {
          toastr.error('Something went please reload the page');
        });
      });
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
    const { feedsList } = this.props;
    const { feed, feedsLoading } = this.state;
    return (
      <React.Fragment>
        <NavBar logout={this.logout} />
        <div className="container py-5">
          <Feed feedsLoading={feedsLoading} onLike={this.onLike} feedsList={feedsList} currentFeed={feed} onChange={this.onChange} onSubmit={this.onSubmit} />
        </div>
      </React.Fragment>
    );
  }
}

export default Dashboard;
