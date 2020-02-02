import React, { Component } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkedAlt, FaUserAlt, FaComment } from 'react-icons/fa';
import Speech from 'react-speech';
import Header from '../components/Header';
import Footer from '../components/Footer';

class Contact extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <Header />
                <div class="contact_icon_section jb_cover">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-10 offset-lg-1 col-md-12 col-sm-12">
                                <div class="jb_heading_wraper">

                                    <h3>contact with us</h3>

                                    <p>Your next level Product developemnt company assets</p>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-12">
                                <div class="contact_main jb_cover">
                                    <h4>contact us</h4>
                                    <div class="contact_rotate">
                                        <i><FaPhone/></i>
                                    </div>

                                    <p>+1800-148-423

                            <br /> +9175-148-124</p>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-12">
                                <div class="contact_main jb_cover">
                                    <h4>Email</h4>
                                    <div class="contact_rotate">
                                    <i><FaEnvelope/></i>
                                    </div>

                                    <p><a href="#">jbdesks@example.com </a>
                                        <br /><a href="#">support@example.com</a></p>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-12">
                                <div class="contact_main jb_cover">
                                    <h4>location</h4>
                                    <div class="contact_rotate">

                                    <i><FaMapMarkedAlt/></i>
                                    </div>

                                    <p>51-Maxico ,canada

                            <br /> 52B-melbourne,UK</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="map_wrapper_top jb_cover">
                    <div class="contact_field_wrapper comments_form">
                        <div class="jb_heading_wraper left_rivew_heading">
                            <h3>get in touch</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    <br /> sed do eiusmod tempor incididunt </p>
                        </div>
                        <form>
                            <div class="row">
                                <div class="col-lg-6 col-md-6">
                                    <div class="form-pos">
                                        <div class="form-group i-name">

                                            <input type="text" class="form-control require" name="full_name" id="namTen-first" placeholder=" Name*" />
                                            <i><FaUserAlt/></i>
                                        </div>
                                    </div>
                                </div>


                                <div class="col-lg-6 col-md-6">
                                    <div class="form-e">
                                        <div class="form-group i-email">
                                            <label class="sr-only">Email </label>
                                            <input type="email" class="form-control require" name="email" id="emailTen" placeholder=" Email *" data-valid="email" data-error="Email should be valid." />
                                            <i><FaEnvelope/></i>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-12">
                                    <div class="form-m">
                                        <div class="form-group i-message">

                                            <textarea class="form-control require" name="message" rows="5" id="messageTen" placeholder=" Message"></textarea>
                                            <i><FaComment/></i>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-12">
                                    <div class="tb_es_btn_div">
                                        <div class="response"></div>
                                        <div class="tb_es_btn_wrapper">
                                            <button type="button" class="submitForm">submit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        )
    }
}


export default Contact;