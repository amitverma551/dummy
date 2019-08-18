import React, {Fragment, Component} from 'react';
import {connect} from 'react-redux';
import {fashionDataApi} from '../actions/DataFatchingAction';
import TopStory from './TopStory';
import StoryLoop from './StoryLoop';
import spinner from '../assets/images/spinner.gif';

class Fashion extends Component{

    componentDidMount(){
       this.props.fatchData("http://localhost:3000/fashion") 
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