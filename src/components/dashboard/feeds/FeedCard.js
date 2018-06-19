import React from 'react';
import { CommonPureComponent } from '../../hoc/CommonPureHOC';
import { postTimeCalculator } from '../../../utils/CardHelper';
import './styles.css';

export const FeedCard = ({eachFeed, onLike}) => (
  <React.Fragment>
    <div className="card">
      <div className="card-body">
        <div className="row">
           <div className="col-sm-1">
             <img className="feedcard-post-img" src="https://lh3.googleusercontent.com/-l9Go6JtoEGo/AAAAAAAAAAI/AAAAAAAAAAA/AB6qoq2PnyXj2bv14q8TiSjVDeGzTsKvSg/s96-c-mo/photo.jpg" alt="" aria-label="DigitalOcean" role="img" />
           </div>
           <div className="col-sm-11">
            <h5 className="feedcard-post-owner-time">
              <span className="feedcard-post-owner-time-snap">
                {eachFeed.ownerEmail}
              </span>
              <p>{postTimeCalculator(eachFeed.createdTime)}</p>
            </h5>
           </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <p className="card-text">{eachFeed.postText}.</p>
          </div>
        </div>
        <hr />
        <footer>
          <a onClick={(event) => onLike(event, eachFeed)} className="btn btn-info btn-sm text-white">
            <i className="fa fa-thumbs-o-up" aria-hidden="true" /> Like &nbsp;
            {(eachFeed.like).length > 0 && <span className="badge badge-light">{(eachFeed.like).length}</span>}
          </a>
        </footer>
      </div>
    </div>
    <br />
  </React.Fragment>
);

export default CommonPureComponent(FeedCard);
