import React, {Component,Fragment} from 'react';
import '../css/beauty.css';
import TopStory from './TopStory';
import StoryLoop from './StoryLoop';
import {connect} from 'react-redux';
import {RelationshipsDataApi} from '../actions/DataFatchingAction';
import spinner from '../assets/images/spinner.gif';

class Relationships extends Component{

    constructor(props){
        super(props)
        this.state={
            data:[]
        }
    }

    componentDidMount(){
     this.props.RelationshipsApi('http://localhost:3000/relationships');
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
        data : state.RelationshipslistFetchDataSuccess,
        IsLoad : state.listIsLoading
    }
  };

const mapDispatchToProps = dispatch => ({
    RelationshipsApi: url => dispatch(RelationshipsDataApi(url))
  });

export default connect(mapStateToProps, mapDispatchToProps)(Relationships);