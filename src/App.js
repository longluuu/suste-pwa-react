import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar';
import HowSusteWorks from './components/howSusteWorks';
import Hero from './components/hero';
import Habits from './components/habits';
import Testimonials from './components/tesimonials';
import GetPlan from './components/getPlan';
import FAQ from './components/faq';
import Footer from './components/footer';

class App extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <NavBar />
                <Hero />     
                <div className="full-sized-images">
                    <img src="./images/5edb96a1f826cfa1669b9cc4_benefits.png" alt="Could not be found."/>
                </div>
                <HowSusteWorks />
                <Habits />
                <Testimonials />
                <GetPlan />
                <FAQ />
                <Footer />
            </React.Fragment>
        );
    }
}

export default App;

