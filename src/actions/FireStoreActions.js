import { ADD_FEED, LIST_FEEDS, DELETE_FEED } from './ActionTypes';
import * as Feeds from '../firebase/collections/Feeds';

const addFeedAction = (id, feed) => (
  {type: ADD_FEED, feed, id}
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
      return error;
    }
  }
)
