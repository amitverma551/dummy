import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchDataApi} from '../actions/DataFatchingAction';
import {fetchMoreDataApi} from '../actions/LoadItemActions';
import spinner from '../assets/images/spinner.gif';
import MoreItem from './MoreItem';

class Listing extends Component{

    constructor(props) {
        super(props);
        this.state = {
            listdata: [],
            loadItem : false,
            moreItems: 0,
            allNewItems : []
        }
    }
moreItems = ()=>{
   this.setState({
      moreItems : this.state.moreItems += 1
   })
this.props.fetchMoreDataApi(`http://localhost:3000/data${this.state.moreItems}`)
}
 loadMore =()=>{
    this.setState({
       loadItem : this.state.loadItem = true
    })
 }
componentDidMount(){
    this.props.fetchDataApi('http://localhost:3000/data');
} 

  render(){
     const data = this.props.data[1];
     const loading = this.props.loading;
      return(
            <Fragment>
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

<div className="full-item ">
   
   <div className="mustread ">
      <div className="mhead">
         <h2>Must Read</h2>
      </div>
      <ul>
         
         <li>
            <div className="imgarea">
               <Link className="mustreadanchortag" to="/life/features/a17786/four-brave-women-speak-about-freethenipple-movement">
                  <div className="content-lede-image-wrap">
                     
                     <img alt="default_image" src="https://akm-img-a-in.tosshub.com/sites/cosmo/sites/default/files/2019-07/Free-The-Nipple.gif?4xH3c7zf0SbK3B1ZJSBTzgAEuKaXXoIr" className="ng-lazyloaded" />
                  </div>
               </Link>
            </div>
            <Link to="/life/features/a17786/four-brave-women-speak-about-freethenipple-movement">
               
               <p>Four Brave Women Speak About the #FreeTheNipple Movement</p>
            </Link>
         </li>
         <li>
            <div className="imgarea">
               <Link className="mustreadanchortag" to="/life/interviews/a17914/curious-case-dutee-chand">
                  <div className="content-lede-image-wrap">
                     
                     <img alt="default_image" src="https://akm-img-a-in.tosshub.com/sites/cosmo/sites/default/files/2019-07/Screen%20Shot%202019-07-17%20at%203.05.15%20pm.png?_JYOfS_RC1jpBNK2Xa518cEIOhhnVOVZ" className="ng-lazyloaded" />
                  </div>
               </Link>
            </div>
            <Link to="/life/interviews/a17914/curious-case-dutee-chand">
               
               <p>The Curious Case of Dutee Chand</p>
            </Link>
         </li>
         <li>
            <div className="imgarea">
               <Link className="mustreadanchortag" to="/beauty/features/g18037/curly-wavy-or-straight-these-are-10-monsoon-haircare-tips-every-girl-needs">
                  <div className="content-lede-image-wrap">
                     
                     <img alt="default_image" src="https://akm-img-a-in.tosshub.com/sites/cosmo/sites/default/files/2019-07/Screen%20Shot%202019-07-22%20at%205.39.38%20pm.png?LiGU.a1exXQSDnhfCNPvGrkjSsWOSPxh" className="ng-lazyloaded" />
                  </div>
               </Link>
            </div>
            <Link to="/beauty/features/g18037/curly-wavy-or-straight-these-are-10-monsoon-haircare-tips-every-girl-needs">
               
               <p>Curly, Wavy or Straight: These Are the 10 Monsoon Haircare...</p>
            </Link>
         </li>
         <li>
            <div className="imgarea">
               <Link className="mustreadanchortag" to="/beauty/features/a17964/7-women-tell-us-exactly-how-wear-bold-lip">
                  <div className="content-lede-image-wrap">
                     
                     <img alt="default_image" src="https://akm-img-a-in.tosshub.com/sites/cosmo/sites/default/files/2019-07/Screen%20Shot%202019-07-19%20at%202.51.18%20pm.png?_2b.LkirzisJzP9ryivXkVNNnoh8WrJ." className="ng-lazyloaded" />
                  </div>
               </Link>
            </div>
            <Link to="/beauty/features/a17964/7-women-tell-us-exactly-how-wear-bold-lip">
               
               <p>7 Women Tell Us Exactly How to Wear a Bold...</p>
            </Link>
         </li>
         <li>
            <div className="imgarea">
               <Link className="mustreadanchortag" to="/beauty/features/a17913/5-foundations-were-loving-atm">
                  <div className="content-lede-image-wrap">
                     
                     <img alt="default_image" src="https://akm-img-a-in.tosshub.com/sites/cosmo/sites/default/files/2019-07/ResponsibleAnyCalf-small.gif?kTY6ljrMaDjZ8z8UUbYMwcb0efjvuK5a" className="ng-lazyloaded" />
                  </div>
               </Link>
            </div>
            <Link to="/beauty/features/a17913/5-foundations-were-loving-atm">
               
               <p>5 Foundations We’re Loving ATM</p>
            </Link>
         </li>
      </ul>
   </div>
   <div className="verticalListing">
      <Link className="full-item-image item-image" to="/celebrity/features/a18241/miley-cyrus-says-change-inevitable-after-confirming-split-husband-liam">
         
         <img alt="default_image" src="https://akm-img-a-in.tosshub.com/sites/cosmo/sites/default/files/2019-08/Screen%20Shot%202019-08-12%20at%201.36.22%20pm.png?_E133qTZOhrQoIIr6zhwul1E2PudnBbe" className="ng-lazyloaded" />
      </Link>
      <div className="full-item-metadata">
         <Link className="item-parent-link full-item-parent-link" to="/celebrity">
         Celebrity
         </Link>
         <div className="publish-date full-item-publish-date js-date" data-format="MMM D, YYYY" data-publish-date="homelist.created">Aug 12, 2019</div>
         <div className="homepage">
            <div className="social-container homepage hdsocl">
               <span className="sharetxt">SHARE</span>
               <div className="content-info-social-buttons primary-social-buttons standard-social-buttons hide-socials">
                  <div className="aggregate-count content-info-aggregate-count"> <span className="aggregate-count-number " data-social-providers="facebook twitter email"></span> </div>
                  <div className="social-button-group content-info-social-button-group" data-share-location="social-btns-primary">
                     <div className="social-button social-button-facebook content-info-social-button social-share-button" data-tracking-id="share-button-facebook" title="Share on Facebook"> <Link className="social-button-link" data-social-key="facebook" target="_blank" to="//facebook.com/v2.10/dialog/feed?display=popup&amp;link=https://www.cosmopolitan.in/celebrity/features/a18241/miley-cyrus-says-change-inevitable-after-confirming-split-husband-liam&amp;redirect_uri=https://www.cosmopolitan.in/celebrity/features/a18241/miley-cyrus-says-change-inevitable-after-confirming-split-husband-liam&amp;name=Miley Cyrus Says Change Is Inevitable After Confirming Split from Husband Liam Hemsworth&amp;description=Miley Cyrus Says Change Is Inevitable After Confirming Split from Husband Liam Hemsworth&amp;picture=https://akm-img-a-in.tosshub.com/sites/cosmo/sites/default/files/2019-08/Screen%20Shot%202019-08-12%20at%201.36.22%20pm.png?_E133qTZOhrQoIIr6zhwul1E2PudnBbe&amp;app_id=161178364542933"> <span className="icon social-button-icon icon-facebook"></span> </Link> </div>
                     <div className="social-button social-button-twitter content-info-social-button social-share-button" data-tracking-id="share-button-twitter" title="Share on Twitter"> <Link className="social-button-link" data-social-key="twitter" target="_blank" to="//www.twitter.com/share?url=https://www.cosmopolitan.in/celebrity/features/a18241/miley-cyrus-says-change-inevitable-after-confirming-split-husband-liam&amp;text=Miley Cyrus Says Change Is Inevitable After Confirming Split from Husband Liam Hemsworth&amp;via=CosmoIndia"> <span className="icon social-button-icon icon-twitter"></span> </Link> </div>
                     <div className="social-button social-button-email content-info-social-button social-share-button" data-tracking-id="share-button-email" title="Email"> <Link className="social-button-link" data-social-key="email" target="_self" to="mailto:?body=https://www.cosmopolitan.in/celebrity/features/a18241/miley-cyrus-says-change-inevitable-after-confirming-split-husband-liam&amp;subject=Miley Cyrus Says Change Is Inevitable After Confirming Split from Husband Liam Hemsworth"> <span className="icon social-button-icon icon-email"></span> </Link> </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div className="full-item-content">
         <Link className="full-item-title item-title" to="/celebrity/features/a18241/miley-cyrus-says-change-inevitable-after-confirming-split-husband-liam">
            
            <h2 className="hmlisttitle">Miley Cyrus Says "Change Is Inevitable" After Confirming Split from Husband Liam Hemsworth</h2>
         </Link>
         <div className="full-item-dek item-dek">
            
            <p>Still crying over this breakup 😢.</p>
         </div>
         
      </div>
   </div>
</div>

<MoreItem loadItem={this.state.loadItem} loadCount={this.state.moreItems}/>

<div onClick={this.moreItems} className="load-more stuff" id="load-more">
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
        data : state.listFetchDataSuccess,
        loading : state.listIsLoading
    }
  };

const mapDispatchToProps = dispatch => ({
    fetchDataApi: url => dispatch(fetchDataApi(url)),
    fetchMoreDataApi: url => dispatch(fetchMoreDataApi(url))
  });

export default connect(mapStateToProps, mapDispatchToProps)(Listing);