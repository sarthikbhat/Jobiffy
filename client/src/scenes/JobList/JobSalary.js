import React, { Component } from 'react';

class JobSalary extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <div class="job_filter_category_sidebar jb_cover">
                    <div class="job_filter_sidebar_heading jb_cover">
                        <h1>salary</h1>
                    </div>

                    <div class="category_jobbox jb_cover">
                        <div class="widget price-range">
                            <ul>
                                <li class="range">
                                    <div id="responsive_range_price" class="range-box"></div>

                                    <input type="text" id="responsive_price" class="price-box" readonly/>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default JobSalary;