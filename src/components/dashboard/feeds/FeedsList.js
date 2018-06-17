import React, {Component} from 'react';
import { CommonPureComponent } from '../../hoc/CommonPureHOC';
import './styles.css';
import FeedCard from './FeedCard';

export const FeedsList = ({feedsList}) => (
  <div className="list-div">
    {feedsList.map((eachFeed) => (
      <FeedCard key={eachFeed.id} eachFeed={eachFeed} />
    ))}
  </div>
);

export default CommonPureComponent(FeedsList);
