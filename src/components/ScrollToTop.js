import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {rootReducer} from '../actions/LoadItemActions';

class ScrollToTop extends Component {

    componentDidUpdate(prevProps) {
      if (this.props.location !== prevProps.location) {
        window.scrollTo(0, 0);
        this.props.rootReducer();
      }
    }
  
    render() {
      return this.props.children
    }
  }


  const mapDispatchToProps = dispatch => ({
    rootReducer: () => dispatch(rootReducer())
  });

export default connect(null, mapDispatchToProps)(withRouter(ScrollToTop));