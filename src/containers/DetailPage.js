import React, {Component} from 'react';
import {connect} from 'react-redux';

class DetailPage extends Component{
   render(){
       return(
           <h1>Detail Page {this.props.getPostId}</h1>
       )
   }
}

const mapStateToProps = state =>{
   return{
      getPostId : state.getPostId
   }
}

export default connect(mapStateToProps)(DetailPage);