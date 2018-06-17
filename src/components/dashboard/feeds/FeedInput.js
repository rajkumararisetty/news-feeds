import React, {Component} from 'react';
import './styles.css';

export const FeedInput = ({onChange, currentFeed, onSubmit}) => (
  <React.Fragment>
    <textarea name="postText" value={currentFeed.postText} onChange={onChange} className="feed-input" placeholder="Type here...." cols="30" rows="5" />
    <button onClick={onSubmit} className="post-button">post</button>
  </React.Fragment>
);

export default FeedInput;
