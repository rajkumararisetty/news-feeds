import initialState from './InitialState';
import { ADD_FEED, LIST_FEEDS, DELETE_FEED } from '../actions/ActionTypes';

export const FeedReducer = (state = initialState.feeds, action) => {
 switch (action.type) {
  case 'ADD_FEED':
      return [Object.assign({}, action.feed, {id: action.id}), ...state];
  default:
   return state
 }
}
