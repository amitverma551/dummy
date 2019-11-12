import React, {Component} from 'react';
import TopStory from '../containers/TopStory';
import Listing from '../containers/Listing';
import SingleTop from './SingleTop';
import StoryWidthAd from '../containers/StoryWidthAd';
import StoryLoop from '../containers/StoryLoop';
import MoreItem from '../containers/MoreItem';
import {connect} from 'react-redux';
import {fetchBeautyData} from '../actions/DataFatchingAction';
import {API_HOSTNAME} from '../constants';

class Home extends Component{

    catName = 'Features';
    componentDidMount(){
     this.props.BeautyApi(`${API_HOSTNAME}/api/search?q=${this.catName}&_limit=10`);
     
    }
    render(){
    return(
        <div>
            <TopStory />
            <SingleTop />
            <div className="feed feed-list">
                <StoryLoop data={this.props.data} />
                <MoreItem catName={'beauty'}/>
            </div>
        </div>
    )
}
}
const mapStateToProps = state => {
    return {
        data : state.BeautylistFetchDataSuccess,
    }
  };

const mapDispatchToProps = dispatch => ({
    BeautyApi: url => dispatch(fetchBeautyData(url))
  });

export default connect(mapStateToProps, mapDispatchToProps)(Home);