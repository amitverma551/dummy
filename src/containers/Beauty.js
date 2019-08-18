import React, {Component,Fragment} from 'react';
import '../css/beauty.css';
import TopStory from './TopStory';
import StoryLoop from './StoryLoop';
import {connect} from 'react-redux';
import {fetchBeautyData} from '../actions/DataFatchingAction';
import spinner from '../assets/images/spinner.gif';

class Beauty extends Component{

    constructor(props){
        super(props)
        this.state={
            data:[]
        }
    }

    componentDidMount(){
     this.props.BeautyApi('http://localhost:3000/beauty');
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
        data : state.BeautylistFetchDataSuccess,
        IsLoad : state.listIsLoading
    }
  };

const mapDispatchToProps = dispatch => ({
    BeautyApi: url => dispatch(fetchBeautyData(url))
  });

export default connect(mapStateToProps, mapDispatchToProps)(Beauty);