import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

const SideBar = (props)=>{
    const data = props.items[0];
    return(
        <div className="recirculation-module active" data-tracking-id="recirc-subsection" data-tracking-label="More From Beauty">
   <div>
      <div className="ad-container" id="gpt-leaderboard-ad">
          <img src="https://s0.2mdn.net/9026271/09152019-232656293-English_300x250.gif" />
      </div>
   </div>
   <div className="recirculation-module-header">
      More From 
      <Link className="recirculation-module-feed-link" to={`/${props.catName}`}>
      {props.catName}</Link> 
   </div>
   {
        data && data.map((x,i)=>{
            if(props.pId != x.nid){
                return(
                    <div key={i} className="recirculation-module-inner">
                        <div className="simple-item recirculation-module-item">
                            <div className="recirculation-module-image">
                                <Link className="full-item-image item-image recirculation-image" to={x.path}>
                                <img alt="default_image" src={x.field_feature_image.path} className="ng-lazyloaded" /></Link>
                            </div>
                            <Link className="item-title recirculation-module-item-title" to={x.path}>
                            <p>{x.title}</p>
                            </Link>
                        </div>
                    </div>
                    )
            }
        })
   }
   </div>
    )
}
const mapStateToProps = state =>{
    return{
       items : state.fetchMoreDataApi,
    }
 }

 export default connect(mapStateToProps)(SideBar);