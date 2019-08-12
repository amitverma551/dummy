import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class SingleTop extends Component{
    constructor(props) {
        super(props);
        this.state = {
            singleStory: []
        }
    }

componentDidMount(){
    var data = require('../json/1.json');
    let promise = new Promise(function(resolve, reject) {
       if(data.status == 200){
           resolve(data.singletop);
       }
       })
       promise.then(result => {
           this.setState({
            singleStory : this.singleStory = result
           })
       }).catch(error =>{
           console.log(error);
       }); 
}








render(){
    const topData = this.state.singleStory[0];
    console.log(topData && topData.nid);
    return(
        <div className="custom-promo">
            {topData &&
            <div className="custom-promo-inner">
                <Link className="custom-promo-image item-image" to="/fashion/features/g18083/eight-edgy-ways-wear-sari-juxtaposing-it-modern-pieces">
                <img alt="default_image" src={topData.image} className="ng-lazyloaded" />
                </Link>
                <div className="custom-promo-content bg-image lazyload-in-view lazyloaded">
                    <Link className="custom-promo-label" to="#">Must Read</Link>
                    <Link className="custom-promo-title item-title" to="/fashion/features/g18083/eight-edgy-ways-wear-sari-juxtaposing-it-modern-pieces">
                        <p>{topData.title}</p>
                        <span>{topData.field_dek}</span>
                    </Link>
                </div>
            </div>
            }
        </div>
    )
}

}

export default SingleTop;