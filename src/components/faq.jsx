import React, { Component } from 'react';

class FAQ extends Component {
    state = {  }
    render() { 
        return ( 
            <section className="FAQ">
                <div className="container">
                    <div className="divheader">
                        <h1>Frequently Asked Questions</h1>
                    </div>
                    <div className="accordion">
                        <div className="accordion-item" id="question1">
                            <a className="accordion-link" href="#question1">Why is building habits better than focusing on goals?
                                <ion-icon className="add" name="add-outline"></ion-icon>
                                <ion-icon className="remove" name="remove-outline"></ion-icon>
                            </a>
                            <div className="answer">
                                <p>Goals without a plan or process to get there are just dreams. The habits you'll build with SUSTE become automatic daily processes over time to move you towards you goals and keep you there. No more yo-yo dieting and instead sustainable long-lasting gains.</p>
                            </div>
                        </div>

                        <div className="accordion-item" id="question2">
                            <a className="accordion-link" href="#question2">What is intermittent fasting?
                                <ion-icon className="add" name="add-outline"></ion-icon>
                                <ion-icon className="remove" name="remove-outline"></ion-icon>
                            </a>
                            <div className="answer">
                                <p>Intermittent fasting is the routine of fasting for 12+ hours and eating for less than 12 hours each day. By fasting for more than 12 hours a day will supercharge your metabolism, which will drive health benefits such as fat loss, increased energy and slower aging.</p>
                            </div>
                        </div>

                        <div className="accordion-item" id="question3">
                            <a className="accordion-link" href="#question3">What can I eat and drink during my fast?
                                <ion-icon className="add" name="add-outline"></ion-icon>
                                <ion-icon className="remove" name="remove-outline"></ion-icon>
                            </a>
                            <div className="answer">
                                <p>Water, black tea and black coffee are all fine as they don't disrupt your fast. Hold off on any food, milk and sugar until your eating window.</p>
                            </div>
                        </div>

                        <div className="accordion-item" id="question4">
                            <a className="accordion-link" href="#question4">What should I avoid during my fast?
                                <ion-icon className="add" name="add-outline"></ion-icon>
                                <ion-icon className="remove" name="remove-outline"></ion-icon>
                            </a>
                            <div className="answer">
                                <p>Avoid all food and any sugar and milk in your teas and coffees. Alcohol will also break your fast so you should enjoy your drink with your last meal of the day.</p>
                            </div>
                        </div>

                        <div className="accordion-item" id="question5">
                            <a className="accordion-link" href="#question5">What does plant-rich diet mean?
                                <ion-icon className="add" name="add-outline"></ion-icon>
                                <ion-icon className="remove" name="remove-outline"></ion-icon>
                            </a>
                            <div className="answer">
                                <p>We understand how hard change is and that for many people shifting to a plant only diet would be difficult so we advocate a diet that actively reduces meat intake and increases plant foods intake. By improving the quality of your meat intake and reducing it, you can improve your metabolism while significantly reducing your risk of colorectal cancer and impact on the environment also.</p>
                            </div>
                        </div>

                        <div className="accordion-item" id="question6">
                            <a className="accordion-link" href="#question6">What does whole foods mean?
                                <ion-icon className="add" name="add-outline"></ion-icon>
                                <ion-icon className="remove" name="remove-outline"></ion-icon>
                            </a>
                            <div className="answer">
                                <p>Whole foods are foods that you buy whole and not highly processed or manufactured in factories. If it comes in lots of packaging then it's generally a bad idea. Our bodies have evolved to eat the things grown around us and not the broken down parts of them. By eating mostly whole foods you will greatly improve your physical and mental health.</p>
                            </div>
                        </div>
                        
                        <div className="accordion-item" id="question7">
                            <a className="accordion-link" href="#question7">Why should I choose SUSTE over other diets?
                                <ion-icon className="add" name="add-outline"></ion-icon>
                                <ion-icon className="remove" name="remove-outline"></ion-icon>
                            </a>
                            <div className="answer">
                                <p>Put simply diets don't work as they all focus on short term gains and not the long term change needed to hold on to all your hard work. SUSTE has been developed with sustainability at its core. By that we mean, we've done the hard work in simplifying behaviour change and will give you the step by step guidance on how to build the right habits for long-lasting health. Our habits not only benefit you but also our shared environment, which is fundamental to our safety and health.</p>
                            </div>
                        </div>

                        <div className="accordion-item" id="question8">
                            <a className="accordion-link" href="#question8">How does the SUSTE lifestyle benefit the planet?
                                <ion-icon className="add" name="add-outline"></ion-icon>
                                <ion-icon className="remove" name="remove-outline"></ion-icon>
                            </a>
                            <div className="answer">
                                <p>Our habits will have you fasting regularly, eating a plant and whole foods rich diet, which significantly reduces your greenhouse gas emissions, fresh water use and saves forests from being cleared for agriculture. By making change easy we are empowering millions of people to improve their health and sustainability everyday. By improving yourself and helping others do the same we can drive the global change needed to avert the climate crisis.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default FAQ;