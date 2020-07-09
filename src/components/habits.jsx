import React, { Component } from 'react';

class Habits extends Component {
    state = {  }
    render() { 
        return (  
            <div className="habit-header">
                <div className="habits-title">
                    <p>Daily Habits</p>
                    <h1>Initial 4-week focus</h1>
                </div>
                <section className="habits">
                    <div className="habit-card">
                        <img className="habit-img" src="./images/clem-onojeghuo-E_MV2qnWGDA-unsplash.jpg" alt="Image not found."/>
                        <p>Place glass of water next to bed before sleep</p>
                    </div>
                    <div className="habit-card">
                        <img className="habit-img" src="./images/gregory-pappas-rUc9hVE-L-E-unsplash.jpg" alt="Image not found."/>
                        <p>Sleep in since you're having breakfast later</p>
                    </div>
                    <div className="habit-card">
                        <img className="habit-img" src="./images/pontus-ohlsson-XNkwPPSjbHg-unsplash.jpg" alt="Image not found."/>
                        <p>Drink water when you first wake up to hydrate</p>
                    </div>
                    <div className="habit-card">
                        <img className="habit-img" src="./images/nathan-dumlao-c2Y16tC3yO8-unsplash.jpg" alt="Image not found."/>
                        <p>Drink water/tea/coffee to ease hunger</p>
                    </div>
                    <div className="habit-card">
                        <img className="habit-img" src="./images/pablo-merchan-montes-Orz90t6o0e4-unsplash.jpg" alt="Image not found."/>
                        <p>Develop a feast and fasting approach to eating</p>
                    </div>
                    <div className="habit-card">
                        <img className="habit-img" src="./images/eating_plan.jpg" alt="Image not found."/>
                        <p>Follow our timings</p>
                    </div>
                </section>
            </div>
        );
    }
}
 
export default Habits;