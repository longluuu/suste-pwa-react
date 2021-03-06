import React, { Component } from 'react';

class Footer extends Component {
    state = {  }
    render() { 
        return ( 
            <section className="footer">
                <h1>Join the champions of change community</h1>
                <p>Stay up to date with announcements, fun challenges, and exclusive founding member benefits.</p>
                <hr id="email-break"/>
                <form> 
                    <div>
                        <input id="signupEmail" type="text" name="text"/>
                        <input type="submit" className="button" value="JOIN"/>
                    </div>
                </form>
                <hr/>
                <footer>
                    <div className="wrapper">
                        <div className="footer-logo">
                            <a href=".">
                                <img src="./images/suste-logo.png" alt="Suste"/>
                            </a>
                        </div>
                        <nav className="footer-nav">
                            <a href=".">Contact</a>
                            <a href=".">About</a>
                            <a href=".">IG FB TW</a>
                        </nav>
                    </div>
                </footer>
            </section>
        );
    }
}
 
export default Footer;