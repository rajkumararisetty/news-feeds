import React from 'react';
import { CommonPureComponent } from '../../hoc/CommonPureHOC';
import './styles.css';

export const FeedCard = ({eachFeed}) => (
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
              <p>2 mins ago</p>
            </h5>
           </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <p className="card-text">{eachFeed.postText}.</p>
          </div>
        </div>
        <footer><a href="#" className="btn btn-primary">Like</a></footer>
      </div>
    </div>
    <br />
  </React.Fragment>
);

export default CommonPureComponent(FeedCard);
