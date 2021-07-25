import React, { Component } from 'react';
import MediaQuery from 'react-responsive';

class Footer extends Component {
    state = {  }
    
    render() { 
        return (
            <footer>
                {/* Most mobile widths */}
                <MediaQuery maxDeviceWidth={480}>
                <div className="foot-flex cent">
                    <div className="flex-row foot-row-icon">
                        <a href="mailto: djg81999@gmail.com" className="foot-logo-link">
                            <span class="fa-stack">
                                <i class="fa-stack-1x fa fa-square"></i>
                                <i class="fa-stack-1x fas fa-envelope-square foot-logo"></i>
                            </span>
                        </a>
                        <a className="foot-logo-link" href="https://www.linkedin.com/in/dillon-gentry-768b411a0/">
                            <span class="fa-stack">
                                <i class="fa-stack-1x fa fa-square"></i>
                                <i class="fa-stack-1x fab fa-linkedin foot-logo"></i>
                            </span>
                        </a>
                    </div>
                    <div className="foot-row-text">
                        <p className="foot-text">Last updated: 7/25/2021</p>
                    </div>
                    <div className="foot-row-text">
                        <p className="foot-text">Made with ReactJS, HTML, CSS, ScreenToGif, and FontAwesome.</p>
                    </div>
                    <div>
                    </div>
                </div> 
                </MediaQuery>

                {/* Low resolution tablets */}
                <MediaQuery minDeviceWidth={481}>
                <div className="foot-flex cent">
                    <div>
                        <p className="foot-text">Last updated: 7/25/2021</p>
                    </div>
                    <div>
                        <p className="foot-text">Made with ReactJS, HTML, CSS, ScreenToGif, and FontAwesome.</p>
                    </div>
                    <div>
                    <div className="flex-row cent">
                        <a href="mailto: djg81999@gmail.com" className="foot-logo-link">
                            <span class="fa-stack">
                                <i class="fa-stack-1x fa fa-square"></i>
                                <i class="fa-stack-1x fas fa-envelope-square foot-logo"></i>
                            </span>
                        </a>
                        <a className="foot-logo-link" href="https://www.linkedin.com/in/dillon-gentry-768b411a0/">
                            <span class="fa-stack">
                                <i class="fa-stack-1x fa fa-square"></i>
                                <i class="fa-stack-1x fab fa-linkedin foot-logo"></i>
                            </span>
                        </a>
                    </div>
                    </div>
                </div>
                </MediaQuery>
                
            {/* <MediaQuery maxDeviceWidth={600}>
                <h4 className="footer-text" style={{textAlign: "center"}}>Last Updated: 7/18/2021</h4>
                <div className="row" style={{width: "80vw", marginLeft: "10vw", textAlign: "center"}}>
                    <h6 className="footer-text">Made with ReactJS, HTML, CSS, Bootstrap 4, ScreenToGif, and FontAwesome.</h6>
                </div>
                
                <div  className="row" style={{width: "22vw", marginTop: "1vw", marginLeft: "39vw"}}>
                
                    <a href="mailto: djg81999@gmail.com" className="footer-logo-link">
                    <span class="fa-stack">
                        <i class="fa-stack-1x fa fa-square"></i>
                        <i class="fa-stack-1x fas fa-envelope-square footer-logo"></i>
                    </span>
                    </a>
                    <a className="footer-logo-link in-logo" href="https://www.linkedin.com/in/dillon-gentry-768b411a0/">
                    <span class="fa-stack">
                        <i class="fa-stack-1x fa fa-square"></i>
                        <i class="fa-stack-1x fab fa-linkedin footer-logo"></i>
                    </span>
                    </a>
                
                </div>
            </MediaQuery>
            <MediaQuery minDeviceWidth={601}>
                <div className="row">
                    <div style={{marginLeft: "0.5vw", paddingTop: "1vh", width: "33vw", textAlign: "center"}}>
                        <h4 className="footer-text">Last updated: 7/18/2021</h4>
                    </div>
                    <div style={{marginRight: "0vw", paddingTop: "1vh", width: "33vw", position: "absolute", left: "33.5vw", textAlign: "center"}}>
                        <h6 className="footer-text">Made with ReactJS, HTML, CSS, Bootstrap 4, ScreenToGif, and FontAwesome.</h6>
                    </div>
                    <div style={{width: "33vw", position: "absolute", left: "71.5vw", marginRight: "0.5vw"}}>
                        <div className="row" style={{width: "13vw", position: "relative", left: "20%", padding: "1vw"}}>
                            <div style={{paddingRight: "2vw"}}>
                                <a href="mailto: djg81999@gmail.com" className="footer-logo-link">
                                <span class="fa-stack">
                                    <i class="fa-stack-1x fa fa-square"></i>
                                    <i class="fa-stack-1x fas fa-envelope-square footer-logo"></i>
                                </span>
                                </a>
                            </div>
                            <div>
                                <a className="footer-logo-link" href="https://www.linkedin.com/in/dillon-gentry-768b411a0/">
                                <span class="fa-stack">
                                    <i class="fa-stack-1x fa fa-square"></i>
                                    <i class="fa-stack-1x fab fa-linkedin footer-logo"></i>
                                </span>
                                </a>
                            </div>  
                        </div>
                    </div>
                </div>
            </MediaQuery> */}
            </footer>
          );
    }
}
 
export default Footer;