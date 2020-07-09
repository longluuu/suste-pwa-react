import React, { Component } from 'react';

class Hero extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="hero">
                <h2>Champions of change</h2>
                <p>Build sustainable and healthy habits to simplify your eating and achieve your health goals.</p>
                <br/>
                <br/>
                <p>Our free 4-week plan makes it easy to start and we'll support you throughout the change.</p>
                <a href="." className="button">
                    <button>Get Plan</button>
                </a>
            </div>       
        );
    }
}
 
export default Hero;