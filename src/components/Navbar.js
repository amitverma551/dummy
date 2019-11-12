import React from 'react';
import {Link, NavLink} from 'react-router-dom';

const Navbar = (props)=>{
    const openNav = () => {
        document.querySelector('.sidepanel').classList.add("active");
     }
     const openSearch = () => {
        document.querySelector('.search-overlay').classList.add("active");
        document.getElementById('site-search').focus();
     }
   return(
    <nav className="nav" data-tracking-id="topNav">
    <div className="nav-bar location-enabled">
       <div className="nav-bar-container">
          <div className="nav-button nav-sidepanel-button" title="Navigation">
             <span className="icon icon-menu" onClick={openNav}>
             <svg version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><g><g transform="translate(330.000000, 232.000000)"><polygon points="-321.8,-219 -274.3,-219 -274.3,-212.7 -321.8,-212.7 "/><polygon points="-321.8,-203.2 -274.3,-203.2 -274.3,-196.8 -321.8,-196.8"/><polygon points="-321.8,-187.3 -274.3,-187.3 -274.3,-181 -321.8,-181"/></g></g></svg>
             </span>
          </div>
          <ul className="menu-logo">
            <li className="sidepanel-item-logo">
                <NavLink activeClassName="active-link" to="/">Home</NavLink>
             </li>
             <li className="sidepanel-item-logo">
                <NavLink activeClassName="active-link" to="/beauty">Beauty</NavLink>
             </li>
             <li className="sidepanel-item-logo">
                <NavLink activeClassName="active-link" to="/celebrity">Celebrity</NavLink>
             </li>
             <li className="sidepanel-item-logo">
                <NavLink activeClassName="active-link" to="/fashion">Fashion</NavLink>
             </li>
             <li className="sidepanel-item-logo">
                <NavLink activeClassName="active-link" to="/life">Life</NavLink>
             </li>
             <li className="sidepanel-item-logo">
                <NavLink activeClassName="active-link" to="/relationships">Relationships</NavLink>
             </li>
          </ul>
          <div className="nav-swipeable">
             <div className="nav-swipeable-inner">
                <ul className="nav-menu nav-mobile-content nav-primary-menu active" id="FirstNavDesk">
                   
                   <li className="nav-item" data-id="index + 1 ">
                      <Link to="/beauty">Beauty</Link>
                   </li>
                   <li className="nav-item" data-id="index + 1 ">
                      <Link to="/celebrity">Celebrity</Link>
                   </li>
                   <li className="nav-item" data-id="index + 1 ">
                      <Link to="/fashion">Fashion</Link>
                   </li>
                   <li className="nav-item" data-id="index + 1 ">
                      <Link to="/life">Life</Link>
                   </li>
                   <li className="nav-item" data-id="index + 1 ">
                      <Link to="/relationships">Relationships</Link>
                   </li>
                </ul>
                </div>
          </div>
          <div className="location-choice" onClick={openSearch}>
             <span className="location-choice-icon">
                <svg version="1.1" viewBox="0 0 1000 1000" x="0px" xmlns="https://www.w3.org/2000/svg" y="0px">
                   <g>
                      <path d="M972.6,880.3L731.9,661c50.1-67.9,77.2-149.7,77.2-235.6c0-106.4-41.6-206.5-117-281.8C616.6,68.5,516.3,27,409.5,27S202.5,68.5,127,143.7C51.6,219,10,319,10,425.5C10,531.9,51.6,632,127,707.2C202.5,782.5,302.8,824,409.5,824c91.2,0,177.7-30.3,248.1-86.1L900.5,959c10.3,9.3,23.2,13.9,36,13.9c14.5,0,29-5.8,39.5-17.4C995.9,933.8,994.4,900.1,972.6,880.3z M168.9,665.5c-64.3-64.1-99.7-149.3-99.7-240c0-90.7,35.4-175.9,99.7-240c64.3-64.1,149.7-99.4,240.6-99.4c90.9,0,176.4,35.3,240.6,99.4c64.3,64.1,99.7,149.3,99.7,240c0,90.7-35.4,175.9-99.7,240c-64.3,64.1-149.7,99.4-240.6,99.4S233.2,729.6,168.9,665.5z"></path>
                   </g>
                </svg>
             </span>
             <span className="location-choice-country">Search</span>
          </div>
       </div>
    </div>
 </nav>
   )
}

export default Navbar;