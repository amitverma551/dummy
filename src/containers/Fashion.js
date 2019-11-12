import React, {Fragment, Component} from 'react';
import {connect} from 'react-redux';
import {fashionDataApi} from '../actions/DataFatchingAction';
import TopStory from './TopStory';
import StoryLoop from './StoryLoop';
import {API_HOSTNAME} from '../constants';
import MoreItem from './MoreItem';

class Fashion extends Component{

    catName = 'fashion';
    componentDidMount(){
       this.props.fatchData(`${API_HOSTNAME}/api/posts/${this.catName}`) 
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

const mapStateToProps = state =>{
   return{
       data : state.FashionlistFetchDataSuccess,
       IsLoad : state.listIsLoading
   }
}

const mapDispatchToProps = dispatch =>({
    fatchData : url=>{dispatch(fashionDataApi(url))}
})

export default connect(mapStateToProps,mapDispatchToProps)(Fashion);