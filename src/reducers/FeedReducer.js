import initialState from './InitialState';
import { ADD_FEED, LIST_FEEDS, DELETE_FEED } from '../actions/ActionTypes';

export const FeedReducer = (state = initialState.feeds, action) => {
 switch (action.type) {
   case 'ADD_FEED':
      return [Object.assign({}, action.feed, {id: action.id, createdTime: action.createdTime}), ...state];
  case 'LIST_FEEDS':
      let list = [...state];
      (action.feeds).forEach((feed) => {
        list = [...list, Object.assign({}, feed.data(), {id: feed.id})];
      });
      return list;
  default:
   return state
 }
};
