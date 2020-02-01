import React, { Component } from 'react';

class Card extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <div class="col-lg-6 col-md-6 col-sm-12">
                    <div class="job_listing_left_fullwidth job_listing_grid_wrapper jb_cover">
                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-12">
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
                            <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                                <div class="jp_job_post_right_btn_wrapper jb_cover">
                                    <ul>
                                        <li>
                                            <div class="job_adds_right">
                                                <a href="#!"><i class="far fa-heart"></i></a>
                                            </div>
                                        </li>
                                        <li><a href="job_single.html">Part Time</a></li>
                                        <li> <a href="#" data-toggle="modal" data-target="#myModal01">apply</a></li>
                                    </ul>
                                </div>
                                <div class="modal fade apply_job_popup" id="myModal01" role="dialog">
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
                                                                    <input type="file" id="input-file-now-custom-01" class="dropify" data-height="90" /><span class="post_photo">upload resume</span>
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
            </React.Fragment>
         );
    }
}
 
export default Card;