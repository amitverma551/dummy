import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class SideNav extends Component{
    constructor(props){
       super(props);
    }
    closeNav(){
        document.querySelector('.sidepanel').classList="sidepanel";
    }
    render(){
    return (
        <nav className='sidepanel'>
            <span className="sidepanel-close-button">
            <span className="icon icon-close01" onClick={this.closeNav}>
            <svg height="14px" version="1.1" viewBox="0 0 14 14" width="14px"><g fill="none" fillRule="evenodd" id="Page-1" stroke="none" strokeWidth="1"><g fill="#fff" id="Core" transform="translate(-341.000000, -89.000000)"><g transform="translate(341.000000, 89.000000)"><path d="M14,1.4 L12.6,0 L7,5.6 L1.4,0 L0,1.4 L5.6,7 L0,12.6 L1.4,14 L7,8.4 L12.6,14 L14,12.6 L8.4,7 L14,1.4 Z"/></g></g></g></svg>
            </span>
            </span>
            <ul className="sidepanel-menu">
                <li className="sidepanel-item">
                    <Link to="/" onClick={this.closeNav}>Home</Link>
            </li>
                <li className="sidepanel-item" data-id="index + 1 ">
                        <Link to="/beauty" onClick={this.closeNav}>Beauty</Link>
                </li><li className="sidepanel-item" data-id="index + 1 ">
                        <Link to="/celebrity" onClick={this.closeNav}>Celebrity</Link>
                </li><li className="sidepanel-item" data-id="index + 1 ">
                        <Link to="/fashion" onClick={this.closeNav}>Fashion</Link>
                </li><li className="sidepanel-item" data-id="index + 1 ">
                        <Link to="/life" onClick={this.closeNav}>Life</Link>
                </li><li className="sidepanel-item" data-id="index + 1 ">
                        <Link to="/relationships" onClick={this.closeNav}>Relationships</Link>
                </li>
                <li className="sidepanel-item">
                    <Link to="/cosmopolitan-bloggers-award-2019-nomination" onClick={this.closeNav}>Blogger Awards 2019</Link>
                    </li>
                </ul>
        </nav>

        )
    }
}

export default SideNav;