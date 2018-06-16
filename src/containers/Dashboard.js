import React from 'react';

import Dashboard from '../components/dashboard';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as AuthAction from '../actions/AuthActions'

const mapStateToProps = (state) => ({auth: state.AuthReducer});

const mapDispatchToProps = (dispatch) => (bindActionCreators(AuthAction, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
