import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import SideNav from '../components/SideNav';
import '../css/style.css';

class NavbarContainer extends Component{

   constructor(){
      super()
   }

   openNav = ()=>{
      document.querySelector('.sidepanel').classList="sidepanel active";
   }
  render(){
  return(
      <Fragment>
            <div  className="mainheader">
            <header  className="sponsorbar marquee bg-image lazyloaded homepage-marquee" style={{"backgroundImage": "url(https://akm-img-a-in.tosshub.com/sites/cosmo/2019-06/unnamed-1.jpg;)", "backgroundSize": "cover"}}>
                <div  className="marquee-overlay">
                </div>
                <div  className="marquee-inner video-marquee">
                    <div  className="marquee-content">
                        <h1  className="marquee-logo">
                        <Link  className="marquee-logo-link" to="/">
                        <svg  className="logo-svg" version="1.1" viewBox="0 0 800 143" x="0px" xmlns="https://www.w3.org/2000/svg" y="0px"><defs ></defs><g  fill="#EC008C" transform="translate(1.000000, 1.000000)"><path  d="M533.769,-0.096 L507.923,-0.096 L507.923,48.519 C504.231,12.211 490.692,-0.096 471,-0.096 C456.231,-0.096 445.154,7.288 438.385,26.365 C433.461,7.288 419.308,-0.096 395.923,-0.096 L370.077,-0.096 L370.077,48.519 L369.461,48.519 C365.769,12.211 352.231,-0.096 332.539,-0.096 C313.462,-0.096 299.923,12.211 295.615,48.519 L295,48.519 L295,-0.096 L261.769,-0.096 L249.462,72.519 L248.846,72.519 L238.385,-0.096 L203.923,-0.096 L203.923,27.596 C200.846,10.98 191,-0.096 172.538,-0.096 C152.231,-0.096 141.154,14.057 139.308,31.904 C133.769,7.904 121.462,-0.096 105.462,-0.096 C87.615,-0.096 74.692,10.365 69.769,40.519 C68.539,18.98 62.385,-0.096 36.539,-0.096 C16.231,-0.096 -0.385,18.365 -0.385,70.673 C-0.385,115.596 8.846,141.442 36.539,141.442 C61.154,141.442 67.923,121.75 69.769,102.057 C74.692,131.596 87.615,141.442 105.462,141.442 C122.692,141.442 135,131.596 140.538,103.904 C141.769,121.75 148.538,141.442 173.769,141.442 C187.923,141.442 198.385,135.288 203.923,124.826 L203.923,140.827 L223,140.827 L223,37.442 L223.615,37.442 L240.846,140.827 L255,140.827 L272.231,37.442 L272.846,37.442 L272.846,140.827 L295.615,140.827 L295.615,92.211 L296.231,92.211 C299.923,128.519 313.461,140.827 333.154,140.827 C352.231,140.827 365.769,128.519 370.077,92.211 L370.692,92.211 L370.692,140.827 L396.538,140.827 L396.538,84.211 L407,84.211 C419.923,84.211 428.538,79.288 434.077,71.288 C434.077,124.211 448.846,140.827 471.615,140.827 C490.692,140.827 504.231,128.519 508.538,92.211 L508.538,140.827 L567,140.827 L567,119.288 L534.385,119.288 L534.385,-0.096 L533.769,-0.096 L533.769,-0.096 Z M48.846,87.288 C48.231,106.98 46.385,119.288 37.769,119.288 C29.769,119.288 27.308,114.365 27.308,69.442 C27.308,23.904 32.846,20.827 38.385,20.827 C44.539,20.827 47.615,29.442 47.615,51.596 L69.154,50.98 C68.539,57.134 68.539,63.288 68.539,70.673 C68.539,77.442 68.539,83.596 69.154,89.134 L48.846,87.288 L48.846,87.288 Z M115.308,84.827 C115.308,114.365 111.615,119.903 106.077,119.903 C99.923,119.903 96.846,113.75 96.846,84.827 L96.846,55.904 C96.846,26.365 100.538,20.827 106.077,20.827 C112.231,20.827 115.308,26.98 115.308,55.904 L115.308,84.827 L115.308,84.827 Z M175,119.904 C163.923,119.904 163.923,106.365 163.923,98.98 L141.769,98.98 C143,90.98 143.615,81.134 143.615,70.057 C143.615,64.519 143.615,58.98 143,54.057 C154.077,79.288 186.077,86.673 186.077,106.98 C186.077,111.904 183.615,119.904 175,119.904 L175,119.904 Z M162.692,33.134 C162.692,25.75 166.385,20.827 172.538,20.827 C183,20.827 183,33.75 183,41.134 L204.539,41.134 L204.539,82.365 C192.231,60.211 162.692,51.596 162.692,33.134 L162.692,33.134 Z M342.385,84.827 C342.385,114.365 338.692,120.519 333.154,120.519 C327,120.519 323.923,114.365 323.923,84.827 L323.923,55.904 C323.923,26.365 327.615,20.211 333.154,20.211 C339.308,20.211 342.385,26.365 342.385,55.904 L342.385,84.827 L342.385,84.827 Z M398.385,63.904 L395.923,63.904 L395.923,21.442 L397.769,21.442 C406.385,21.442 414.385,22.057 414.385,42.365 C414.385,59.596 408.846,63.904 398.385,63.904 L398.385,63.904 Z M480.231,84.827 C480.231,114.365 476.539,120.519 471,120.519 C464.846,120.519 461.769,114.365 461.769,84.827 L461.769,55.904 C461.769,26.365 465.461,20.211 471,20.211 C477.154,20.211 480.231,26.365 480.231,55.904 L480.231,84.827 L480.231,84.827 Z" id="Fill-1"></path><path  d="M570.692,-0.096 L596.538,-0.096 L596.538,140.827 L570.692,140.827 L570.692,-0.096 Z"></path><path  d="M670.385,-0.096 L600.231,-0.096 L600.231,21.442 L622.385,21.442 L622.385,140.827 L648.231,140.827 L648.231,21.442 L670.385,21.442 L670.385,-0.096"></path><path  d="M776.846,-0.096 L776.846,74.365 L776.231,74.365 L752.846,-0.096 L727.615,-0.096 L727.615,122.98 L712.231,-0.096 L674.692,-0.096 L655,140.827 L676.539,140.827 L680.231,109.442 L701.154,109.442 L704.846,140.827 L749.769,140.827 L749.769,55.288 L750.385,55.288 L778.077,140.827 L798.385,140.827 L798.385,-0.096 L776.846,-0.096 L776.846,-0.096 Z M683.308,89.134 L691.308,21.442 L691.923,21.442 L699.308,89.134 L683.308,89.134 L683.308,89.134 Z"></path></g></svg>
                        </Link>
                        </h1>
                    </div>
                </div>
            </header>
            </div>
            <nav className="nav" data-tracking-id="topNav">
   <div className="nav-bar location-enabled">
      <div className="nav-bar-container">
         <div className="nav-button nav-sidepanel-button" title="Navigation">
            <span className="icon icon-menu" onClick={this.openNav}>
            <svg version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><g><g transform="translate(330.000000, 232.000000)"><polygon points="-321.8,-219 -274.3,-219 -274.3,-212.7 -321.8,-212.7 "/><polygon points="-321.8,-203.2 -274.3,-203.2 -274.3,-196.8 -321.8,-196.8"/><polygon points="-321.8,-187.3 -274.3,-187.3 -274.3,-181 -321.8,-181"/></g></g></svg>
            </span>
         </div>
         <Link className="nav-logo" to="/">
            <svg className="logo-svg" version="1.1" viewBox="0 0 800 143" x="0px" xmlns="https://www.w3.org/2000/svg" y="0px"><defs ></defs><g fill="#EC008C" transform="translate(1.000000, 1.000000)"><path d="M533.769,-0.096 L507.923,-0.096 L507.923,48.519 C504.231,12.211 490.692,-0.096 471,-0.096 C456.231,-0.096 445.154,7.288 438.385,26.365 C433.461,7.288 419.308,-0.096 395.923,-0.096 L370.077,-0.096 L370.077,48.519 L369.461,48.519 C365.769,12.211 352.231,-0.096 332.539,-0.096 C313.462,-0.096 299.923,12.211 295.615,48.519 L295,48.519 L295,-0.096 L261.769,-0.096 L249.462,72.519 L248.846,72.519 L238.385,-0.096 L203.923,-0.096 L203.923,27.596 C200.846,10.98 191,-0.096 172.538,-0.096 C152.231,-0.096 141.154,14.057 139.308,31.904 C133.769,7.904 121.462,-0.096 105.462,-0.096 C87.615,-0.096 74.692,10.365 69.769,40.519 C68.539,18.98 62.385,-0.096 36.539,-0.096 C16.231,-0.096 -0.385,18.365 -0.385,70.673 C-0.385,115.596 8.846,141.442 36.539,141.442 C61.154,141.442 67.923,121.75 69.769,102.057 C74.692,131.596 87.615,141.442 105.462,141.442 C122.692,141.442 135,131.596 140.538,103.904 C141.769,121.75 148.538,141.442 173.769,141.442 C187.923,141.442 198.385,135.288 203.923,124.826 L203.923,140.827 L223,140.827 L223,37.442 L223.615,37.442 L240.846,140.827 L255,140.827 L272.231,37.442 L272.846,37.442 L272.846,140.827 L295.615,140.827 L295.615,92.211 L296.231,92.211 C299.923,128.519 313.461,140.827 333.154,140.827 C352.231,140.827 365.769,128.519 370.077,92.211 L370.692,92.211 L370.692,140.827 L396.538,140.827 L396.538,84.211 L407,84.211 C419.923,84.211 428.538,79.288 434.077,71.288 C434.077,124.211 448.846,140.827 471.615,140.827 C490.692,140.827 504.231,128.519 508.538,92.211 L508.538,140.827 L567,140.827 L567,119.288 L534.385,119.288 L534.385,-0.096 L533.769,-0.096 L533.769,-0.096 Z M48.846,87.288 C48.231,106.98 46.385,119.288 37.769,119.288 C29.769,119.288 27.308,114.365 27.308,69.442 C27.308,23.904 32.846,20.827 38.385,20.827 C44.539,20.827 47.615,29.442 47.615,51.596 L69.154,50.98 C68.539,57.134 68.539,63.288 68.539,70.673 C68.539,77.442 68.539,83.596 69.154,89.134 L48.846,87.288 L48.846,87.288 Z M115.308,84.827 C115.308,114.365 111.615,119.903 106.077,119.903 C99.923,119.903 96.846,113.75 96.846,84.827 L96.846,55.904 C96.846,26.365 100.538,20.827 106.077,20.827 C112.231,20.827 115.308,26.98 115.308,55.904 L115.308,84.827 L115.308,84.827 Z M175,119.904 C163.923,119.904 163.923,106.365 163.923,98.98 L141.769,98.98 C143,90.98 143.615,81.134 143.615,70.057 C143.615,64.519 143.615,58.98 143,54.057 C154.077,79.288 186.077,86.673 186.077,106.98 C186.077,111.904 183.615,119.904 175,119.904 L175,119.904 Z M162.692,33.134 C162.692,25.75 166.385,20.827 172.538,20.827 C183,20.827 183,33.75 183,41.134 L204.539,41.134 L204.539,82.365 C192.231,60.211 162.692,51.596 162.692,33.134 L162.692,33.134 Z M342.385,84.827 C342.385,114.365 338.692,120.519 333.154,120.519 C327,120.519 323.923,114.365 323.923,84.827 L323.923,55.904 C323.923,26.365 327.615,20.211 333.154,20.211 C339.308,20.211 342.385,26.365 342.385,55.904 L342.385,84.827 L342.385,84.827 Z M398.385,63.904 L395.923,63.904 L395.923,21.442 L397.769,21.442 C406.385,21.442 414.385,22.057 414.385,42.365 C414.385,59.596 408.846,63.904 398.385,63.904 L398.385,63.904 Z M480.231,84.827 C480.231,114.365 476.539,120.519 471,120.519 C464.846,120.519 461.769,114.365 461.769,84.827 L461.769,55.904 C461.769,26.365 465.461,20.211 471,20.211 C477.154,20.211 480.231,26.365 480.231,55.904 L480.231,84.827 L480.231,84.827 Z" id="Fill-1"></path><path d="M570.692,-0.096 L596.538,-0.096 L596.538,140.827 L570.692,140.827 L570.692,-0.096 Z"></path><path d="M670.385,-0.096 L600.231,-0.096 L600.231,21.442 L622.385,21.442 L622.385,140.827 L648.231,140.827 L648.231,21.442 L670.385,21.442 L670.385,-0.096"></path><path d="M776.846,-0.096 L776.846,74.365 L776.231,74.365 L752.846,-0.096 L727.615,-0.096 L727.615,122.98 L712.231,-0.096 L674.692,-0.096 L655,140.827 L676.539,140.827 L680.231,109.442 L701.154,109.442 L704.846,140.827 L749.769,140.827 L749.769,55.288 L750.385,55.288 L778.077,140.827 L798.385,140.827 L798.385,-0.096 L776.846,-0.096 L776.846,-0.096 Z M683.308,89.134 L691.308,21.442 L691.923,21.442 L699.308,89.134 L683.308,89.134 L683.308,89.134 Z"></path></g></svg>
         </Link>
         <ul className="menu-logo">
            <li className="sidepanel-item-logo">
               <Link routerlinkactive="active-link" to="/beauty">Beauty</Link>
            </li>
            <li className="sidepanel-item-logo">
               <Link routerlinkactive="active-link" to="/celebrity">Celebrity</Link>
            </li>
            <li className="sidepanel-item-logo">
               <Link routerlinkactive="active-link" to="/fashion">Fashion</Link>
            </li>
            <li className="sidepanel-item-logo">
               <Link routerlinkactive="active-link" to="/life">Life</Link>
            </li>
            <li className="sidepanel-item-logo">
               <Link routerlinkactive="active-link" to="/relationships">Relationships</Link>
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
               <ul className="nav-menu nav-mobile-content nav-secondary-menu nav-menu-subscribe active" id="SecontNavDesk">
                  <li className="nav-menu-item nav-item active has-children" data-id="1">
                     <Link to="/subscribe" target="_blank">Subscribe</Link>
                     <ul className="nav-submenu" data-parent-id="1">
                        <li className="nav-item"><Link to="https://subscribe.hearstmags.com/subscribe/splits/cosmopolitan/cos_gift_nav_link">Give a Gift</Link></li>
                        <li className="nav-item"><Link to="https://subscribe.hearstmags.com/subscribe/splits/cosmopolitan/cos_digital_nav_link">Digital Editions</Link></li>
                     </ul>
                  </li>
               </ul>
               <ul className="nav-menu nav-secondary-menu nav-menu-social active" id="ThirdNavDesk">
                  <li className="nav-menu-item nav-item active">
                     <span className="nav-menu-link">Follow</span>
                     <ul className="nav--secondary--link-list" id="snav">
                        <li className="nav--secondary--social-item nav--secondary--social-item-facebook">
                           <Link className="nav--secondary--link link" to="https://www.facebook.com/CosmopolitanIndia" target="_blank">
                           <i className="icon icon-facebook link-icon"></i>
                           </Link>
                        </li>
                        <li className="nav--secondary--social-item nav--secondary--social-item-twitter">
                           <Link className="nav--secondary--link link" to="https://twitter.com/cosmoindia" target="_blank">
                           <i className="icon icon-twitter link-icon"></i>
                           </Link>
                        </li>
                        <li className="nav--secondary--social-item nav--secondary--social-item-pinterest">
                           <Link className="nav--secondary--link link" to="https://www.pinterest.com/cosmoindia/" target="_blank">
                           <i className="icon icon-pinterest link-icon"></i>
                           </Link>
                        </li>
                        <li className="nav--secondary--social-item nav--secondary--social-item-googleplus">
                           <Link className="nav--secondary--link link" to="https://plus.google.com/+cosmopolitanindia/posts" target="_blank">
                           <i className="icon icon-googleplus link-icon"></i>
                           </Link>
                        </li>
                        <li className="nav--secondary--social-item nav--secondary--social-item-instagram">
                           <Link className="nav--secondary--link link" to="https://instagram.com/cosmoindia" target="_blank">
                           <i className="icon icon-instagram link-icon"></i>
                           </Link>
                        </li>
                     </ul>
                  </li>
               </ul>
            </div>
         </div>
         <div className="location-choice">
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
<SideNav />
      </Fragment>
  )
}
}

export default NavbarContainer;