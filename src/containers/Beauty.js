import React, {Component,Fragment} from 'react';
import '../css/beauty.css';
import TopStory from './TopStory';
import StoryLoop from './StoryLoop';
import {connect} from 'react-redux';
import {fetchBeautyData} from '../actions/DataFatchingAction';
import spinner from '../assets/images/spinner.gif';
import {API_HOSTNAME} from '../constants';
import MoreItem from './MoreItem';
import {fetchMoreDataApi} from '../actions/LoadItemActions';

class Beauty extends Component{

    constructor(props){
        super(props)
        this.state={
            item : 0,
            moreData:[],
            loadItem : false
        }
    }
    inc = 0;
  loadItem = ()=>{
     this.setState({
        item : this.state.item +=1,
        moreData: this.state.moreData.concat(this.props.moredt[this.inc])
     },()=>{
        this.props.fetchMoreDataApi(`http://localhost:9001/api/posts?_page=${this.state.item}`);
     }) 
     this.inc++;

  }

    componentDidMount(){
     this.props.BeautyApi(`${API_HOSTNAME}/api/posts/beauty`);
     
    }
    
    render(){
        console.log(this.state.moreData);
        return(
            <Fragment>
                <TopStory />
                <div className="feed feed-list">
                    <StoryLoop data={this.props.data} />
                </div>

                {
                    this.props.moreData && <MoreItem moreData={this.state.moreData}/>
                }

                <div onClick={this.loadItem} className="load-more stuff" id="load-more">
                    <div className="load-more-label" style={{
                    "width": "307px",
                    "padding": "10px",
                    "color": "#000",
                    "top": "20px"}}>Load more stories</div>
                </div>
            </Fragment>   
        )
   }
}

const mapStateToProps = state => {
    return {
        data : state.BeautylistFetchDataSuccess,
        moredt : state.fetchMoreDataApi,
    }
  };

const mapDispatchToProps = dispatch => ({
    BeautyApi: url => dispatch(fetchBeautyData(url)),
    fetchMoreDataApi: url => dispatch(fetchMoreDataApi(url))
  });

export default connect(mapStateToProps, mapDispatchToProps)(Beauty);