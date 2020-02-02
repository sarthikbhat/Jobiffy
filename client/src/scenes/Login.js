import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaPinterest, FaUser, FaFacebook, FaEnvelope, FaLock } from 'react-icons/fa';
import Axios from 'axios';
import { Link } from 'react-router-dom';

class Login extends Component {
    state = { 
        email: '',
        password: ''
     }
    //  romilshah525
    //  mumbai
    handleLogin=()=>{
         console.log('in')
         Axios.get(`http://localhost:5000/login=${this.state.email}&&${this.state.password}`)
         .then(res=>{
             if(res.data.status==200){
                 this.props.history.push({
                     pathname: '/search'
                 })
             }
             else if(res.data.status==401){
                 alert('Incorrect password')
             }
         },err=>{
             alert('Username or password is inorrect')
         })
     }
    handleEmail=(event)=>{
        this.setState({email: event.target.value})
    }
    handlePassword=(event)=>{
        console.log(event.target.password)
        this.setState({password: event.target.value})
    }
    render() { 
        return ( 
            <React.Fragment>
                {/* <Header /> */}
                <div class="page_title_section">

                    <div class="page_header">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-9 col-md-8 col-12 col-sm-7">

                                    <h1>login</h1>
                                </div>
                                <div class="col-lg-3 col-md-4 col-12 col-sm-5">
                                    <div class="sub_title_section">
                                        <ul class="sub_title">
                                        <li> <Link to="/search"> Home </Link>&nbsp; / &nbsp; </li>
                                            <li>login</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="login_wrapper jb_cover">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12">
                                <div class="login_top_box jb_cover">
                                    <div class="login_banner_wrapper">
                                        <img src="images/logo.png" alt="logo" />
                                        <div class="header_btn search_btn facebook_wrap jb_cover">

                                            <a href="#">login with facebook <i><FaFacebook/></i></a>

                                        </div>
                                        <div class="header_btn search_btn google_wrap jb_cover">

                                            <a href="#">login with pinterest <i><FaPinterest/></i></a>

                                        </div>
                                        <div class="jp_regis_center_tag_wrapper jb_register_red_or">
                                            <h1>OR</h1>
                                        </div>
                                    </div>
                                    <div class="login_form_wrapper">
                                        <h2>login</h2>
                                        <div class="form-group icon_form comments_form">

                                            <input value={this.state.email} onChange={this.handleEmail} type="text" class="form-control require" name="full_name" placeholder="Email Address*" />
                                            <i><FaEnvelope/></i>
                                        </div>
                                        <div class="form-group icon_form comments_form">

                                            <input onChange={this.handlePassword} value={this.state.password} type="password" class="form-control require" placeholder="Password *" />
                                            <i><FaLock/></i>
                                        </div>
                                        <div class="login_remember_box">
                                            <label class="control control--checkbox">Remember me
                                                <input type="checkbox" />
                                                <span class="control__indicator"></span>
                                            </label>
                                            <a href="#" class="forget_password">
                                                Forgot Password
                                            </a>
                                        </div>
                                        <div onClick={this.handleLogin} class="header_btn search_btn login_btn jb_cover">
                                            <a href="#">login</a>
                                        </div>
                                        <div class="dont_have_account jb_cover">
                                            <p>Don’t have an acount ? <a href="/signup">Sign up</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="news_letter_wrapper jb_cover">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12">
                                <div class="job_newsletter_wrapper jb_cover">
                                    <div class="jb_newslwtteter_left">
                                        <h2> Looking For A Job</h2>
                                        <p>Your next level Product developemnt company assetsYour next level Product </p>
                                    </div>
                                    <div class="jb_newslwtteter_button">
                                        <div class="header_btn search_btn news_btn jb_cover">

                                            <a href="#">submit</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
         );
    }
}
 
export default Login;