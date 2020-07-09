import React, { Component } from 'react';

class NavBar extends Component {
    // state = {  }
    // console.log('NavBar - rendered');
    render() { 
        return ( 
            <header>
                <div className="wrapper">
                    <div className="logo">
                        <a href=".">
                            <img src="./images/suste-logo.png" alt="Suste"/>
                        </a>
                    </div>
                    <nav>
                        <a href="about.html">About</a>
                        <a href=".">Blog</a>
                        <a href=".">Get Plan</a>
                    </nav>
                </div>
            </header> 
        );
    }
}
 
export default NavBar;