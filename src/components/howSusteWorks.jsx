import React, { Component } from 'react';

class HowSusteWorks extends Component {
    state = {  }
    render() { 
        return ( 
            <section className="section-heading">
                <p>How SUSTE Works</p>
                <h1>Start small and build a healthy lifestyle that benefits you and our shared environment.</h1>
                <div className="how-to">
                    <div className="card">
                        <div className="info">
                            <p>01.</p>
                            <h1>GET PLAN</h1>
                            <h2>See your path to sustainable health</h2>
                        </div>
                    </div>
                    <div className="card">
                        <div className="info">
                            <p>02.</p>
                            <h1>BUILD HABITS</h1>
                            <h2>To achieve your health goals</h2>
                        </div>
                    </div>
                    <div className="card">
                        <div className="info">
                            <p>03.</p>
                            <h1>IMPROVE HEALTH</h1>
                            <h2>Habits simplify your life and sustain your gains</h2>
                        </div>
                    </div>
                    <div className="card">
                        <div className="info">
                            <p>04.</p>
                            <h1>HAVE IMPACT</h1>
                            <h2>Your change can help others do the same</h2>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default HowSusteWorks;