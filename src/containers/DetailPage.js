import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {DetailPageDataApi} from '../actions/DataFatchingAction';
import SideBar from '../components/SideBar';
import { fetchMoreDataApi } from '../actions/LoadItemActions';

class DetailPage extends Component{
   constructor(){
      super()
      this.state = {
         ctName:'',
         postId:''
      }
   }

   updateComp = () =>{
      const path = window.location.pathname;
      const arr = path.split("/");
      const newArr = arr.filter(x=> x !== "" ? x : null);
      const catName = newArr.length > 0 ? newArr[0] : null;
      const postId = path.match(/[a-z]\d+\b/g);
      if(Object.prototype.toString.call(postId) == "[object Array]"){
         var idString = postId.join();
         if(idString.charAt(0) == "a" || idString.charAt(0) == "g"){
          this.props.apiData('http://localhost:9001/api/post/'+idString.substr(1))
         }
      } 
      this.setState({
         ctName: this.state.ctName = catName,
         postId : this.state.postId = idString.substr(1)
      })
     this.props.fetchMoreDataApi(`http://localhost:9001/api/posts/${catName}?_limit=11`);
}

componentDidMount(){
   this.updateComp()
}

componentDidUpdate(prevProps) {
   if (this.props.location !== prevProps.location) {
      this.updateComp();
    }
}
   
   render(){
      const items = this.props.pageData.items;
       return(
         <div className="site-content">
            
    <header className="content-header standard-header">
      <div className="leaderboard-ad">
        <div className="ad-container" id="gpt-leaderboard-ad">
          
        </div>
      </div>
      <div className="content-header-inner">
        <h1 className="content-hed standard-hed">{items && items.title}</h1>
        <h2 className="content-dek standard-dek">{items && items.field_dek}
</h2>
      </div>
    </header>
    <div className="content-container standard-container">
  <div className="standard-body">
   <div className="content-info standard-info">
      <div className="content-info-inner">
         <div className="content-info-metadata">
            <div className="byline-with-image content-info-byline-with-image" data-tracking-id="recirc-byline" data-tracking-label="Alexis Nedd">
               <div className="content-info-byline-image"><img className="lazyload-in-view" src="" /></div>
               <div className="byline content-info-byline" itemprop="author" itemscope="" itemtype="https://schema.org/Person"><Link className="byline-name" itemprop="name" rel="author" to="/"></Link> </div>
               <div className="byline content-info-byline" itemprop="author" itemscope="" itemtype="https://schema.org/Person">By <Link className="byline-name" to="#" itemprop="name" rel="author">Samar Rajput </Link> </div>
            </div>
            <time className="content-info-date js-date" data-format="MMM D, YYYY" data-publish-date="sDate" datetime="sDate">19 August 2019 </time>
         </div>
         <div className="content-info-social-buttons primary-social-buttons standard-social-buttons">
            <div className="aggregate-count content-info-aggregate-count"> <span className="aggregate-count-number " data-social-providers="facebook twitter email"></span> </div>
            <div className="social-button-group content-info-social-button-group" data-share-location="social-btns-primary">
                  <div className="social-container detailpage hdsocl">
                     <span className="sharetxt">SHARE</span>
                     <div className="content-info-social-buttons primary-social-buttons standard-social-buttons hide-socials">
                        <div className="aggregate-count content-info-aggregate-count"> <span className="aggregate-count-number " data-social-providers="facebook twitter email"></span> </div>
                        <div className="social-button-group content-info-social-button-group" data-share-location="social-btns-primary">
                           <div className="social-button social-button-facebook content-info-social-button social-share-button" data-tracking-id="share-button-facebook" title="Share on Facebook"> <Link className="social-button-link" data-social-key="facebook" target="_blank" to="//facebook.com/v2.10/dialog/feed?display=popup&amp;link=https://www.cosmopolitan.in/fashion/features/a18295/pump-volume&amp;redirect_uri=https://www.cosmopolitan.in/fashion/features/a18295/pump-volume&amp;name=Pump Up the Volume &amp;description=Pump Up the Volume &amp;picture=https://akm-img-a-in.tosshub.com/sites/cosmo/sites/default/files/2019-08/_MG_0366-2X1.jpg?m6CEVWa5zQBDGvenjDmH_ZHN.IRIINKN&amp;app_id=161178364542933"> <span className="icon social-button-icon icon-facebook"></span> </Link> </div>
                           <div className="social-button social-button-twitter content-info-social-button social-share-button" data-tracking-id="share-button-twitter" title="Share on Twitter"> <Link className="social-button-link" data-social-key="twitter" target="_blank" to="//www.twitter.com/share?url=https://www.cosmopolitan.in/fashion/features/a18295/pump-volume&amp;text=Pump Up the Volume &amp;via=CosmoIndia"> <span className="icon social-button-icon icon-twitter"></span> </Link> </div>
                           <div className="social-button social-button-email content-info-social-button social-share-button" data-tracking-id="share-button-email" title="Email"> <Link className="social-button-link" data-social-key="email" target="_self" to="mailto:?body=https://www.cosmopolitan.in/fashion/features/a18295/pump-volume&amp;subject=Pump Up the Volume "> <span className="icon social-button-icon icon-email"></span> </Link> </div>
                        </div>
                     </div>
                  </div>
            </div>
         </div>
      </div>
      <div className="content-lede-image standard-lede-image">
         <div className="content-lede-image-wrap"><img alt="" src={items && items.field_feature_image.path} className="ng-lazyloaded" /></div>
         <p className="sfeaturedesc">Feathered dress, Dolly J, price on request; Coccinella Pumps, ₹73,500, and Rubylou Bag, ₹90,000, both Christian Louboutin; earrings, Valliyan by Nitya Arora, ₹8,000</p>
      </div>
   </div>
   <div className="article-body-content standard-body-content">
       <div dangerouslySetInnerHTML={{ __html: items && items.body }}>
      </div>
   </div>
</div>
<div className="clearDetailmobile"></div>
<SideBar catName={this.state.ctName} pId={this.state.postId}/>
</div>
</div>
       )
   }
}

const mapStateToProps = state =>{
   return{
      getPostId : state.getPostId,
      pageData : state.DetailPageFetchDataSuccess,
   }
}

const mapDispatchToProps = dispatch => ({
   apiData: url => dispatch(DetailPageDataApi(url)),
   fetchMoreDataApi: url => dispatch(fetchMoreDataApi(url))
 });

export default connect(mapStateToProps, mapDispatchToProps)(DetailPage);