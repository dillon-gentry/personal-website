import React, { Component } from 'react';

class Footer extends Component {
    state = {  }

    footerStyle= {
        zIndex: "1",
        position: "fixed",
        left: "0vw",
        bottom: "0vh",
        height:"15vh",
        width:"100vw",
        background:"transparent"
    }

    footContentStyle={
        marginLeft: "6vw", 
        marginTop: "4vh", 
        marginRight: "6vw",
        marginBottom: "1vh", 
        width: "88vw"
    }
    
    render() { 
        return (
            <footer style={this.footerStyle} id="foot">
            <div className="row" style={this.footContentStyle}>
                <div className="leftbox">
                    <h4 className="footer-text">Last updated: 5/29/2021</h4>
                </div>
                <div className="middlebox">
                    <h6 className="footer-text">Made with ReactJS, HTML, CSS, Bootstrap 4, ScreenToGif, and FontAwesome.</h6>
                </div>
                <div className="rightbox1">
                    <a href="mailto: djg81999@gmail.com" className="footer-logo-link">
                        <i className="fas fa-envelope-square footer-logo"></i>
                    </a> 
                </div>
                <div className="rightbox2">
                    <a className="footer-logo-link" href="https://www.linkedin.com/in/dillon-gentry-768b411a0/">
                        <i className="fab fa-linkedin footer-logo"></i>
                    </a> 
                </div>
            </div>
            </footer>
          );
    }
}
 
export default Footer;