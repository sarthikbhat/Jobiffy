import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaPinterest, FaUser, FaFacebook, FaEnvelope, FaLock } from 'react-icons/fa';
import Axios from 'axios';
import { Link } from 'react-router-dom';

class Signup extends Component {
    state = { 
        email: '',
        fn: '',
        password: ''
     }
    handleEmail=(event)=>{
        this.setState({email: event.target.value})
    }
    handlePassword=(event)=>{
        this.setState({password: event.target.value})
    }
    handleFullName=(event)=>{
        this.setState({fn: event.target.value})
    }
    handleLogin=()=>{
        console.log('in')
        Axios.get(`http://localhost:5000/signup=${this.state.email}&&${this.state.fn}&&${this.state.password}`)
        .then(res=>{
            if(res.data.status==200){
                alert('New user created')
                this.props.history.push({
                    pathname: '/'
                })
            }
            else if(res.data.status==401){
                alert('Incorrect password')
            }
        },err=>{
            alert('Username or password is inorrect')
        })
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

                                    <h1>sign up</h1>
                                </div>
                                <div class="col-lg-3 col-md-4 col-12 col-sm-5">
                                    <div class="sub_title_section">
                                        <ul class="sub_title">
                                        <li> <Link to="/search"> Home </Link>&nbsp; / &nbsp; </li>
                                            <li>sign up</li>
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
                                    <div class="login_form_wrapper signup_wrapper">
                                        <h2>sign up</h2>
                                        <div class="form-group icon_form comments_form">

                                            <input onChange={this.handleFullName} type="text" class="form-control require" name="full_name" placeholder="Full Name*" />
                                            <i><FaUser/></i>
                                        </div>
                                        <div class="form-group icon_form comments_form">

                                            <input onChange={this.handleEmail} type="text" class="form-control require" name="full_name" placeholder="Email Address*" />
                                            <i><FaEnvelope/></i>
                                        </div>
                                        <div class="form-group icon_form comments_form">

                                            <input onChange={this.handlePassword} type="password" class="form-control require" placeholder="Password *" />
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

                                            <a>sign up</a>
                                        </div>
                                        <div class="dont_have_account jb_cover">
                                            <p>Don’t have an acount ? <a href="/">login</a></p>
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

export default Signup;