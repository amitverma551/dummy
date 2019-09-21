import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {DetailPageDataApi} from '../actions/DataFatchingAction';

class DetailPage extends Component{
   constructor(){
      super()
      this.state = {
         postId : ''
      }
   }

   componentDidMount(){
      const path = window.location.pathname;
      const arr = path.split("/");
      const newArr = arr.filter(x=> x !== "" ? x : null);
      const catName = newArr.length > 0 ? newArr[0] : null;
      const postId = path.match(/[a-z]\d+\b/g);

      if(Object.prototype.toString.call(postId) == "[object Array]"){
        const idString = postId.join();
        if(idString.charAt(0) == "a" || idString.charAt(0) == "g"){
           this.setState({
              postId : this.postId = idString.substr(1)
           }, () =>{this.props.apiData(`http://localhost:9001/api/post/${this.state.postId}`);})
        } 
      }

   }
   render(){
      const items = this.props.pageData.items;
      console.log(items);
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
<div className="recirculation-module active" data-tracking-id="recirc-subsection" data-tracking-label="More From Beauty">
   <div>
      <div className="ad-container" id="gpt-leaderboard-ad"></div>
   </div>
   <div className="recirculation-module-header">
      More From 
      <Link className="recirculation-module-feed-link" to="/fashion">
      fashion</Link> 
   </div>
   <div className="recirculation-module-inner">
      <div className="simple-item recirculation-module-item">
         <div className="recirculation-module-image">
            <Link className="full-item-image item-image recirculation-image" to="/fashion/features/a18295/pump-volume">
            <img alt="default_image" src="https://akm-img-a-in.tosshub.com/sites/cosmo/sites/default/files/2019-08/_MG_0366-2X1.jpg?m6CEVWa5zQBDGvenjDmH_ZHN.IRIINKN&amp;size=300:152" className="ng-lazyloaded" /></Link>
         </div>
         <Link className="item-title recirculation-module-item-title" to="/fashion/features/a18295/pump-volume">
         <p>Pump Up the Volume !</p>
         </Link>
      </div>
   </div>
   <div className="recirculation-module-inner">
      <div className="simple-item recirculation-module-item">
         <div className="recirculation-module-image">
            <Link className="full-item-image item-image recirculation-image" to="/fashion/features/a18275/10-ways-style-your-bold-shoulders">
            <img alt="default_image" src="https://akm-img-a-in.tosshub.com/sites/cosmo/sites/default/files/2019-08/2.jpg?lBoBLjbpeR8t1eJH.4BHrBrrHcg8bz1y&amp;size=300:152" className="ng-lazyloaded" /></Link>
         </div>
         <Link className="item-title recirculation-module-item-title" to="/fashion/features/a18275/10-ways-style-your-bold-shoulders">
         <p>10 Ways To Style Your Bold Shoulders</p>
         </Link>
      </div>
   </div>
   <div className="recirculation-module-inner">
      <div className="simple-item recirculation-module-item">
         <div className="recirculation-module-image">
            <Link className="full-item-image item-image recirculation-image" to="/fashion/features/a18291/how-smartphones-have-become-coolest-new-fashion-accessory">
            <img alt="default_image" src="https://akm-img-a-in.tosshub.com/sites/cosmo/sites/default/files/2019-08/01_1200x628.jpg?TJNQYY5_3.xkO1rTvXdwwmu1XsnbS7WV&amp;size=300:152" className="ng-lazyloaded" /></Link>
         </div>
         <Link className="item-title recirculation-module-item-title" to="/fashion/features/a18291/how-smartphones-have-become-coolest-new-fashion-accessory">
         <p>How Smartphones Have Become the Coolest New Fashion Accessory</p>
         </Link>
      </div>
   </div>
   <div className="recirculation-module-inner">
      <div className="simple-item recirculation-module-item">
         <div className="recirculation-module-image">
            <Link className="full-item-image item-image recirculation-image" to="/fashion/features/a18276/10-different-degrees-animal-print-trend">
            <img alt="default_image" src="https://akm-img-a-in.tosshub.com/sites/cosmo/sites/default/files/2019-08/2%20x%201.jpg?WT1CP8sPv2iDBPnQequw1fMDeXQn8hV4&amp;size=300:152" className="ng-lazyloaded" /></Link>
         </div>
         <Link className="item-title recirculation-module-item-title" to="/fashion/features/a18276/10-different-degrees-animal-print-trend">
         <p>10 Different Degrees of the Animal Print Trend</p>
         </Link>
      </div>
   </div>
   <div className="recirculation-module-inner">
      <div className="simple-item recirculation-module-item">
         <div className="recirculation-module-image">
            <Link className="full-item-image item-image recirculation-image" to="/fashion/features/a18258/10-ways-style-polka-dots-season">
            <img alt="default_image" src="https://akm-img-a-in.tosshub.com/sites/cosmo/sites/default/files/2019-08/On%20the%20Dot2x1.jpg?jdjIyg2pPBCbEqKZs0r9uXMZzq6y5GZ2&amp;size=300:152" className="ng-lazyloaded" /></Link>
         </div>
         <Link className="item-title recirculation-module-item-title" to="/fashion/features/a18258/10-ways-style-polka-dots-season">
         <p>10 Ways To Style Polka Dots This Season</p>
         </Link>
      </div>
   </div>
   <div className="recirculation-module-inner">
      <div className="simple-item recirculation-module-item">
         <div className="recirculation-module-image">
            <Link className="full-item-image item-image recirculation-image" to="/fashion/features/a18259/all-you-need-know-about-summers-hottest-trend-paisley">
            <img alt="default_image" src="https://akm-img-a-in.tosshub.com/sites/cosmo/sites/default/files/2019-08/Screen%20Shot%202019-08-13%20at%206.53.14%20pm.png?CfeIgALfQAIWKADzlsV_tGNSxih_Dpkr&amp;size=300:152" className="ng-lazyloaded" /></Link>
         </div>
         <Link className="item-title recirculation-module-item-title" to="/fashion/features/a18259/all-you-need-know-about-summers-hottest-trend-paisley">
         <p> This Is All That You Need To Know About This Summer's Hottest Trend- Paisley</p>
         </Link>
      </div>
   </div>
   <div className="recirculation-module-inner">
      <div className="simple-item recirculation-module-item">
         <div className="recirculation-module-image">
            <Link className="full-item-image item-image recirculation-image" to="/fashion/features/a18277/10-check-print-co-ords-we-are-crushing-atm">
            <img alt="default_image" src="https://akm-img-a-in.tosshub.com/sites/cosmo/sites/default/files/2019-08/2%20x%201_2.jpg?s5CXBQqOEqUMblbgR8EGipSuZ5nLgCYK&amp;size=300:152" className="ng-lazyloaded" /></Link>
         </div>
         <Link className="item-title recirculation-module-item-title" to="/fashion/features/a18277/10-check-print-co-ords-we-are-crushing-atm">
         <p>10 Check Print Co-ords We are Crushing on ATM</p>
         </Link>
      </div>
   </div>
   <div className="recirculation-module-inner">
      <div className="simple-item recirculation-module-item">
         <div className="recirculation-module-image">
            <Link className="full-item-image item-image recirculation-image" to="/fashion/features/a18274/10-ways-wear-sheer-trend-style">
            <img alt="default_image" src="https://akm-img-a-in.tosshub.com/sites/cosmo/sites/default/files/2019-08/1.jpg?QNzQyTmad5fbXr1_gQ6bFlW9VSnjChGK&amp;size=300:152" className="ng-lazyloaded" /></Link>
         </div>
         <Link className="item-title recirculation-module-item-title" to="/fashion/features/a18274/10-ways-wear-sheer-trend-style">
         <p>10 Ways To Wear The Sheer Trend With Style</p>
         </Link>
      </div>
   </div>
   <div className="recirculation-module-inner">
      <div className="simple-item recirculation-module-item">
         <div className="recirculation-module-image">
            <Link className="full-item-image item-image recirculation-image" to="/fashion/features/g18163/8-ways-you-can-play-pop-colours-and-chic-styles-season">
            <div className="photo-icon"><i className="icon link-icon icon-gallery icon-xs icon-content-type"></i></div>
            <img alt="default_image" src="https://akm-img-a-in.tosshub.com/sites/cosmo/sites/default/files/2019-08/Fashion_Website-Serbia.gif?deczGmH03nMHeZwJuEx5P6Cw294Qlb7A&amp;size=300:152" className="ng-lazyloaded" /></Link>
         </div>
         <Link className="item-title recirculation-module-item-title" to="/fashion/features/g18163/8-ways-you-can-play-pop-colours-and-chic-styles-season">
         <p> 8 Ways You Can Play With Pop Colours and Chic Styles This Season</p>
         </Link>
      </div>
   </div>
   <div className="recirculation-module-inner">
      <div className="simple-item recirculation-module-item">
         <div className="recirculation-module-image">
            <Link className="full-item-image item-image recirculation-image" to="/fashion/features/a18231/these-zara-boots-are-all-over-instagram">
            <img alt="default_image" src="https://akm-img-a-in.tosshub.com/sites/cosmo/sites/default/files/2019-08/Screen%20Shot%202019-08-09%20at%206.01.28%20pm.png?HtkTIZAbKp_KIkcYedmPvgcqyhb_V4aE&amp;size=300:152" className="ng-lazyloaded" /></Link>
         </div>
         <Link className="item-title recirculation-module-item-title" to="/fashion/features/a18231/these-zara-boots-are-all-over-instagram">
         <p>These Zara Boots Are All Over Instagram</p>
         </Link>
      </div>
   </div>
   <div className="recirculation-module-inner">
      <div className="simple-item recirculation-module-item">
         <div className="recirculation-module-image">
            <Link className="full-item-image item-image recirculation-image" to="/fashion/features/g18100/7-adorable-dogs-show-you-most-coveted-jewels-moment">
            <div className="photo-icon"><i className="icon link-icon icon-gallery icon-xs icon-content-type"></i></div>
            <img alt="default_image" src="https://akm-img-a-in.tosshub.com/sites/cosmo/sites/default/files/2019-07/Alxdog%201a_2x1.jpg?7JUQR0buebqk1NPtQkGI4dF3nsz7uokN&amp;size=300:152" className="ng-lazyloaded" /></Link>
         </div>
         <Link className="item-title recirculation-module-item-title" to="/fashion/features/g18100/7-adorable-dogs-show-you-most-coveted-jewels-moment">
         <p>7 Adorable Dogs Show You the Most-Coveted Jewels of the Moment</p>
         </Link>
      </div>
   </div>
   <div className="recirculation-module-inner">
      <div className="simple-item recirculation-module-item">
         <div className="recirculation-module-image">
            <Link className="full-item-image item-image recirculation-image" to="/fashion/features/g18161/21-fall-fashion-trends-you-need-start-preparing-now-because-youre-not-ready">
            <div className="photo-icon"><i className="icon link-icon icon-gallery icon-xs icon-content-type"></i></div>
            <img alt="default_image" src="https://akm-img-a-in.tosshub.com/sites/cosmo/sites/default/files/2019-08/fall-trends-1562095178_1.jpg?LUYfeT5ya10DxKgqe7gdnTOfxacNQnNW&amp;size=300:152" className="ng-lazyloaded" /></Link>
         </div>
         <Link className="item-title recirculation-module-item-title" to="/fashion/features/g18161/21-fall-fashion-trends-you-need-start-preparing-now-because-youre-not-ready">
         <p>21 Fall Fashion Trends You Need to Start Preparing for Now, Because YOU'RE NOT READY</p>
         </Link>
      </div>
   </div>
</div>

</div>
</div>
       )
   }
}

const mapStateToProps = state =>{
   console.log(state);
   return{
      getPostId : state.getPostId,
      pageData : state.DetailPageFetchDataSuccess
   }
}

const mapDispatchToProps = dispatch => ({
   apiData: url => dispatch(DetailPageDataApi(url))
 });

export default connect(mapStateToProps, mapDispatchToProps)(DetailPage);