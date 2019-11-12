import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import Navbar from './Navbar';
import SideNav from './SideNav';
import Search from '../containers/Search';
import '../css/style.css';
import logo from '../assets/images/logo.png';

const NavbarContainer = (props) =>{
  return(
      <Fragment>
            <div  className="mainheader">
            <header  className="sponsorbar marquee bg-image lazyloaded homepage-marquee">
                <div  className="marquee-overlay">
                </div>
                <div  className="marquee-inner video-marquee">
                    <div  className="marquee-content">
                        <h1  className="marquee-logo">
                        <Link  className="marquee-logo-link" to="/">
                         <img src={logo} alt="fashion post" />
                        </Link>
                        </h1>
                    </div>
                </div>
            </header>
            </div>
         <Navbar/>
         <SideNav />
         <Search />
      </Fragment>
  )
}

export default NavbarContainer;