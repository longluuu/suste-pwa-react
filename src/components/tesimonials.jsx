import React, { Component } from 'react';


class Testimonials extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <div className="section-heading">
                    <p>COMMUNITY TESTIMONIALS</p>
                    <h1>What our champions are saying</h1>
                </div>
                <div className="testimonial-image">
                    <img className="face" src="./images/ref.jpeg" alt="Could not be found."/>
                    <img className="quotes" src="./images/pngfuel.com.png" alt="Could not be found."/>
                    <h3>"The changes were small and easy to stick to. Before I knew it, i'd gone 2 months without beef and increased my veggies. I felt great knowing that such a small change had such big benefits for our struggling environment."</h3>
                    <br/>
                    <h2>Jess G.</h2>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Testimonials;