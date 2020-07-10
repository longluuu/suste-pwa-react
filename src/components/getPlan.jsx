import React, { Component } from 'react';

class GetPlan extends Component {
    state = {  }
    render() { 
        return ( 
            <section className="get-plan">
                <div className="get-plan-heading">
                    <h1>Whats your path to sustainable health?</h1>
                </div>
                <div className="button-text">
                    <a href="." className="button">
                        <button>Get Plan</button>
                    </a>
                    <p>It's completely free and takes 60 seconds</p>
                </div>
            </section>
        );
    }
}
 
export default GetPlan;