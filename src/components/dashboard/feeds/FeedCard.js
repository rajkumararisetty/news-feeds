import React, {Component} from 'react';
import { CommonPureComponent } from '../../hoc/CommonPureHOC';
import './styles.css';

export const FeedCard = ({eachFeed}) => (
  <div className="feed-card">
    <div className="feed-card-container">
      <div className="card-header">
        <p className="owner-email-card">From: {eachFeed.ownerEmail}</p>
        <p className="owner-time-card">{(new Date(parseInt(eachFeed.createdTime))).toString()}</p>
      </div>
      <div className="card-message">
        <p>
          Message: {eachFeed.postText}
        </p>
        <button className="like-button">
          <i className="fa fa-heart" aria-hidden="true"></i> Like
        </button>
      </div>
    </div>
  </div>
);

export default CommonPureComponent(FeedCard);
