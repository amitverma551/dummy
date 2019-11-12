import React, {Component,Fragment} from 'react';
import '../css/beauty.css';
import TopStory from './TopStory';
import StoryLoop from './StoryLoop';
import {connect} from 'react-redux';
import {fetchBeautyData} from '../actions/DataFatchingAction';
import {API_HOSTNAME} from '../constants';
import MoreItem from './MoreItem';


class Beauty extends Component{
    catName = 'beauty';
    componentDidMount(){
     this.props.BeautyApi(`${API_HOSTNAME}/api/posts/${this.catName}`);
     
    }
    
    render(){
        return(
            <Fragment>
                <TopStory />
                <div className="feed feed-list">
                    <StoryLoop data={this.props.data} />
                    <MoreItem catName={this.catName}/>
                </div>
            </Fragment>   
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

export default connect(mapStateToProps, mapDispatchToProps)(Beauty);