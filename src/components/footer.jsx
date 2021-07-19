import React, { Component } from 'react';
import MediaQuery from 'react-responsive';

class Footer extends Component {
    state = {  }
    
    render() { 
        return (
            <footer>
            <MediaQuery maxDeviceWidth={600}>
                <div>
                <h4 className="footer-text">     Updated: 7/18/2021</h4>
                <h6 className="footer-text">Made with ReactJS, HTML, CSS, Bootstrap 4, ScreenToGif, and FontAwesome.</h6>
                <div  className="row" style={{width: "100vw", textAlign: "center", marginBottom: "1vh"}}>
                    
                    <a style={{position: "absolute", left: "26vw"}}href="mailto: djg81999@gmail.com" className="footer-logo-link">
                        <i className="fas fa-envelope-square footer-logo"></i>
                    </a>
                    <a style={{position: "absolute", left: "66vw"}}className="footer-logo-link" href="https://www.linkedin.com/in/dillon-gentry-768b411a0/">
                        <i className="fab fa-linkedin footer-logo"></i>
                    </a>
                
                </div>
                </div>
            </MediaQuery>
            <MediaQuery minDeviceWidth={601}>
                {/* <p>You are a desktop or laptop</p> */}
                <div className="row">
                    <div style={{marginLeft: "0.5vw", paddingTop: "1vh", width: "33vw", textAlign: "center"}}>
                        <h4 className="footer-text">Last updated: 7/18/2021</h4>
                    </div>
                    <div style={{marginRight: "0vw", paddingTop: "1vh", width: "33vw", position: "absolute", left: "33.5vw", textAlign: "center"}}>
                        <h6 className="footer-text">Made with ReactJS, HTML, CSS, Bootstrap 4, ScreenToGif, and FontAwesome.</h6>
                    </div>
                    <div style={{width: "33vw", position: "absolute", left: "71.5vw", marginRight: "0.5vw"}}>
                        <div className="row" style={{width: "13vw", position: "relative", left: "20%"}}>
                            <div style={{paddingRight: "2vw"}}>
                                <a href="mailto: djg81999@gmail.com" className="footer-logo-link">
                                    <i className="fas fa-envelope-square footer-logo"></i>
                                </a>
                            </div>
                            <div>
                                <a className="footer-logo-link" href="https://www.linkedin.com/in/dillon-gentry-768b411a0/">
                                    <i className="fab fa-linkedin footer-logo"></i>
                                </a>
                            </div>  
                        </div>
                    </div>
                </div>
            </MediaQuery>
            </footer>
          );
    }
}
 
export default Footer;