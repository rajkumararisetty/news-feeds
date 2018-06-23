import { ADD_FEED, LIST_FEEDS, DELETE_FEED } from './ActionTypes';
import * as Feeds from '../firebase/collections/Feeds';

const addFeedAction = (id, createdTime, feed) => (
  {type: ADD_FEED, id, createdTime, feed}
);

export const listFeeds = (feeds) => (
  {type: LIST_FEEDS, feeds}
);

export const addFeed = (feedDetails) => (
  async (dispatch) => {
    try {
      const feed = await Feeds.addFeed(feedDetails);
      if (feed.addResponse.id) {
        dispatch(addFeedAction(feed.addResponse.id, feed.createdTime, feedDetails));
        return true;
      }
      return false
    } catch(error) {
      throw error;
    }
  }
);

export const getFeeds = (next) => (
  async (dispatch) => {
    const feedsList = await Feeds.getFeeds(next);
    if ((feedsList.documents).size > 0) {
      dispatch(listFeeds(feedsList.documents));
      return feedsList.next;
    }

    return false;
  }
);

export const updateFeeds = (id, like) => (
  async (dispatch) => {
    try {
      return await Feeds.updateFeeds(id, like);
    } catch(error) {
      throw error;
    }
  }
);
