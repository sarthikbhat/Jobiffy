import React, { Component } from 'react';

class JobLocation extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <div class="job_filter_category_sidebar jb_cover">
                    <div class="job_filter_sidebar_heading jb_cover">
                        <h1>Location</h1>
                    </div>

                    <div class="category_jobbox jb_cover">
                        <p class="job_field">
                            <input type="checkbox" id="c011" name="cb"/>
                            <label for="c011">Jobs in delhi
                                <span> (24)</span></label>
                        </p>
                        <p class="job_field">
                            <input type="checkbox" id="c021" name="cb"/>
                            <label for="c021">
                                Jobs in mumbai
                                <span> (1242)</span>
                            </label>
                        </p>
                        <p class="job_field">
                            <input type="checkbox" id="c031" name="cb"/>
                            <label for="c031">Jobs in chennai
                                <span>(458)</span>
                            </label>
                        </p>
                        <p class="job_field">
                            <input type="checkbox" id="c041" name="cb"/>
                            <label for="c041">Jobs in indore
                                <span> (1047)</span>
                            </label>
                        </p>
                        <p class="job_field">
                            <input type="checkbox" id="c051" name="cb"/>
                            <label for="c051">Job in bhopal <span> (124)</span> </label>
                        </p>
                        <p class="job_field">
                            <input type="checkbox" id="c061" name="cb"/>
                            <label for="c061">Job in pune <span> (124)</span> </label>
                        </p>
                        <p class="job_field">
                            <input type="checkbox" id="c071" name="cb"/>
                            <label for="c071">Job in banglore <span> (124)</span> </label>
                        </p>
                        {/* <div class="seeMore"><a href="#">view all categories</a></div> */}
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default JobLocation;