import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';


class searchResult extends Component{

    constructor(){
        super();
        this.search = window.location.search;
        this.params = new URLSearchParams(this.search);
        this.urlString = this.params.get('q');
    }
    render(){
        const data = this.props.srchTxt[0];
        return(
            <Fragment>
                <div className="search-container-top">
                <div className="leaderboard-ad">
                    <div className="ad-container" id="gpt-leaderboard-ad">
                        <img src="https://tpc.googlesyndication.com/simgad/326414572240773397?sqp=4sqPyQQrQikqJwhfEAEdAAC0QiABKAEwCTgDQPCTCUgAUAFYAWBfcAJ4AcUBLbKdPg&rs=AOga4qlVWSvplg49K3OrVQFMT5D2V1O37Q" />
                    </div>
                </div>
                <div id="search-page-box">
                    <div className="search-page-box--inner">
                    <form className="search-form search-overlay-form" novalidate="">
                        <div className="search-typeahead">
                        <p className="search-label"> Search keyword : <span className="searchtxt">{this.urlString}</span></p>
                        <input className="search-text" id="site-search" name="searchkey" placeholder="Type here for search again" type="text" />
                        </div>
                    </form>
                    </div>
                    <ul className="auto-complete-suggest">
                    </ul>
                </div>
                
                <div className="search-filters">
                    <div className="form-group">
                    <div className="search-results-toggle tab-filter active-class" id="no-filter"> {data && data.length} Results</div>
                    </div>
                    <div className="form-group" id="advanced-filters"></div>
                </div>
                </div>
                <div className="search-page" data-pages="0" data-total-count="546" id="search-page" role="search">
                    <div className="feed feed-list">
                        {
                          data && data.map((x,i)=>{
                              return(
                                <div key={i} className="full-item">
                            <div className="verticalListing">
                                <Link className="full-item-image item-image" to={x.path}>
                                    <img alt="default_image" src={x.field_feature_image.path} className="ng-lazyloaded" />
                                </Link>
                                <div className="full-item-metadata"><Link className="item-parent-link full-item-parent-link" to="/beauty">Beauty</Link>
                                    <div className="publish-date full-item-publish-date js-date" data-format="MMM D, YYYY" data-publish-date="homelist.publish_up">20 Sep, 2019</div>
                                    <app-social-component dynclassName="search-page">
                                        <div className="social-container search-page hdsocl"><span className="sharetxt">SHARE</span>
                                            <div className="content-info-social-buttons primary-social-buttons standard-social-buttons hide-socials">
                                                <div className="aggregate-count content-info-aggregate-count"> <span className="aggregate-count-number " data-social-providers="facebook twitter email"></span> 
                                                </div>
                                                <div className="social-button-group content-info-social-button-group" data-share-location="social-btns-primary">
                                                    <div className="social-button social-button-facebook content-info-social-button social-share-button" data-tracking-id="share-button-facebook" title="Share on Facebook">
                                                        <Link className="social-button-link" data-social-key="facebook" target="_blank" to="//facebook.com/v2.10/dialog/feed?display=popup&amp;link=https://www.cosmopolitan.in/beauty/features/a18598/cosmo-picks-3-fabulous-foundations-acne-prone-skin&amp;redirect_uri=https://www.cosmopolitan.in/beauty/features/a18598/cosmo-picks-3-fabulous-foundations-acne-prone-skin&amp;name=Cosmo Picks 3 Fabulous Foundations for AcneProne Skin&amp;description=Cosmo Picks 3 Fabulous Foundations for AcneProne Skin&amp;picture=https://akm-img-a-in.tosshub.com/sites/cosmo/sites/default/files/2019-09/shutterstock_223755328.jpg?Q8trRV_PK_ot34vTvQ2IlzL7THDpC.ZI&amp;app_id=161178364542933"> <span className="icon social-button-icon icon-facebook"></span> 
                                                        </Link>
                                                    </div>
                                                    <div className="social-button social-button-twitter content-info-social-button social-share-button" data-tracking-id="share-button-twitter" title="Share on Twitter">
                                                        <Link className="social-button-link" data-social-key="twitter" target="_blank" to="//www.twitter.com/share?url=https://www.cosmopolitan.in/beauty/features/a18598/cosmo-picks-3-fabulous-foundations-acne-prone-skin&amp;text=Cosmo Picks 3 Fabulous Foundations for AcneProne Skin&amp;via=CosmoIndia"> <span className="icon social-button-icon icon-twitter"></span> 
                                                        </Link>
                                                    </div>
                                                    <div className="social-button social-button-email content-info-social-button social-share-button" data-tracking-id="share-button-email" title="Email">
                                                        <Link className="social-button-link" data-social-key="email" target="_self" to="mailto:?body=https://www.cosmopolitan.in/beauty/features/a18598/cosmo-picks-3-fabulous-foundations-acne-prone-skin&amp;subject=Cosmo Picks 3 Fabulous Foundations for AcneProne Skin"> <span className="icon social-button-icon icon-email"></span> 
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </app-social-component>
                                </div>
                                <div className="full-item-content">
                                    <Link className="full-item-title item-title" to={x.path}>
                                        <p>{x.title}</p>
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
                <div className="leaderboard-ad" style={{backgroundColor: 'transparent'}}>
                    <div className="ad-container" id="gpt-leaderboard-ad">
                        <img src="https://tpc.googlesyndication.com/simgad/326414572240773397?sqp=4sqPyQQrQikqJwhfEAEdAAC0QiABKAEwCTgDQPCTCUgAUAFYAWBfcAJ4AcUBLbKdPg&rs=AOga4qlVWSvplg49K3OrVQFMT5D2V1O37Q" />
                    </div>
                </div>
            </Fragment>
        )
    }
}
const mapStateToProps = state => {
    return {
        srchTxt : state.SearchTxtSuccess,
    }
  };
export default connect(mapStateToProps)(searchResult);