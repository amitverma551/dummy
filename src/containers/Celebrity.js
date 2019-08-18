import React, {Component,Fragment} from 'react';
import '../css/beauty.css';
import TopStory from './TopStory';
import StoryLoop from './StoryLoop';
import {connect} from 'react-redux';
import {fetchCelebrityData} from '../actions/DataFatchingAction';
import spinner from '../assets/images/spinner.gif';

class Celebrity extends Component{

    constructor(props){
        super(props)
        this.state={
            data:[]
        }
    }
    componentDidMount(){
    this.props.ArchiveApi('http://localhost:3000/celebrity');
    }
    
    render(){
    const loading = this.props.IsLoad;
    return(
    <Fragment>
       <TopStory />
        <div className="feed feed-list">
            {   loading ?
                <div className="loader"><img src={spinner} /></div>: 
                null
            }
            <StoryLoop data={this.props.data} />
        </div>
    </Fragment>   
    )
   }
}

const mapStateToProps = state => {
    return {
        data : state.CelebritylistFetchDataSuccess,
        IsLoad : state.listIsLoading
    }
  };

const mapDispatchToProps = dispatch => ({
    ArchiveApi: url => dispatch(fetchCelebrityData(url))
  });

export default connect(mapStateToProps, mapDispatchToProps)(Celebrity);