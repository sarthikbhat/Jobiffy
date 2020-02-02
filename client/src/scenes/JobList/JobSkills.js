import React, { Component } from 'react';

class JobSkills extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <div class="job_filter_category_sidebar jb_cover">
                    <div class="job_filter_sidebar_heading jb_cover">
                        <h1>Skills</h1>
                    </div>

                    <div class="category_jobbox jb_cover">
                        <p class="job_field">
                            <input type="checkbox" id="c111" name="cb"/>
                            <label for="c111">javascript
                                <span> (124)</span></label>
                        </p>
                        <p class="job_field">
                            <input type="checkbox" id="c121" name="cb"/>
                            <label for="c121">
                                HTML5
                                <span> (42)</span>
                            </label>
                        </p>
                        <p class="job_field">
                            <input type="checkbox" id="c131" name="cb"/>
                            <label for="c131">CSS
                                <span>(158)</span>
                            </label>
                        </p>
                        <p class="job_field">
                            <input type="checkbox" id="c141" name="cb"/>
                            <label for="c141">marketing
                                <span> (47)</span>
                            </label>
                        </p>
                        <p class="job_field">
                            <input type="checkbox" id="c151" name="cb"/>
                            <label for="c151">web design <span> (124)</span> </label>
                        </p>
                        <p class="job_field">
                            <input type="checkbox" id="c161" name="cb"/>
                            <label for="c161">PHP<span> (124)</span> </label>
                        </p>
                        <p class="job_field">
                            <input type="checkbox" id="c171" name="cb"/>
                            <label for="c171">social media<span> (124)</span> </label>
                        </p>

                        {/* <div class="seeMore"><a href="#">view all categories</a></div> */}
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default JobSkills;