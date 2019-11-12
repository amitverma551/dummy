import React, {Fragment, Component} from 'react';
import {connect} from 'react-redux';
import {lifeDataApi} from '../actions/DataFatchingAction';
import TopStory from './TopStory';
import StoryLoop from './StoryLoop';
import spinner from '../assets/images/spinner.gif';
import {API_HOSTNAME} from '../constants';
import MoreItem from './MoreItem';

class Life extends Component{
    catName = 'life';
    componentDidMount(){
       this.props.fatchData(`${API_HOSTNAME}/api/posts/${this.catName}`) 
    }
    
    render(){
        const loading = this.props.IsLoad;
        return(
            <Fragment>
               <TopStory />
                <div className="feed feed-list">
                    {/* {   loading ?
                        <div className="loader"><img src={spinner} /></div>: 
                        null
                    } */}
                    <StoryLoop data={this.props.data} />
                    <MoreItem catName={this.catName}/>
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = state =>{
   return{
       data : state.LifelistFetchDataSuccess,
       IsLoad : state.listIsLoading
   }
}

const mapDispatchToProps = dispatch =>({
    fatchData : url=>{dispatch(lifeDataApi(url))}
})

export default connect(mapStateToProps,mapDispatchToProps)(Life);