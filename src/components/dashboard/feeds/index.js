import React, {Component} from 'react';
import {FeedInput} from './FeedInput';
import './styles.css';

export const Feed = ({onChange, currentFeed, onSubmit}) => (
  <React.Fragment>
    <FeedInput onChange={onChange} currentFeed={currentFeed} onSubmit={onSubmit} />
  </React.Fragment>
);

export default Feed;
