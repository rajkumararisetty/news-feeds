import React, {Component} from 'react';
import { CommonPureComponent } from '../../hoc/CommonPureHOC';
import {FeedInput} from './FeedInput';
import {FeedsList} from './FeedsList';
import './styles.css';

export const Feed = ({feedsList, onChange, currentFeed, onSubmit}) => (
  <React.Fragment>
    <FeedInput onChange={onChange} currentFeed={currentFeed} onSubmit={onSubmit} />
    <FeedsList feedsList={feedsList} />
  </React.Fragment>
);

export default CommonPureComponent(Feed);
