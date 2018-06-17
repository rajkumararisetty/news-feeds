import { ADD_FEED, LIST_FEEDS, DELETE_FEED } from './ActionTypes';
import * as Feeds from '../firebase/collections/Feeds';

const addFeedAction = (id, feed) => (
  {type: ADD_FEED, feed, id}
);

export const listFeeds = (feeds) => (
  {type: LIST_FEEDS, feeds}
);

export const addFeed = (feedDetails) => (
  async (dispatch) => {
    try {
      const addResponse = await Feeds.addFeed(feedDetails);
      if (addResponse.id) {
        dispatch(addFeedAction(addResponse.id, feedDetails));
        return true;
      }
      return false
    } catch(error) {
      throw error;
    }
  }
);

export const getFeeds = (limit=10, offset=10) => (
  async (dispatch) => {
    try {
      const feedsList = await Feeds.getFeeds(limit, offset);
      if (feedsList.size > 0) {
        dispatch(listFeeds(feedsList));
        return true;
      }
      return false;
    } catch(error) {
      throw error;
    }
  }
);
