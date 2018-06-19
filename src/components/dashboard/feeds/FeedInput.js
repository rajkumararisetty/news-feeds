import React from 'react';
import { CommonPureComponent } from '../../hoc/CommonPureHOC';
import EmojiTextarea from 'react-emoji-textarea';
import './styles.css';

export const FeedInput = ({onChange, currentFeed, onSubmit}) => (
  <React.Fragment>
    <textarea onChange={onChange} className="form-control" rows="3" />
  <br />
  </React.Fragment>
);

export default CommonPureComponent(FeedInput);
