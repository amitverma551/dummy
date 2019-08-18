import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';

class StoryWidthAd extends Component{
    render(){
        return(
            <Fragment>
               <div className="full-item">
                <div className="full-item full-item-with-ad" style={{"borderBottom":"0px"}}>
                    <Link className="full-item-image item-image" to="/celebrity/features/a18265/gigi-hadid-managed-piss-entire-country-greece-and-her-instagram-comments">
                    <img alt="default_image" src="https://akm-img-a-in.tosshub.com/sites/cosmo/sites/default/files/2019-08/Screen%20Shot%202019-08-14%20at%201.06.42%20pm.png?En2cfmRbnEVQ19zqxKLWClqb1.Kfr9ZO" className="ng-lazyloaded" />
                    </Link>
                    <div className="full-item-metadata">
                        <Link className="item-parent-link full-item-parent-link" to="/celebrity">
                        Celebrity</Link>
                        <div className="publish-date full-item-publish-date js-date" data-format="MMM D, YYYY" data-publish-date="homelist.created">Aug 14, 2019</div>
                    </div>
                    <div className="full-item-content">
                        <Link className="full-item-title item-title" to="/celebrity/features/a18265/gigi-hadid-managed-piss-entire-country-greece-and-her-instagram-comments">
                        <p>Gigi Hadid Managed to Piss Off the Entire Country of Greece and Her Instagram Comments Are a MESS</p>
                        </Link>
                        <div className="full-item-dek item-dek">
                            <p>...halp.</p>
                        </div>
                    </div>
                </div>
                <div className="breaker-ad list-vertical-ad">
                    <div className="_ads_leaderboard-ad " style={{"display": "block"}}>
                    <div className="ad-container" id="gpt-leaderboard-ad">
                        <img src="https://s0.2mdn.net/9125235/06072019-111627915-IND_300-x-250px.png" />
                    </div>
                </div>
                </div>
                </div>
            </Fragment>
        )
    }
}

export default StoryWidthAd;