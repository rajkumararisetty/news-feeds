import React from 'react';
import { CommonPureComponent } from '../../hoc/CommonPureHOC';
import {FeedInput} from './FeedInput';
import {FeedsList} from './FeedsList';
import './styles.css';

export const Feed = ({feedsList, onChange, currentFeed, onSubmit}) => (
  <React.Fragment>
    <div className="row">
      <div className="col-sm-3"> </div>
        <div className="col-sm-6">
          <FeedInput onChange={onChange} currentFeed={currentFeed} onSubmit={onSubmit} />
          <br />
          <FeedsList feedsList={feedsList} />
        </div>
      <div className="col-sm-3"> </div>
    </div>
  </React.Fragment>
);

export default CommonPureComponent(Feed);
