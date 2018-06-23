import React from 'react';
import { CommonPureComponent } from '../../hoc/CommonPureHOC';
import ReactLoading from 'react-loading';
import './styles.css';
import FeedCard from './FeedCard';

export const FeedsList = ({feedsList, onLike, feedsLoading}) => (
    <React.Fragment>
          {feedsList.map((eachFeed) => (
            <FeedCard key={eachFeed.id} eachFeed={eachFeed} onLike={onLike} />
          ))}
      {feedsLoading && <ReactLoading className="mx-auto" type="spin" color="#444"  height={30} width={30} />}
    </React.Fragment>
);

export default CommonPureComponent(FeedsList);
