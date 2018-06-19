import React from 'react';
import { CommonPureComponent } from '../../hoc/CommonPureHOC';
import './styles.css';
import FeedCard from './FeedCard';

export const FeedsList = ({feedsList, onLike}) => (
    <React.Fragment>
          {feedsList.map((eachFeed) => (
            <FeedCard key={eachFeed.id} eachFeed={eachFeed} onLike={onLike} />
          ))}
    </React.Fragment>
);

export default CommonPureComponent(FeedsList);
