import React from 'react';
import { CommonPureComponent } from '../../hoc/CommonPureHOC';
import EmojiTextarea from 'react-emoji-textarea';
import './styles.css';

export const FeedInput = ({onChange, currentFeed, onSubmit}) => (
  <React.Fragment>
    <div className="row">
      <div className="col">
        <div className="form-group">
          <textarea onChange={onChange} placeholder="Compose your post here..." className="form-control feed-intput-textarea" rows="3" />
          <button onClick={onSubmit} className="btn float-right">post</button>
        </div>
      </div>
    </div>
  </React.Fragment>
);

export default CommonPureComponent(FeedInput);
