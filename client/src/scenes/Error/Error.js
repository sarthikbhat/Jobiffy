import React, { Component } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';

class Error extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <Header />
                <div class="page_title_section">
                    <div class="page_header">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-9 col-md-8 col-12 col-sm-7">

                                    <h1>404 error</h1>
                                </div>
                                <div class="col-lg-3 col-md-4 col-12 col-sm-5">
                                    <div class="sub_title_section">
                                        <ul class="sub_title">
                                            <li> <Link to="/search"> Home </Link>&nbsp; / &nbsp; </li>
                                            <li>404 error</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div class="error_wrapper jb_cover">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12">
                                <div class="error_top_wrapper jb_cover">
                                    <img src="images/error.png" alt="img" class="img-reponsive"/>
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
 
export default Error;