import React, { Component } from 'react';
import { FaFacebookSquare, FaEnvelope, FaTwitter, FaLinkedin, FaGooglePlusG, FaHome, FaUser, FaCopyright} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

class Footer extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <div class="footer jb_cover">

                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6 col-sm-6 col-12">
                                <div class="footerNav jb_cover">
                                    <a href="#"><img src="images/logo2.png" alt="img"/></a>
                                    <ul class="footer_first_contact">
                                        <li><i class="flaticon-location-pointer"></i>
                                            <p>123 City Avenue, Floor 10,
                                                <br/> malbourne, Australia.
                                            </p>
                                        </li>
                                        <li><i class="flaticon-telephone"></i>
                                            <p>1 -234 -456 -7890
                                                <br/> 1 -234 -456 -7890</p>
                                        </li>
                                        <li><i><FaEnvelope/></i><a href="#">info@Jbdesks.com </a>
                                            <br/>
                                            <a href="#">support@Jbdesks.com</a>
                                        </li>

                                    </ul>

                                    <ul class="icon_list_news jb_cover">
                                        <li><a href="#"><i><FaFacebookSquare/></i></a></li>
                                        <li>
                                            <a href="#"><i><FaTwitter/></i>
                                                </a>
                                        </li>
                                        <li><a href="#"><i><FaLinkedin/></i></a></li>
                                        <li><a href="#"><i><FaGooglePlusG/></i></a></li>

                                    </ul>
                                </div>
                            </div>
                            
                            <div class="col-lg-6 col-sm-6 col-12">
                                <div class="footerNav jb_cover footer_border_displ">
                                    <h5>browse</h5>
                                    <ul class="nav-widget">

                                        <li><NavLink style={{color: 'rgba(255, 255, 255, 0.49)'}} to='/search'>Home</NavLink></li>
                                        <li><NavLink style={{color: 'rgba(255, 255, 255, 0.49)'}} to='/'>Login</NavLink></li>
                                        <li><NavLink style={{color: 'rgba(255, 255, 255, 0.49)'}} to='/signup'>Sign Up</NavLink></li>
                                        <li><NavLink style={{color: 'rgba(255, 255, 255, 0.49)'}} to='/contactus'>Contact Us</NavLink></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="copyright_left"><i><FaCopyright/></i> 2019 <a href="#">  JB desks.  </a> All Rights Reserved.
                            </div>

                            <div class="clearfix"></div>
                        </div>
                    </div>
                    <div class="waveWrapper waveAnimation">
                        <div class="waveWrapperInner bgTop gradient-color">
                            <div class="wave waveTop"></div>
                        </div>
                        <div class="waveWrapperInner bgMiddle">
                            <div class="wave waveMiddle"></div>
                        </div>
                        <div class="waveWrapperInner bgBottom">
                            <div class="wave waveBottom"></div>
                        </div>
                    </div>

                    </div>
            </React.Fragment>
         );
    }
}
 
export default Footer;