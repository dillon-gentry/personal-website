import React, { Component } from 'react';
import MediaQuery from 'react-responsive';

class Footer extends Component {
    state = {  }
    
    render() { 
        return (
            <footer>
                {/* Most mobile widths */}
                <MediaQuery maxDeviceWidth={480}>
                <div className="foot-flex-col">
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
                    <div className="foot-flex-text-col">
                        <p className="foot-text">Last updated: 7/26/2021</p>
                        <p className="foot-text">Made with ReactJS, HTML, CSS, ScreenToGif, and FontAwesome.</p>
                    </div>
                    <div>
                    </div>
                </div> 
                </MediaQuery>

                {/* Not mobile */}
                <MediaQuery minDeviceWidth={481}>
                    <div className="foot-flex-row">
                        <div className="foot-flex-icon-row">
                            <a href="mailto: djg81999@gmail.com" className="foot-logo-link">
                                <span class="fa-stack">
                                    <i class="fa-stack-1x fa fa-square"></i>
                                    <i class="fa-stack-1x fas fa-envelope-square foot-logo"></i>
                                </span>
                            </a>
                        </div>
                        <div className="foot-flex-text-row">
                            <p className="foot-text">Last updated: 7/25/2021</p>
                            <p className="foot-text">Made with ReactJS, HTML, CSS, ScreenToGif, and FontAwesome.</p>
                        </div>
                        <div className="foot-flex-icon-row">
                            <a className="foot-logo-link" href="https://www.linkedin.com/in/dillon-gentry-768b411a0/">
                                <span class="fa-stack">
                                    <i class="fa-stack-1x fa fa-square"></i>
                                    <i class="fa-stack-1x fab fa-linkedin foot-logo"></i>
                                </span>
                            </a>
                        </div>
                    </div>
                </MediaQuery>
            </footer>
          );
    }
}
 
export default Footer;