import React, { Fragment,Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchDataApi} from '../actions/DataFatchingAction';

class TopStory extends Component{

    constructor(props) {
        super(props);
        this.state = {
            listdata: []
        }
    }

    componentDidMount(){
     this.props.fetchDataApi('http://localhost:3000/topfile');
    }

    render(){
        const data = this.props.data[0];
        return(
        <Fragment>
        <div className="top-pathing" data-tracking-id="recirc-top-tout">
        <div className="top-pathing-inner">
            {
                data && data.map((x, index)=>{
                    var num = index + 1;
                    return(
                        <div key={x.nid} className="simple-item top-pathing-item show-numbers">
                            <Link className="simple-item-image item-image" to={x.path}>
                                <img alt="default_image" src={x.image} className="ng-lazyloaded" />
                                <div className="top-pathing-label">
                                <p>Lashlift is Currently Ruling All the Beauty Pages on Instagram, Here's Everything You Need to Know About it </p>
                                </div>
                            </Link>
                            <div className="simple-item-index">
                                {num}
                            </div>
                            <div className="top-pathing-item-wrap">
                                <Link className="simple-item-title item-title" to={x.path}>
                                <p>{x.title}</p>
                                </Link>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </div>
        <div className="leaderboard-ad " style={{'display': 'block'}}>
        <div className="ad-container" id="gpt-leaderboard-ad">
          <img src="https://secure-ds.serving-sys.com/resources/PROD/html5/27713/20190808/1074850391/47444052137753348/iframe/728x90.jpg" />
        </div>
      </div>
      </Fragment>
       )
    }
}

const mapStateToProps = state => {
    return {
        data : state.listFetchDataSuccess,
        loading : state.listIsLoading
    }
  };

const mapDispatchToProps = dispatch => ({
    fetchDataApi: url => dispatch(fetchDataApi(url))
  });

export default connect(mapStateToProps, mapDispatchToProps)(TopStory);