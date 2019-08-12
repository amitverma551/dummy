import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TopStory extends Component{

    constructor(props) {
        super(props);
        this.state = {
            listdata: []
        }
    }

    componentDidMount(){
        var data = require('../json/1.json');
        let promise = new Promise(function(resolve, reject) {
           if(data.status == 200){
               resolve(data.topfile);
           }
           })
           promise.then(result => {
               this.setState({
                   listdata : this.listdata = result
               })
           }).catch(error =>{
               console.log(error);
           }); 
    }

    render(){
        const data = this.state.listdata;
        return(
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
       )
    }
}

export default TopStory;