import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Dashboard from '../components/dashboard';
import * as AuthAction from '../actions/AuthActions'
import * as FireStoreActions from '../actions/FireStoreActions'

const mapStateToProps = (state) => ({
  auth: state.AuthReducer,
  feedsList: state.FeedReducer
});

const mapDispatchToProps = (dispatch) => ({
      authAction: bindActionCreators(AuthAction, dispatch),
      feedsAction: bindActionCreators(FireStoreActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
