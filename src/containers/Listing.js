import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchDataApi} from '../actions/DataFatchingAction';
import spinner from '../assets/images/spinner.gif';

class Listing extends Component{

    constructor(props) {
        super(props);
        this.state = {
            listdata: []
        }
    }

    
componentDidMount(){
    // var data = require('../json/homepagelist.json');
    //  let promise = new Promise(function(resolve, reject) {
    //     if(data.status == 200){
    //         resolve(data.response);
    //     }
    //     }).then(result => {
    //         this.setState({
    //             listdata : this.listdata = result
    //         })
    //     }).catch(error =>{
    //         console.log(error);
    //     });

    this.props.fetchDataApi('http://localhost:3000/data')


     } 


  render(){
     const data = this.props.data;
     const loading = this.props.loading;
      return(
        <div className="container">
            <div className="feed feed-list">
            {
                loading ?
                <div className="loader"><img src={spinner} /></div>:
                 data && data.map(x=>{
                  return( 
                  <div key={x.nid} className="full-item ">
                    <div className="verticalListing">
                        <Link className="full-item-image item-image" to={`/beauty${x.path}`}>
                            <img alt="default_image" src={x.image} className="ng-lazyloaded" />
                        </Link>
                        <div className="full-item-metadata">
                            <Link className="item-parent-link full-item-parent-link" to={x.field_section_url}>
                            {x.field_section}
                            </Link>
                            <div className="publish-date full-item-publish-date js-date" data-format="MMM D, YYYY" data-publish-date="homelist.created">{x.created}</div>
                            <div className="social-container homepage hdsocl">
                                <span className="sharetxt">SHARE</span>
                                <div className="content-info-social-buttons primary-social-buttons standard-social-buttons hide-socials">
                                <div className="aggregate-count content-info-aggregate-count"> <span className="aggregate-count-number " data-social-providers="facebook twitter email"></span> </div>
                                <div className="social-button-group content-info-social-button-group" data-share-location="social-btns-primary">
                                    <div className="social-button social-button-facebook content-info-social-button social-share-button" data-tracking-id="share-button-facebook" title="Share on Facebook"> <Link className="social-button-link" data-social-key="facebook" target="_blank" to="//facebook.com/v2.10/dialog/feed?display=popup&amp;link=https://cosmoalpha.intoday.in:444/beauty/how/a17751/test-story&amp;redirect_uri=https://cosmoalpha.intoday.in:444/beauty/how/a17751/test-story&amp;name=test story&amp;description=test story&amp;picture=https://akm-img-a-in.tosshub.com/sites/cosmo/sites/default/files/2019-07/download_1.jpg?SRjTjI6_mPNibOdp2GRmJo5.Ux50OYzB&amp;app_id=161178364542933"> <span className="icon social-button-icon icon-facebook"></span> </Link> </div>
                                    <div className="social-button social-button-twitter content-info-social-button social-share-button" data-tracking-id="share-button-twitter" title="Share on Twitter"> <Link className="social-button-link" data-social-key="twitter" target="_blank" to="//www.twitter.com/share?url=https://cosmoalpha.intoday.in:444/beauty/how/a17751/test-story&amp;text=test story&amp;via=CosmoIndia"> <span className="icon social-button-icon icon-twitter"></span> </Link> </div>
                                    <div className="social-button social-button-email content-info-social-button social-share-button" data-tracking-id="share-button-email" title="Email"> <Link className="social-button-link" data-social-key="email" target="_self" to="mailto:?body=https://cosmoalpha.intoday.in:444/beauty/how/a17751/test-story&amp;subject=test story"> <span className="icon social-button-icon icon-email"></span> </Link> </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="full-item-content">
                            <Link className="full-item-title item-title" to={`/beauty${x.path}`}>
                                <h2 className="hmlisttitle">{x.title}</h2>
                            </Link>
                            <div className="full-item-dek item-dek">
                                <p>{x.field_dek}</p>
                            </div>
                        </div>
                    </div>
                    </div>
                  )
              })
            }
        </div>
    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Listing);