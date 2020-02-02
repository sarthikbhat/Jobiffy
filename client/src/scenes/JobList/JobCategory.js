import React, { Component } from 'react';

class JobCategory extends Component {
    state = {  }
    change=(event)=>{
        console.log(event.target.value)
    }
    render() { 
        return ( 
            <React.Fragment>
                <div class="job_filter_category_sidebar jb_cover">
                    <div class="job_filter_sidebar_heading jb_cover">
                        <h1>jobs by  category</h1>
                    </div>

                    <div class="category_jobbox jb_cover">
                        <p class="job_field">
                            <input value='graphic-designer' onChange={this.change} type="checkbox" id="c1111" name="cb"/>
                            <label for="c1111">graphic designer<span> (155)</span></label>
                        </p>
                        <p class="job_field">
                            <input value='engineering-jobs' onChange={this.change} type="checkbox" id="c22" name="cb"/>
                            <label for="c22">
                                Engineering Jobs <span> (514)</span>
                            </label>
                        </p>
                        <p class="job_field">
                            <input value='mainframe-jobs' onChange={this.change} type="checkbox" id="c33" name="cb"/>
                            <label for="c33">Mainframe Jobs <span> (554)</span>
                            </label>
                        </p>
                        <p class="job_field">
                            <input value='legal-jobs' onChange={this.change} type="checkbox" id="c44" name="cb"/>
                            <label for="c44">Legal Jobs <span> (457)</span>
                            </label>
                        </p>
                        <p class="job_field">
                            <input value='it-jobs' onChange={this.change} type="checkbox" id="c55" name="cb"/>
                            <label for="c55">IT Jobs <span> (254)</span> </label>
                        </p>
                        <p class="job_field">
                            <input value='psu-jobs' onChange={this.change} type="checkbox" id="c66" name="cb"/>
                            <label for="c66">PSU Jobs <span> (1054)</span> </label>
                        </p>
                        <p class="job_field">
                            <input value='government-jobs' onChange={this.change} type="checkbox" id="c77" name="cb"/>
                            <label for="c77">government Jobs <span> (1284)</span> </label>
                        </p>
                        {/* <div class="seeMore"><a href="#">view all categories</a></div> */}
                    </div>

                </div>
            </React.Fragment>
         );
    }
}
 
export default JobCategory;