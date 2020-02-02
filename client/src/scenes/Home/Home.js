import React, { Component } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Chatbot from '../../components/Chatbot';
import MultiSelect from "react-multi-select-component";
import { NavLink, Redirect } from 'react-router-dom';
import { FaApple, FaAmazon, FaAngular, FaThLarge, FaBlog } from 'react-icons/fa';
import Axios from 'axios';

class Home extends Component {
    state = {
        category: 'Category',
        jobTitle: true,
        recomended:[],
        jobTitles: [
            { label: "Database Manager", value: "Database Manager" },
            { label: "Graphic Designer", value: "Graphic Designer" },
            { label: "Mobile App Developer", value: "Mobile App Developer" },
            { label: "Software Developer", value: "Software Developer" },
            { label: "Web Developer", value: "Web Developer" },
            { label: "Data Engineer", value: "Data Engineer" },
            { label: "ML Developer", value: "ML Developer" },
            { label: "Blockchain Developer", value: "Blockchain Developer" },
            { label: "Data Scientist", value: "Data Scientist" },
            { label: "AR Developer", value: "AR Developer" },
            { label: "Game Developer", value: "Game Developer" }
        ],
        options: [
            { label: "machinelearning", value: "machinelearning" },
            { label: "deeplearning", value: "deeplearning" },
            { label: "neural network", value: "neural network" },
            { label: "tensorflow", value: "tensorflow" },
            { label: "opencv", value: "opencv" },
            { label: "object oriented", value: "object oriented" },
            { label: "docker", value: "docker" },
            { label: "scala", value: "scala" },
            { label: "hadoop", value: "hadoop" },
            { label: "sql", value: "sql" },
            { label: "java", value: "java" },
            { label: "jsp", value: "jsp" },
            { label: "servlet", value: "servlet" },
            { label: "c sharp", value: "c sharp" },
            { label: "unity", value: "unity" },
            { label: "blockchain", value: "blockchain" },
            { label: "angular", value: "angular" },
            { label: "django", value: "django" },
            { label: "mongodb", value: "mongodb" },
            { label: "mysql", value: "mysql" },
            { label: "flutter", value: "flutter" },
            { label: "kotlin", value: "kotlin" },
            { label: "photoshop", value: "photoshop" },
            { label: "illustrator", value: "illustrator" },
            { label: "coreldraw", value: "coreldraw" },
            { label: "figma", value: "figma" },
            { label: "css", value: "css" }
        ],
        selected: [],
        selectedJT: []
    }
    change = (event) => {
        console.log('event.target.value')
    }
    optionClicked = (l) => {
        this.setState({ list: l })
    }
    selectedBadgeClicked = (l) => {
        this.setState({ selected: l })
    }
    selectedBadgeJTClicked = (l) => {
        this.setState({ selectedJT: l })
    }
    handleSearch=()=>{
        Axios.get(`http://localhost:5000/search=${this.generateString(this.state.jobTitle?this.state.selectedJT:this.state.selected)}&&${this.state.jobTitle?0:1}`)
        .then(res=>{
            this.setState({data: res.data})
            localStorage.setItem('cache',`${res.data.ranks.ranked}`)
            var arr=res.data.cookie
            var ls=localStorage.getItem('cookie')
            if(!ls){
                localStorage.setItem('cookie','{"java":1}')
            }
            else{
                var obj=JSON.parse(localStorage.getItem('cookie'))
                arr.forEach(i=>{
                    if(i in obj){
                        obj={...obj,[i]:obj[i]+1}
                    }
                    else{
                        obj={...obj,[i]: 1}
                    }
                })
                localStorage.setItem('cookie',JSON.stringify(obj))
            }
            this.props.history.push({
                pathname: '/job-list',
                sProps: {
                    data: this.state.data
                }
            })
        },err=>{
            console.log(err)
        })
    }
    generateString=(a)=>{
        var arr=''
        a.forEach(i=>{
            arr=arr+','+i.value
        })

        return arr.slice(1)
    }
    componentDidMount() {
        window.scrollTo(0, 0)
        setTimeout(() => {
            if (document.getElementById('loader')) {
                document.getElementById('loader').classList.add('loaded')
            }
            console.log("running")
        }, 1000)
        Axios.get(`http://localhost:5000/recommend=${localStorage.getItem('cookie')?localStorage.getItem('cookie'):'{"java": 1}'}`)
        .then(res=>{
            console.log(res.data)
            this.setState({recomended: res.data})
            // localStorage.setItem('cookie',JSON.stringify(res.data))
        }
        )
    }
    render() {
        console.log(this.generateString(this.state.selectedJT))
        const renderRec=this.state.recomended.slice(0,6).map(i=>{
            return(
                <div class="job_listing_left_fullwidth job_listing_grid_wrapper index2_listing_jobs index3_listing_jobs jb_cover">
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-12">

                            <div class="jp_job_post_side_img">
                                <img src="images/lt5.png" alt="post_img" />

                            </div>
                            <div class="jp_job_post_right_cont">
                                <h4><a href="#"> {i} </a></h4>
                                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                            </div>
                        </div>

                    </div>
                </div>
            )
        })
        const renderRecent=localStorage.getItem('cache').split(',').slice(0,6).map(i=>{
            return(
                <div class="col-lg-6 col-md-12 col-sm-12 col-12">
                    <div class="jp_recent_resume_box_wrapper jb_cover">
                        <div class="jp_recent_resume_img_wrapper">
                            <img src="images/cmnt4.png" alt="resume_img" />
                        </div>
                        <div class="jp_recent_resume_cont_wrapper">
                            <h3> <a href="#"> {i} </a></h3>
                            <p><i class="far fa-folder-open"></i>UI Designer</p>
                        </div>
                        <div class="jp_recent_resume_btn_wrapper">
                            <ul>
                                <li onClick={()=>window.open(`http://localhost:5000/Resumes/${i}.pdf`)} ><a>View Profile</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        })
        const selectedOptionsStyles = {
            color: "#3c763d",
            backgroundColor: "#dff0d8"
        };
        const optionsListStyles = {
            backgroundColor: "#dff0d8",
            color: "#3c763d"
        };
        return (
            <React.Fragment>
                <Header />
                <div id='loader' class="jb_preloader">
                    <div class="spinner_wrap">
                        <div class="spinner"></div>
                    </div>
                </div>
                {/* <div class="cursor cursor2 cursor3"></div> */}
                <div class="main_slider_wrapper slider-area jb_cover">
                    <div class="mains_slider_shaper">
                        <img src="images/slider_bg.png" class="img-responsive" alt="img" />
                    </div>
                    <div class="slider_small2_shape">
                        <img src="images/shape4.png" class="img-responsive " alt="img" />
                    </div>
                    <div class="slider_shape_smt bubble-1">
                        <img src="images/bubble.png" class="img-responsive " alt="img" />
                    </div>
                    <div id="carousel-example-generic" class="carousel slide" data-ride="carousel" data-interval="false">
                        <div class="carousel-inner" role="listbox">
                            <div class="carousel-item active">
                                <div class="carousel-captions caption-1">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                                <div class="content">
                                                    <div class="slider_shape_smt1 bubble-2">
                                                        <img src="images/bubble.png" class="img-responsive " alt="img" />
                                                    </div>
                                                    <h2 data-animation="animated fadeInUp">We Offer <span> 50+ </span>Highly qualified candidates Right Now!.</h2>

                                                    <p data-animation="animated fadeInUp">The most complete field service software for IT & Mobile Support, Fire Services, Electrical, Maintenance, HVAC & Security Industries</p>
                                                    <div data-animation="animated fadeInUp" class="btn_hover slider_btn">
                                                        <a href="#">sign up free</a>
                                                    </div>
                                                    <div data-animation="animated fadeInUp" class="slider_icon_list">
                                                        <ul>

                                                            <li><a href="#"><i><FaApple /></i></a>
                                                            </li>
                                                            <li><a href="#"><i><FaAmazon /></i></a>
                                                            </li>
                                                            <li><a href="#"><i><FaAngular /></i></a>
                                                            </li>
                                                            <li><a href="#"><i><FaThLarge /></i></a>
                                                            </li>
                                                            <li><a href="#"><i><FaBlog /></i></a>
                                                            </li>

                                                        </ul>
                                                    </div>
                                                    <div class="clear"></div>
                                                </div>
                                            </div>
                                            <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                                <div class="slider_shape_sm3 bubble-3">
                                                    <img src="images/bubble.png" class="img-responsive " alt="img" />
                                                </div>
                                                <div class="slider_side_img jb_cover">
                                                    <img src="images/slider_img.png" class="img-responsive" alt="img" />

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="carousel-captions caption-2">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                                <div class="content">
                                                    <div class="slider_shape_smt1 bubble-4">
                                                        <img src="images/bubble.png" class="img-responsive" alt="img" />
                                                    </div>
                                                    <h2 data-animation="animated fadeInUp">We Offer <span> 25,000 </span>Job
            Vacancies Right Now!.</h2>

                                                    <p data-animation="animated fadeInUp">The most complete field service software for IT & Mobile Support, Fire Services, Electrical, Maintenance, HVAC & Security Industries</p>
                                                    <div data-animation="animated fadeInUp" class="btn_hover slider_btn">
                                                        <a href="#">sign up free</a>
                                                    </div>
                                                    <div data-animation="animated fadeInUp" class="slider_icon_list">
                                                        <ul>

                                                            <li><a href="#"><i><FaApple /></i></a>
                                                            </li>
                                                            <li><a href="#"><i><FaAmazon /></i></a>
                                                            </li>
                                                            <li><a href="#"><i><FaAngular /></i></a>
                                                            </li>
                                                            <li><a href="#"><i><FaThLarge /></i></a>
                                                            </li>
                                                            <li><a href="#"><i><FaBlog /></i></a>
                                                            </li>

                                                        </ul>
                                                    </div>
                                                    <div class="clear"></div>
                                                </div>
                                            </div>
                                            <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                                <div class="slider_shape_sm3 bubble-5">
                                                    <img src="images/bubble.png" class="img-responsive" alt="img" />
                                                </div>
                                                <div class="slider_side_img jb_cover">
                                                    <img src="images/slider_img.png" class="img-responsive" alt="img" />

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="carousel-captions caption-3">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                                <div class="content">
                                                    <div class="slider_shape_smt1 bubble-6">
                                                        <img src="images/bubble.png" class="img-responsive" alt="img" />
                                                    </div>
                                                    <h2 data-animation="animated fadeInUp">We Offer <span> 25,000 </span>Job
            Vacancies Right Now!.</h2>

                                                    <p data-animation="animated fadeInUp">The most complete field service software for IT & Mobile Support, Fire Services, Electrical, Maintenance, HVAC & Security Industries</p>
                                                    <div data-animation="animated fadeInUp" class="btn_hover slider_btn">
                                                        <a href="#">sign up free</a>
                                                    </div>
                                                    <div data-animation="animated fadeInUp" class="slider_icon_list">
                                                        <ul>

                                                            <li><a href="#"><i><FaApple /></i></a>
                                                            </li>
                                                            <li><a href="#"><i><FaAmazon /></i></a>
                                                            </li>
                                                            <li><a href="#"><i><FaAngular /></i></a>
                                                            </li>
                                                            <li><a href="#"><i><FaThLarge /></i></a>
                                                            </li>
                                                            <li><a href="#"><i><FaBlog /></i></a>
                                                            </li>

                                                        </ul>
                                                    </div>
                                                    <div class="clear"></div>
                                                </div>
                                            </div>
                                            <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                                <div class="slider_shape_sm3 bubble-7">
                                                    <img src="images/bubble.png" class="img-responsive" alt="img" />
                                                </div>
                                                <div class="slider_side_img jb_cover">
                                                    <img src="images/slider_img.png" class="img-responsive" alt="img" />

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ol class="carousel-indicators">
                                <li data-target="#carousel-example-generic" data-slide-to="0" class="active">
                                </li>
                                <li data-target="#carousel-example-generic" data-slide-to="1" class="">
                                </li>
                                <li data-target="#carousel-example-generic" data-slide-to="2" class="">
                                </li>
                            </ol>
                            <div class="carousel-nevigation">
                                <a class="prev" href="#carousel-example-generic" role="button" data-slide="prev"><i class="flaticon-left-arrow"></i>
                                </a>
                                <a class="next" href="#carousel-example-generic" role="button" data-slide="next"><i class="flaticon-right-arrow"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="slider_small_shape">
                        <img src="images/shape4.png" class="img-responsive" alt="img" />
                    </div>
                </div>
                <div class="index3_form_wrapper jb_cover">
                    <div class="slider_small3_shape">
                        <img src="images/shape4.png" class="img-responsive" alt="img" />
                    </div>

                    <div class="container">
                        <div class="latest_job_tabs index2_tab_wrapper index3_tab_wrapper jb_cover">
                            <ul class="nav nav-tabs">
                                <li onClick={() => this.setState({ jobTitle: true })} class="nav-item"> <a class="nav-link active" data-toggle="tab">Job Title</a>
                                </li>
                                <li onClick={() => this.setState({ jobTitle: false })} class="nav-item"> <a class="nav-link " data-toggle="tab" >Skill Set</a>
                                </li>

                            </ul>
                        </div>
                        {this.state.jobTitle ? (
                            <React.Fragment>
                                <div style={{ fontSize: 24, padding: 16, letterSpacing: 2 }} >Job Title</div>
                                <MultiSelect
                                    theme={
                                        {
                                            "hover": "#f1f3f5",
                                            "height": "58px"
                                        }
                                    }
                                    options={this.state.jobTitles}
                                    value={this.state.selectedJT}
                                    onChange={this.selectedBadgeJTClicked}
                                    labelledBy={"Select"}
                                />
                            </React.Fragment>
                        ) : (
                                <React.Fragment>
                                    <div style={{ fontSize: 24, padding: 16, letterSpacing: 2 }} >Skill Set</div>
                                    <MultiSelect
                                        theme={
                                            {
                                                "hover": "#f1f3f5",
                                                "height": "58px"
                                            }
                                        }
                                        options={this.state.options}
                                        value={this.state.selected}
                                        onChange={this.selectedBadgeClicked}
                                        labelledBy={"Select"}
                                    />
                                </React.Fragment>
                            )}
                        <div style={{ display: 'flex', marginTop: 20 }} >
                            <div onClick={this.handleSearch} style={{ margin: 'auto' }} data-animation="animated fadeInUp" class="btn_hover slider_btn">
                                <a>Search</a>
                            </div>
                        </div>
                        <div class="row">
                        </div>
                    </div>
                </div>
                <div class="best_jobs_wrapper index3_best_job_wrapper  jb_cover">
                    <div class="line_shape">
                        <img src="images/line.png" class="img-responsive" alt="img" />
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-10 offset-lg-1 col-md-12 col-sm-12">
                                <div class="jb_heading_wraper">

                                    <h3>Recomended</h3>

                                    <p>These are some of the recomendations based on your interests</p>
                                </div>
                            </div>
                            <div class="col-xl-12 col-lg-12 col-md-12">
                                <div class="tab-content">
                                    <div id="home" class="tab-pane active">
                                        <div class="row">
                                            {renderRec}
                                        </div>
                                    </div>
                                    <div id="menu1" class="tab-pane fade">
                                        <div class="row">
                                            <div class="col-lg-6 col-md-12 col-sm-12">

                                                <div class="job_listing_left_fullwidth job_listing_grid_wrapper index2_listing_jobs index3_listing_jobs jb_cover">
                                                    <div class="row">
                                                        <div class="col-lg-12 col-md-12 col-sm-12 col-12">

                                                            <div class="jp_job_post_side_img">
                                                                <img src="images/lt2.png" alt="post_img" />

                                                            </div>
                                                            <div class="jp_job_post_right_cont">
                                                                <h4><a href="#">web  Designer </a></h4>

                                                                <ul>
                                                                    <li><i class="flaticon-cash"></i>&nbsp; $12K - 15k P.A.</li>
                                                                    <li><i class="flaticon-location-pointer"></i>&nbsp; RG40, Wokingham</li>
                                                                </ul>
                                                                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-6 col-md-12 col-sm-12">

                                                <div class="job_listing_left_fullwidth job_listing_grid_wrapper index2_listing_jobs index3_listing_jobs jb_cover">
                                                    <div class="row">
                                                        <div class="col-lg-12 col-md-12 col-sm-12 col-12">

                                                            <div class="jp_job_post_side_img">
                                                                <img src="images/lt3.png" alt="post_img" />

                                                            </div>
                                                            <div class="jp_job_post_right_cont">
                                                                <h4><a href="#">php  developer </a></h4>

                                                                <ul>
                                                                    <li><i class="flaticon-cash"></i>&nbsp; $12K - 15k P.A.</li>
                                                                    <li><i class="flaticon-location-pointer"></i>&nbsp; RG40, Wokingham</li>
                                                                </ul>
                                                                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-6 col-md-12 col-sm-12">

                                                <div class="job_listing_left_fullwidth job_listing_grid_wrapper index2_listing_jobs index3_listing_jobs jb_cover">
                                                    <div class="row">
                                                        <div class="col-lg-12 col-md-12 col-sm-12 col-12">

                                                            <div class="jp_job_post_side_img">
                                                                <img src="images/lt4.png" alt="post_img" />

                                                            </div>
                                                            <div class="jp_job_post_right_cont">
                                                                <h4><a href="#">graphic  Designer </a></h4>

                                                                <ul>
                                                                    <li><i class="flaticon-cash"></i>&nbsp; $12K - 15k P.A.</li>
                                                                    <li><i class="flaticon-location-pointer"></i>&nbsp; RG40, Wokingham</li>
                                                                </ul>
                                                                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-6 col-md-12 col-sm-12">

                                                <div class="job_listing_left_fullwidth job_listing_grid_wrapper index2_listing_jobs index3_listing_jobs jb_cover">
                                                    <div class="row">
                                                        <div class="col-lg-12 col-md-12 col-sm-12 col-12">

                                                            <div class="jp_job_post_side_img">
                                                                <img src="images/lt5.png" alt="post_img" />

                                                            </div>
                                                            <div class="jp_job_post_right_cont">
                                                                <h4><a href="#">software eng. </a></h4>

                                                                <ul>
                                                                    <li><i class="flaticon-cash"></i>&nbsp; $12K - 15k P.A.</li>
                                                                    <li><i class="flaticon-location-pointer"></i>&nbsp; RG40, Wokingham</li>
                                                                </ul>
                                                                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-6 col-md-12 col-sm-12">

                                                <div class="job_listing_left_fullwidth job_listing_grid_wrapper index2_listing_jobs index3_listing_jobs jb_cover">
                                                    <div class="row">
                                                        <div class="col-lg-12 col-md-12 col-sm-12 col-12">

                                                            <div class="jp_job_post_side_img">
                                                                <img src="images/lt5.png" alt="post_img" />

                                                            </div>
                                                            <div class="jp_job_post_right_cont">
                                                                <h4><a href="#">wordpress developer</a></h4>

                                                                <ul>
                                                                    <li><i class="flaticon-cash"></i>&nbsp; $12K - 15k P.A.</li>
                                                                    <li><i class="flaticon-location-pointer"></i>&nbsp; RG40, Wokingham</li>
                                                                </ul>
                                                                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-6 col-md-12 col-sm-12">

                                                <div class="job_listing_left_fullwidth job_listing_grid_wrapper index2_listing_jobs index3_listing_jobs jb_cover">
                                                    <div class="row">
                                                        <div class="col-lg-12 col-md-12 col-sm-12 col-12">

                                                            <div class="jp_job_post_side_img">
                                                                <img src="images/lt1.png" alt="post_img" />

                                                            </div>
                                                            <div class="jp_job_post_right_cont">
                                                                <h4><a href="#">graphic  Designer </a></h4>

                                                                <ul>
                                                                    <li><i class="flaticon-cash"></i>&nbsp; $12K - 15k P.A.</li>
                                                                    <li><i class="flaticon-location-pointer"></i>&nbsp; RG40, Wokingham</li>
                                                                </ul>
                                                                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="btn_hover slider_btn jobs_btn_3 jb_cover">
                                    <a href="#">view all</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="slider_small3_shape">
                        <img src="images/shape4.png" class="img-responsive" alt="img" />
                    </div>
                </div>
                <div class="counter_wrapper counter_3_wrapper jb_cover">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                <div class="counter_mockup_design jb_cover">

                                    <img src="images/mockup6.png" class="img-responsive" alt="img" />
                                </div>
                                <div class="counter_jbbb jb_cover">

                                    <img src="images/line2.png" class="img-responsive" alt="img" />
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                <div class="counter_right_wrapper counter_index3_right jb_cover">
                                    <h1>Some Statistical Facts</h1>
                                    <div class="counter_width">
                                        <div class="counter_cntnt_box">

                                            <div class="count-description"><span class="timer">56</span>
                                                <p class="con2">Candidate profiles</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="counter_width">
                                        <div class="counter_cntnt_box">

                                            <div class="count-description"> <span class="timer">15</span><span>+</span>
                                                <p class="con2">Job Titles</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="counter_width">
                                        <div class="counter_cntnt_box">

                                            <div class="count-description"> <span class="timer">30</span><span>+</span>
                                                <p class="con2">Skills</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="services_wrapper control_wrapper jb_cover">
                    <div class="slider_small_shape44">
                        <img src="images/shape4.png" class="img-responsive " alt="img" />
                    </div>
                    <div class="counter_jbbb2 jb_cover">

                        <img src="images/line3.png" class="img-responsive" alt="img" />
                    </div>

                    <div class="container">
                        <div class="row">
                            <div class="col-lg-10 offset-lg-1 col-md-12 col-sm-12">
                                <div class="jb_heading_wraper">

                                    <h3>We Are Good In
            </h3>

                                    <p>Your next level Product developemnt company assets</p>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                                <div class="services_content jb_cover">
                                    <img src="images/c1.png" alt="img" />
                                    <h3><a href="#">job managment </a></h3>
                                    <p>Create jobs, allocate to technicians, track time & materials to determine job profitability </p>

                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                                <div class="services_content jb_cover">
                                    <img src="images/c2.png" alt="img" />
                                    <h3><a href="#">easy to access</a></h3>
                                    <p>ML based resume segredation for quick and easy access</p>

                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                                <div class="services_content jb_cover">
                                    <img src="images/c3.png" alt="img" />
                                    <h3><a href="#">flexible invoicing</a></h3>
                                    <p>Create jobs, allocate to technicians, track time & materials to determine job profitability </p>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="slider_small3_shape">
                        <img src="images/shape4.png" class="img-responsive" alt="img" />
                    </div>

                </div>
                <div class="download_wrapper index3_download jb_cover">
                    <div class="line_shape">
                        <img src="images/line.png" class="img-responsive" alt="img" />
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                <div class="download_mockup_design jb_cover">

                                    <img src="images/mockup7.png" class="img-responsive" alt="img" />
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                <div class="download_app_store jb_cover">
                                    <h1>Download</h1>
                                    <h2>Jobiffy App Now!</h2>
                                    <p>All it takes is 30 seconds to Download. Your Mobile App for Job
                                        <br /> Fast, Simple & Delightful.</p>
                                    <div class="app_btn playstore_2 jb_cover">
                                        <a href="#" class="ss_playstore"><span><i class="flaticon-android-logo"></i></span> Play Store</a>
                                        <a href="#" class="ss_appstore"><span><i class="flaticon-apple"></i></span> App Store</a>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="pricing_table_3 recent_resume_wrapper jb_cover">
                    <div class="slider_small_shape44">
                        <img src="images/p2.png" class="img-responsive " alt="img" />
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-10 offset-lg-1 col-md-12 col-sm-12">
                                <div class="jb_heading_wraper">

                                    <h3>recent resume
            </h3>

                                    <p>Your next level Product developemnt company assets</p>
                                </div>
                            </div>
                            {renderRecent}
                            {/* <div class="btn_hover slider_btn jobs_btn_3 vb jb_cover">
                                <a href="#">view all</a>
                            </div> */}
                        </div>
                    </div>
                    <div class="counter_jbbb2 jb_cover">

                        <img src="images/line3.png" class="img-responsive" alt="img" />
                    </div>
                </div>
                <Chatbot />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Home;