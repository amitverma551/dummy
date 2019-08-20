import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

class ScrollToTop extends Component {

    componentDidUpdate(prevProps) {
      var path = window.location.pathname;
      var arr = path.split("/");
      var postId = path.match(/\a\d+\b/g);
      var newArr = arr.filter(x=> x != "" ? x : null);
      var catName = newArr.length > 0 ? newArr[0] : null;
      console.log(postId)

      if (this.props.location !== prevProps.location) {
        window.scrollTo(0, 0)
      }
    }
  
    render() {
      return this.props.children
    }
  }
  
  export default withRouter(ScrollToTop)