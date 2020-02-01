import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

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
                                <li>
                                <NavLink to='/sign-up' >
                                    <i class="flaticon-man-user"></i> sign up
                                </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/login' >
                                    <i class="flaticon-login"></i> login
                                    </NavLink>
                                </li>
                            </ul>
                        </div>

                        <div class="jb_navigation_wrapper">
                            <div class="mainmenu d-xl-block d-lg-block d-md-none d-sm-none d-none">
                                <ul class="main_nav_ul">
                                    <li class="has-mega gc_main_navigation"><a href="#" class="gc_main_navigation">home</a>
                                        <ul class="navi_2_dropdown">
                                            <li class="parent">
                                                <a href="index.html"><i class="fas fa-square"></i>home I </a>
                                            </li>
                                            <li class="parent">
                                                <a href="index_II.html"><i class="fas fa-square"></i>home II</a>
                                            </li>
                                            <li class="parent">
                                                <a href="index_III.html"><i class="fas fa-square"></i> home III</a>
                                            </li>

                                        </ul>
                                    </li>
                                    <li class="has-mega gc_main_navigation"><a href="#" class="gc_main_navigation">jobs</a>
                                        <ul class="navi_2_dropdown">
                                            <li class="parent">
                                                <a href="job_listing_grid_left_filter.html"> <i class="fas fa-square"></i>job listing grid </a>
                                            </li>
                                            <li class="parent">
                                                <a href="job_listing_list_left_filter.html"> <i class="fas fa-square"></i>job listing list </a>
                                            </li>
                                            <li class="parent">
                                                <a href="job_single.html"> <i class="fas fa-square"></i>job single</a>
                                            </li>

                                            <li class="parent">
                                                <a href="#"><i class="fas fa-square"></i>jobs<span><i class="fas fa-chevron-right"></i>
                                                </span></a>
                                                <ul class="dropdown-menu-right">
                                                    <li>
                                                        <a href="job_listing_grid_left_filter.html"> <i class="fas fa-square"></i>job listing grid </a>
                                                    </li>
                                                    <li>
                                                        <a href="job_listing_list_left_filter.html"> <i class="fas fa-square"></i>job listing list </a>
                                                    </li>
                                                    <li>
                                                        <a href="job_single.html"> <i class="fas fa-square"></i>job single</a>
                                                    </li>
                                                </ul>
                                            </li>

                                        </ul>
                                    </li>
                                    <li class="has-mega gc_main_navigation kv_sub_menu">
                                        <a href="#" class="gc_main_navigation">  candidates</a>
                                        <ul class="kv_mega_menu">

                                            <li class="kv_mega_menu_width">
                                                <div class="container">

                                                    <div class="jn_menu_partion_div">

                                                        <div class="candidate_width">
                                                            <div class="jen_tabs_conent_list jb_cover">
                                                                <h1>job skills</h1>
                                                                <ul>
                                                                    <li>
                                                                        <a href="#"><i class="fas fa-square"></i>HTML5 & CSS3</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><i class="fas fa-square"></i>wordpress</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><i class="fas fa-square"></i>javascript</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><i class="fas fa-square"></i>photoshop</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><i class="fas fa-square"></i>designer</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><i class="fas fa-square"></i>construction</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div class="candidate_width">
                                                            <div class="jen_tabs_conent_list jb_cover">
                                                                <h1>categories</h1>
                                                                <ul>
                                                                    <li>
                                                                        <a href="#"><i class="fas fa-square"></i>graphic design</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><i class="fas fa-square"></i>engineering jobs</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><i class="fas fa-square"></i>mainframe jobs</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><i class="fas fa-square"></i>PSU jobs</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><i class="fas fa-square"></i>goverment jobs</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><i class="fas fa-square"></i>IT company</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div class="candidate_width">
                                                            <div class="jen_tabs_conent_list   jb_cover">
                                                                <h1>job location</h1>
                                                                <ul>
                                                                    <li>
                                                                        <a href="#"><i class="fas fa-square"></i>india</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><i class="fas fa-square"></i>united state</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><i class="fas fa-square"></i>japan</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><i class="fas fa-square"></i>dubai</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><i class="fas fa-square"></i>south africa</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="#"><i class="fas fa-square"></i>china</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div class="candidate_width">
                                                            <div class="jen_tabs_conent_list   jb_cover">
                                                                <h1>open jobs</h1>
                                                                <div class="open_jobs_wrapper">
                                                                    <div class="open_jobs_wrapper_1 jb_cover">
                                                                        <img src="images/job1.jpg" alt="img" />
                                                                        <div class="open_job_text">
                                                                            <h3><a href="#">Some designers inelevated the..</a></h3>
                                                                            <p>5 hour ago</p>

                                                                        </div>
                                                                    </div>
                                                                    <div class="open_jobs_wrapper_1 jb_cover">
                                                                        <img src="images/job1.jpg" alt="img" />
                                                                        <div class="open_job_text">
                                                                            <h3><a href="#">Some designers 
            inelevated the..</a></h3>
                                                                            <p>12 hour ago</p>

                                                                        </div>
                                                                    </div>
                                                                    <div class="view_all_job jb_cover"><a href="#">view all jobs</a></div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>

                                                </div>
                                            </li>

                                        </ul>
                                    </li>
                                    <li class="has-mega gc_main_navigation"><a href="#" class="gc_main_navigation active_class">pages</a>
                                        <ul class="navi_2_dropdown">
                                            <li class="parent">
                                                <a href="about_us.html"> <i class="fas fa-square"></i>about us</a>
                                            </li>
                                            <li class="parent">
                                                <a href="companies.html"> <i class="fas fa-square"></i>companies</a>
                                            </li>
                                            <li class="parent">
                                                <a href="company_single.html"> <i class="fas fa-square"></i>company single</a>
                                            </li>
                                            <li class="parent">
                                                <a href="error_page.html"><i class="fas fa-square"></i>error page</a>
                                            </li>
                                            <li class="parent">
                                                <a href="login.html"><i class="fas fa-square"></i>login</a>
                                            </li>
                                            <li class="parent">
                                                <a href="pricing_table.html"><i class="fas fa-square"></i>pricing table</a>
                                            </li>
                                            <li class="parent">
                                                <a href="sign_up.html"><i class="fas fa-square"></i>sign_up</a>
                                            </li>

                                        </ul>
                                    </li>
                                    <li class="has-mega gc_main_navigation"><a href="#" class="gc_main_navigation">dashboard</a>
                                        <ul class="navi_2_dropdown">
                                            <li class="parent">
                                                <a href="#"><i class="fas fa-square"></i>candidate<span><i class="fas fa-chevron-right"></i>
                                                </span></a>
                                                <ul class="dropdown-menu-right">
                                                    <li>
                                                        <a href="https://webstrot.com/html/jbdesk/main_version/dashboard/candidate_applied_job.html"> <i class="fas fa-square"></i>applied job </a>
                                                    </li>
                                                    <li>
                                                        <a href="https://webstrot.com/html/jbdesk/main_version/dashboard/candidate_dashboard.html"> <i class="fas fa-square"></i> dashboard</a>
                                                    </li>
                                                    <li>
                                                        <a href="https://webstrot.com/html/jbdesk/main_version/dashboard/candidate_edit_profile.html"> <i class="fas fa-square"></i>edit profile</a>
                                                    </li>
                                                    <li>
                                                        <a href="https://webstrot.com/html/jbdesk/main_version/dashboard/candidate_favourite_job.html"> <i class="fas fa-square"></i>favourite job</a>
                                                    </li>
                                                    <li>
                                                        <a href="https://webstrot.com/html/jbdesk/main_version/dashboard/candidate_resume.html"> <i class="fas fa-square"></i>resume</a>
                                                    </li>
                                                    <li>
                                                        <a href="https://webstrot.com/html/jbdesk/main_version/dashboard/message.html"> <i class="fas fa-square"></i>message</a>
                                                    </li>
                                                    <li>
                                                        <a href="https://webstrot.com/html/jbdesk/main_version/dashboard/pricing_plans.html"> <i class="fas fa-square"></i>pricing plans</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="parent">
                                                <a href="#"><i class="fas fa-square"></i>company<span><i class="fas fa-chevron-right"></i>
                                                </span></a>
                                                <ul class="dropdown-menu-right">
                                                    <li>
                                                        <a href="https://webstrot.com/html/jbdesk/main_version/dashboard/comp_applications.html"> <i class="fas fa-square"></i>applications </a>
                                                    </li>
                                                    <li>
                                                        <a href="https://webstrot.com/html/jbdesk/main_version/dashboard/comp_company_page.html"> <i class="fas fa-square"></i> company page</a>
                                                    </li>
                                                    <li>
                                                        <a href="https://webstrot.com/html/jbdesk/main_version/dashboard/comp_employer_dashboard.html"> <i class="fas fa-square"></i>dashboard</a>
                                                    </li>
                                                    <li>
                                                        <a href="https://webstrot.com/html/jbdesk/main_version/dashboard/comp_employer_edit_profile.html"> <i class="fas fa-square"></i>edit profile</a>
                                                    </li>
                                                    <li>
                                                        <a href="https://webstrot.com/html/jbdesk/main_version/dashboard/comp_employer_manage_jobs.html"> <i class="fas fa-square"></i>manage jobs</a>
                                                    </li>
                                                    <li>
                                                        <a href="https://webstrot.com/html/jbdesk/main_version/dashboard/comp_post_new_job.html"> <i class="fas fa-square"></i>post new job</a>
                                                    </li>
                                                    <li>
                                                        <a href="https://webstrot.com/html/jbdesk/main_version/dashboard/message.html"> <i class="fas fa-square"></i>message</a>
                                                    </li>
                                                    <li>
                                                        <a href="https://webstrot.com/html/jbdesk/main_version/dashboard/pricing_plans.html"> <i class="fas fa-square"></i>pricing plans</a>
                                                    </li>
                                                </ul>
                                            </li>

                                        </ul>
                                    </li>
                                    <li class="has-mega gc_main_navigation"><a href="#" class="gc_main_navigation">blog</a>
                                        <ul class="navi_2_dropdown">
                                            <li class="parent">
                                                <a href="blog_single.html"> <i class="fas fa-square"></i>blog single</a>
                                            </li>
                                            <li class="parent">
                                                <a href="blog_category_right_sidebar.html"> <i class="fas fa-square"></i>blog category</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><a href="contact_us.html" class="gc_main_navigation">contact</a></li>

                                </ul>
                            </div>
                            <div class="jb_search_btn_wrapper d-none d-sm-none d-md-none d-lg-block d-xl-block">
                                <div class="extra-nav">
                                    <div class="extra-cell">
                                        <button id="quik-search-btn" type="button" class="site-button radius-xl"><i class="fas fa-search"></i></button>
                                    </div>
                                </div>
                                <div class="dez-quik-search bg-primary-dark">
                                    <form action="#">
                                        <input name="search" value="" type="text" class="form-control" placeholder="Type to search..." />
                                        <span id="quik-search-remove"><i class="fas fa-times"></i></span>
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