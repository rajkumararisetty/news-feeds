import React from 'react';
import Login from '../components/login';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as AuthAction from '../actions/AuthActions'

const   mapStateToProps = (state) => {
  return {
    auth: state.AuthReducer
  };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(AuthAction, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
