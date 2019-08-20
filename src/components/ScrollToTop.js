import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

class ScrollToTop extends Component {

    componentDidUpdate(prevProps) {
      const path = window.location.pathname;
      const arr = path.split("/");
      const postId = path.match(/\a\d+\b/g);
      const newArr = arr.filter(x=> x != "" ? x : null);
      const catName = newArr.length > 0 ? newArr[0] : null;

      if(Object.prototype.toString.call(postId) == "[object Array]"){
        const idString = postId.join();
        if(idString.charAt(0) == "a"){
          this.props.setId(idString.substr(1))
        } 
      }

      if (this.props.location !== prevProps.location) {
        window.scrollTo(0, 0)
      }
    }
  
    render() {
      return this.props.children
    }
  }

  const mapDispatchToProps = dispatch =>({
       setId : (Id) => {
         dispatch({
          type : "GET_POST_ID",
          postId : Id
         }) 
       }
      })
  
  export default connect(null, mapDispatchToProps)(withRouter(ScrollToTop));