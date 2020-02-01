import React, { Component } from 'react';
import Header from '../../components/Header';
import Card from './Card';
import JobCategory from './JobCategory';
import JobLocation from './JobLocation';
import JobSkills from './JobSkills';
import JobSalary from './JobSalary';
import Footer from '../../components/Footer';

class JobList extends Component {
    state = {  }
    componentDidMount(){
        window.scrollTo(0, 0)
        window.addEventListener('load', this.handleLoad);
        setTimeout(()=>{
            if(document.getElementById('loader')){
                document.getElementById('loader').classList.add('loaded')
            }
            console.log("running")
        },1000)
    }
    handleLoad=()=>{
        // window.onload()
    }
    render() {
        console.log(this.props.location.searchProps)
        const renderCard=[1,2,3,4].map(i=>{
            return(
                <Card />
            )
        })
        return ( 
            <React.Fragment>
                <Header />
                <div id='loader' class="jb_preloader">
                    <div class="spinner_wrap">
                        <div class="spinner"></div>
                    </div>
                </div>
                {/* <div class="cursor cursor2 cursor3"></div> */}
                <div class="page_title_section">

                    <div class="page_header">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-9 col-md-9 col-12 col-sm-8">

                                    <h1>job listing</h1>
                                </div>
                                <div class="col-lg-3 col-md-3 col-12 col-sm-4">
                                    <div class="sub_title_section">
                                        <ul class="sub_title">
                                            <li> <a href="#"> Home </a>&nbsp; / &nbsp; </li>
                                            <li>job listing</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="job_filter_listing_wrapper jb_cover">
                    <div class="container">

                        <div class="row">
                            <div class="col-lg-3 col-md-12 col-sm-12 col-12 d-none d-sm-none d-md-none d-lg-block d-xl-block">
                                <JobCategory />
                                <JobLocation />
                                <JobSkills />
                                <JobSalary />
                            </div>
                            <div class="col-lg-9 col-md-12 col-sm-12 col-12">
                                <div class="job_listing_left_side jb_cover">
                                    <div class="filter-area jb_cover">

                                        <select>
                                            <option>sort by</option>
                                            <option>most recent </option>
                                            <option>most popular</option>
                                            <option>top rated</option>
                                        </select>

                                        <div class="list-grid">
                                            <ul class="nav nav-tabs">
                                                <li class="nav-item">
                                                    <a class="nav-link active" data-toggle="tab" href="#grid"> <i class="flaticon-four-grid-layout-design-interface-symbol"></i></a>
                                                </li>
                                                <li class="nav-item"> <a class="nav-link" data-toggle="tab" href="#list"><i class="flaticon-list"></i></a>
                                                </li>

                                            </ul>
                                        </div>
                                        <div class="showpro">
                                            <p>You're Watching 01 to 20</p>
                                        </div>
                                    </div>
                                    <div class="tab-content btc_shop_index_content_tabs_main jb_cover">
                                        <div id="grid" class="tab-pane active">
                                            <div class="row">
                                                {renderCard}
                                            </div>
                                        </div>
                                        <div id="list" class="tab-pane fade">
                                            <div class="row">

                                                <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                                                    <div class="job_listing_left_fullwidth jb_cover">
                                                        <div class="row">
                                                            <div class="col-lg-9 col-md-9 col-sm-12 col-12">
                                                                <div class="jp_job_post_side_img">
                                                                    <img src="images/lt1.png" alt="post_img" />
                                                                    <br/> <span>google</span>
                                                                </div>
                                                                <div class="jp_job_post_right_cont">
                                                                    <h4><a href="#">Trainee Web Designer, (Fresher)</a></h4>

                                                                    <ul>
                                                                        <li><i class="flaticon-cash"></i>&nbsp; $12K - 15k P.A.</li>
                                                                        <li><i class="flaticon-location-pointer"></i>&nbsp; Los Angeles, Califonia PO, 455001</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div class="col-lg-3 col-md-3 col-sm-12 col-12">
                                                                <div class="jp_job_post_right_btn_wrapper">
                                                                    <ul>
                                                                        <li>
                                                                            <div class="job_adds_right">
                                                                                <a href="#!"><i class="far fa-heart"></i></a>
                                                                            </div>
                                                                        </li>
                                                                        <li><a href="job_single.html">Part Time</a></li>
                                                                        <li> <a href="#" data-toggle="modal" data-target="#myModal1">apply</a></li>
                                                                    </ul>
                                                                </div>
                                                                <div class="modal fade apply_job_popup" id="myModal1" role="dialog">
                                                                    <div class="modal-dialog">
                                                                        <div class="modal-content">
                                                                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                                                                            <div class="row">
                                                                                <div class="col-lg-12 col-md-12 col-sm-12 col-12">

                                                                                    <div class="apply_job jb_cover">
                                                                                        <h1>apply for this job :</h1>
                                                                                        <div class="search_alert_box jb_cover">

                                                                                            <div class="apply_job_form">

                                                                                                <input type="text" name="name" placeholder="full name"/>
                                                                                            </div>
                                                                                            <div class="apply_job_form">

                                                                                                <input type="text" name="Email" placeholder="Enter Your Email"/>
                                                                                            </div>
                                                                                            <div class="apply_job_form">
                                                                                                <textarea class="form-control" name="message" placeholder="Message"></textarea>
                                                                                            </div>

                                                                                            <div class="resume_optional jb_cover">
                                                                                                <p>resume (optional)</p>
                                                                                                <div class="width_50">
                                                                                                    <input type="file" id="input-file-now-custom-1" class="dropify" data-height="90" /><span class="post_photo">upload resume</span>
                                                                                                </div>
                                                                                                <p class="word_file"> microsoft word or pdf file only (5mb)</p>
                                                                                            </div>

                                                                                        </div>
                                                                                        <div class="header_btn search_btn applt_pop_btn jb_cover">

                                                                                            <a href="#">apply now</a>

                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                                                    <div class="job_listing_left_fullwidth jb_cover">
                                                        <div class="row">
                                                            <div class="col-lg-9 col-md-9 col-sm-12 col-12">
                                                                <div class="jp_job_post_side_img">
                                                                    <img src="images/lt4.png" alt="post_img" />
                                                                    <br/> <span>google</span>
                                                                </div>
                                                                <div class="jp_job_post_right_cont">
                                                                    <h4><a href="#">Power Systems Experience Designer </a></h4>

                                                                    <ul>
                                                                        <li><i class="flaticon-cash"></i>&nbsp; $12K - 15k P.A.</li>
                                                                        <li><i class="flaticon-location-pointer"></i>&nbsp; Los Angeles, Califonia PO, 455001</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div class="col-lg-3 col-md-3 col-sm-12 col-12">
                                                                <div class="jp_job_post_right_btn_wrapper">
                                                                    <ul>
                                                                        <li>
                                                                            <div class="job_adds_right">
                                                                                <a href="#!"><i class="far fa-heart"></i></a>
                                                                            </div>
                                                                        </li>
                                                                        <li><a href="job_single.html">Part Time</a></li>
                                                                        <li> <a href="#" data-toggle="modal" data-target="#myModal2">apply</a></li>
                                                                    </ul>
                                                                </div>
                                                                <div class="modal fade apply_job_popup" id="myModal2" role="dialog">
                                                                    <div class="modal-dialog">
                                                                        <div class="modal-content">
                                                                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                                                                            <div class="row">
                                                                                <div class="col-lg-12 col-md-12 col-sm-12 col-12">

                                                                                    <div class="apply_job jb_cover">
                                                                                        <h1>apply for this job :</h1>
                                                                                        <div class="search_alert_box jb_cover">

                                                                                            <div class="apply_job_form">

                                                                                                <input type="text" name="name" placeholder="full name"/>
                                                                                            </div>
                                                                                            <div class="apply_job_form">

                                                                                                <input type="text" name="Email" placeholder="Enter Your Email"/>
                                                                                            </div>
                                                                                            <div class="apply_job_form">
                                                                                                <textarea class="form-control" name="message" placeholder="Message"></textarea>
                                                                                            </div>

                                                                                            <div class="resume_optional jb_cover">
                                                                                                <p>resume (optional)</p>
                                                                                                <div class="width_50">
                                                                                                    <input type="file" id="input-file-now-custom-2" class="dropify" data-height="90" /><span class="post_photo">upload resume</span>
                                                                                                </div>
                                                                                                <p class="word_file"> microsoft word or pdf file only (5mb)</p>
                                                                                            </div>

                                                                                        </div>
                                                                                        <div class="header_btn search_btn applt_pop_btn jb_cover">

                                                                                            <a href="#">apply now</a>

                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                        </div>
                                        <div class="blog_pagination_section jb_cover">
                                            <ul>
                                                <li>
                                                    <a href="#" class="prev"> <i class="flaticon-left-arrow"></i> </a>
                                                </li>
                                                <li><a href="#">1</a>
                                                </li>
                                                <li class="third_pagger"><a href="#">2</a>
                                                </li>
                                                <li class="d-block d-sm-block d-md-block d-lg-block"><a href="#">3</a>
                                                </li>
                                                <li class="d-none d-sm-block d-md-block d-lg-block"><a href="#">...</a>
                                                </li>
                                                <li class="d-none d-sm-block d-md-block d-lg-block"><a href="#">6</a>
                                                </li>

                                                <li>
                                                    <a href="#" class="next"> <i class="flaticon-right-arrow"></i> </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-12 col-sm-12 col-12 d-block d-sm-block d-md-block d-lg-none d-xl-none">
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
         );
    }
}
 
export default JobList;