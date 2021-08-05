import React, { Component } from 'react';
import MediaQuery from 'react-responsive';

class Footer extends Component {
    
    render() { 
        return (
            <footer>
                
                {/* Most mobile widths */}
                <MediaQuery maxDeviceWidth={480}>
                <div className="foot-flex-col">
                    <div className="foot-flex-col-icon-row">
                        <div className="foot-flex-col-icon-row-item">
                            <span class="fa-stack">
                                <a href="mailto: djg81999@gmail.com" className="foot-logo-link">
                                    <i class="fa-stack-1x fa fa-square"></i>
                                    <i class="fa-stack-1x fas fa-envelope-square foot-logo"></i>
                                </a>
                            </span>
                            <span class="fa-stack">
                                <a className="foot-logo-link" href="https://www.linkedin.com/in/dillon-gentry-768b411a0/">
                                    <i class="fa-stack-1x fa fa-square"></i>
                                    <i class="fa-stack-1x fab fa-linkedin foot-logo"></i>
                                </a>
                            </span>
                        </div>
                    </div>
                    <div className="foot-flex-col-text-col">
                        <p className="foot-text">Last updated: 8/5/2021</p>
                        <p className="foot-text">Made with ReactJS, React-PDF, HTML, CSS, ScreenToGif, and FontAwesome.</p>
                    </div>
                    <div>
                    </div>
                </div> 
                </MediaQuery>

                {/* Not mobile */}
                <MediaQuery minDeviceWidth={481}>
                    <div className="foot-flex-row">
                        <div className="foot-flex-row-icon-row">
                            <span class="fa-stack">
                                <a href="mailto: djg81999@gmail.com" className="foot-logo-link">
                                    <i class="fa-stack-1x fa fa-square"></i>
                                    <i class="fa-stack-1x fas fa-envelope-square foot-logo"></i>
                                </a>
                            </span>
                        </div>
                        <div className="foot-flex-row-text-row">
                            <p className="foot-text">Last updated: 8/5/2021</p>
                            <p className="foot-text">Made with ReactJS, React-PDF, HTML, CSS, ScreenToGif, and FontAwesome.</p>
                        </div>
                        <div className="foot-flex-row-icon-row">
                            <span class="fa-stack">
                                <a className="foot-logo-link" href="https://www.linkedin.com/in/dillon-gentry-768b411a0/">
                                    <i class="fa-stack-1x fa fa-square"></i>
                                    <i class="fa-stack-1x fab fa-linkedin foot-logo"></i>
                                </a>
                            </span>
                        </div>
                    </div>
                </MediaQuery>
            </footer>
          );
    }
}
 
export default Footer;