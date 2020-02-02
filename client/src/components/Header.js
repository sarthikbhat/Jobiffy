import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { FaSearch ,FaTimes } from 'react-icons/fa';


class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <div class="cp_navi_main_wrapper jb_cover">
                    <div class="container-fluid">
                        <div class="cp_logo_wrapper">
                            <a href="index.html">
                                <img src="images/logo.png" alt="logo" />
                            </a>
                        </div>
                        <header class="mobail_menu d-block d-sm-block d-md-block d-lg-none d-xl-none">
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="cd-dropdown-wrapper">
                                            <a class="house_toggle" href="#0">
                                                {/* <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 31.177 31.177" style="enable-background:new 0 0 31.177 31.177;" xml:space="preserve" width="25px" height="25px" />
                                                    <use xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" />
                                                    <g>
                                                        <g>
                                                            <path class="menubar" d="M30.23,1.775H0.946c-0.489,0-0.887-0.398-0.887-0.888S0.457,0,0.946,0H30.23    c0.49,0,0.888,0.398,0.888,0.888S30.72,1.775,30.23,1.775z" fill="#004165" />
                                                        </g>
                                                        <g>
                                                            <path class="menubar" d="M30.23,9.126H12.069c-0.49,0-0.888-0.398-0.888-0.888c0-0.49,0.398-0.888,0.888-0.888H30.23    c0.49,0,0.888,0.397,0.888,0.888C31.118,8.729,30.72,9.126,30.23,9.126z" fill="#004165" />
                                                        </g>
                                                        <g>
                                                            <path class="menubar" d="M30.23,16.477H0.946c-0.489,0-0.887-0.398-0.887-0.888c0-0.49,0.398-0.888,0.887-0.888H30.23    c0.49,0,0.888,0.397,0.888,0.888C31.118,16.079,30.72,16.477,30.23,16.477z" fill="#004165" />
                                                        </g>
                                                        <g>
                                                            <path class="menubar" d="M30.23,23.826H12.069c-0.49,0-0.888-0.396-0.888-0.887c0-0.49,0.398-0.888,0.888-0.888H30.23    c0.49,0,0.888,0.397,0.888,0.888C31.118,23.43,30.72,23.826,30.23,23.826z" fill="#004165" />
                                                        </g>
                                                        <g>
                                                            <path class="menubar" d="M30.23,31.177H0.946c-0.489,0-0.887-0.396-0.887-0.887c0-0.49,0.398-0.888,0.887-0.888H30.23    c0.49,0,0.888,0.398,0.888,0.888C31.118,30.78,30.72,31.177,30.23,31.177z" fill="#004165" />
                                                        </g>
                                                    </g>
                                                </svg> */}
                                            </a>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </header>
                        <div class="menu_btn_box header_btn jb_cover">
                            <ul>
                                {/* <li>
                                <NavLink to='/signup' >
                                    <i class="flaticon-man-user"></i> sign up
                                </NavLink>
                                </li> */}
                                <li>
                                    <NavLink to='/' >
                                        <i class="flaticon-login"></i> logout
                                    </NavLink>
                                </li>
                            </ul>
                        </div>

                        <div class="jb_navigation_wrapper">
                            <div class="mainmenu d-xl-block d-lg-block d-md-none d-sm-none d-none">
                                <ul class="main_nav_ul">
                                    <li class="has-mega gc_main_navigation">
                                        <NavLink class="has-mega gc_main_navigation" to ='/search'>Home</NavLink>
                                    </li>
                                    <li><NavLink class="has-mega gc_main_navigation" to ='/contactus'>Contact Us</NavLink></li>

                                </ul>
                            </div>
                            <div class="jb_search_btn_wrapper d-none d-sm-none d-md-none d-lg-block d-xl-block">
                                <div class="extra-nav">
                                    <div class="extra-cell">
                                        <button style={{marginTop:'-10%'}} id="quik-search-btn" type="button" class="site-button radius-xl"><i><FaSearch/></i></button>
                                    </div>
                                </div>
                                <div class="dez-quik-search bg-primary-dark">
                                    <form action="#">
                                        <input name="search" type="text" class="form-control" placeholder="Type to search..." />
                                        <span id="quik-search-remove"><i><FaTimes/></i></span>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Header;