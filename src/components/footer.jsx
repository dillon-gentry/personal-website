import React, { Component } from 'react';

class Footer extends Component {
    state = {  }

    footerStyle= {
        zIndex: "1",
        position: "fixed",
        left: "0vw",
        bottom: "0vh",
        height:"10vh",
        width:"100vw",
        background:"transparent"
    }
    
    render() { 
        return (
            <footer style={this.footerStyle} id="foot">
            <div className="row" style={{ marginLeft: "0vw", marginTop: "2vh", marginRight: "6vw" }}>
                <div style={{marginRight: "0vw", paddingTop: "1vh", width: "25vw", textAlign: "center"}}>
                    <h4 style={{color: "white"}}>Last updated: 4/29/2021</h4>
                </div>
                <div style={{marginRight: "0vw", paddingTop: "1.5vh", width: "50vw", position: "absolute", left: "25vw", textAlign: "center"}}>
                    <h6 style={{color: "white"}}>Made with ReactJS, HTML, CSS, Bootstrap 4, ScreenToGif, and FontAwesome.</h6>
                </div>
                <div style={{width: "25vw", position: "absolute", left: "75vw"}}>
                    <div className="row" style={{width: "13vw", position: "relative", left: "20%"}}>
                        <div style={{paddingRight: "2vw"}}>
                            <a href="mailto: djg81999@gmail.com" style={{ textDecoration: "none", color: "white", display: "block", padding: "1px"}}>
                                <i class="fas fa-envelope-square" style={{fontSize: "3rem", marginBottom: "1vh" }}></i>
                            </a>
                        </div>
                        <div>
                            <a href="https://www.linkedin.com/in/dillon-gentry-768b411a0/" style={{ textDecoration: "none", color: "white", display: "block", padding: "1px"}}>
                                <i class="fab fa-linkedin" style={{fontSize: "3rem", marginBottom: "1vh"}}></i>
                            </a>
                        </div>  
                    </div>
                </div>
            </div>
            </footer>
          );
    }
}
 
export default Footer;