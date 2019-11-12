import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/color-logo.png';

const Footer = () =>{
    return(
        <footer className="footer">
   <div className="footer-inner">
      <div className="footer-logo">
         <Link className="ng-tns-c7-1" to="/">
           <img src={logo} alt="Fashion Post" />
         </Link>
      </div>
      <div className="social-button-group footer-social-menu" data-share-location="social-btns-follow">
         <div className="social-button social-button-facebook footer-social-menu-item" data-tracking-id="share-button-facebook" title="Share on Facebook">
            <Link className="social-button-link" data-social-key="facebook" to="https://facebook.com/Cosmopolitan" target="_blank">
            <span className="icon social-button-icon icon-facebook"></span>
            </Link>
         </div>
         <div className="social-button social-button-twitter footer-social-menu-item" data-tracking-id="share-button-twitter" title="Share on Twitter">
            <Link className="social-button-link" data-social-key="twitter" to="https://twitter.com/Cosmopolitan" target="_blank">
            <span className="icon social-button-icon icon-twitter"></span>
            </Link>
         </div>
         <div className="social-button social-button-googleplus footer-social-menu-item" data-tracking-id="share-button-googleplus" title="Share on Google Plus">
            <Link className="social-button-link" data-social-key="googleplus" to="https://plus.google.com/u/0/111347932293989723742/posts" target="_blank">
            <span className="icon social-button-icon icon-googleplus"></span>
            </Link>
         </div>
         <div className="social-button social-button-pinterest footer-social-menu-item" data-tracking-id="share-button-pinterest" title="Share on Pinterest">
            <Link className="social-button-link" data-pin-do="nothing" data-social-key="pinterest" to="https://www.pinterest.com/Cosmopolitan/" target="_blank">
            <span className="icon social-button-icon icon-pinterest"></span>
            </Link>
         </div>
         <div className="social-button social-button-instagram footer-social-menu-item" data-tracking-id="share-button-instagram" title="Share on Instagram">
            <Link className="social-button-link" data-social-key="instagram" to="https://instagram.com/cosmopolitan" target="_blank">
            <span className="icon social-button-icon icon-instagram"></span>
            </Link>
         </div>
         <div className="social-button social-button-youtube footer-social-menu-item" data-tracking-id="share-button-youtube" title="Share on YouTube">
            <Link className="social-button-link" data-social-key="youtube" to="https://www.youtube.com/cosmopolitan" target="_blank">
            <span className="icon social-button-icon icon-youtube"></span>
            </Link>
         </div>
         <div className="social-button social-button-tumblr footer-social-menu-item" data-tracking-id="share-button-tumblr" title="Share on Tumblr">
            <Link className="social-button-link" data-social-key="tumblr" to="https://cosmopolitanmagazine.tumblr.com" target="_blank">
            <span className="icon social-button-icon icon-tumblr"></span>
            </Link>
         </div>
      </div>
      <ul className="footer-menu">
         <li className="footer-menu-item nav-item ng-tns-c7-1" data-id="index + 1 ">
            <Link className="ng-tns-c7-1" to="/beauty">
            Beauty</Link>
         </li>
         <li className="footer-menu-item nav-item ng-tns-c7-1" data-id="index + 1 ">
            <Link className="ng-tns-c7-1" to="/celebrity">
            Celebrity</Link>
         </li>
         <li className="footer-menu-item nav-item ng-tns-c7-1" data-id="index + 1 ">
            <Link className="ng-tns-c7-1" to="/fashion">
            Fashion</Link>
         </li>
         <li className="footer-menu-item nav-item ng-tns-c7-1" data-id="index + 1 ">
            <Link className="ng-tns-c7-1" to="/life">
            Life</Link>
         </li>
         <li className="footer-menu-item nav-item ng-tns-c7-1" data-id="index + 1 ">
            <Link className="ng-tns-c7-1" to="/relationships">
            Relationships</Link>
         </li>
      </ul>
      <p className="footlink">
         <Link className="ng-tns-c7-1" to="/privacy" target="_blank">
         Privacy Policy</Link> |  
         <Link className="ng-tns-c7-1" to="/contact" target="_blank">
         Contact Us</Link> | 
         <Link className="ng-tns-c7-1" to="/termsandconditions" target="_blank">
         Terms of Use</Link> | 
         <Link className="ng-tns-c7-1" to="/about-us" target="_blank">
         About us</Link>
      </p>
      <p className="copyright">
         Copyright © 2019 Living Media India Limited. For reprint rights: 
         <Link className="copyrighlink" to="http://www.syndicationstoday.com/" target="_blank">
         Syndications Today</Link>
      </p>
   </div>
</footer>
    )
}

export default Footer;