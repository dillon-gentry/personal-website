import React, { Component } from 'react';
import NavBar from './navbar';

class GolfProj extends Component{

    titleStyle = {
        fontSize: "5rem",
        textAlign: "center"
    }

    contentDivStyle = {
        marginLeft: "0vw",
        width: "80vw"
    }

    footerStyle= {
        zIndex: "0",
        position: "absolute",
        left: "18vw",
        bottom: "0vh",
        height:"10vh",
        width:"82vw",
        background:"#999"
    }


    render(){
        return(
            <React.Fragment>
                <div className="row" style= {{width: "100vw"}}>
                    
                    {/* Navbar element first */}
                    <NavBar/>

                    {/* Page content */}
                    <div style= {this.aboutDivStyle } className="col" id="page">
                        <h1 style= { this.titleStyle }>Golf Guru IDB</h1>
                        <div id="content" style={this.contentDivStyle}>
                        
                        </div>
                    </div>

                    {/* Footer starts here */}
                    <footer style={this.footerStyle} id="foot">
                        <div className="row" style={{ marginLeft: "10vw", marginTop: "2vh", marginRight: "6vw" }}>
                            <div className="col-3" style={{marginRight: "2vw", paddingTop: "1vh"}}>
                                <h4>Last updated: 4/18/2021</h4>
                            </div>
                            <div className="col-5" style={{marginRight: "2vw", paddingTop: "1.5vh"}}>
                                <h6>Made with React.js, HTML, CSS, Bootstrap 4, and FontAwesome.</h6>
                            </div>
                            <div className="col-2">
                                <div className="row">
                                    <div style={{paddingRight: "2vw"}}>
                                        <a href="mailto: djg81999@gmail.com" style={{ textDecoration: "none", color: "blue", display: "block", padding: "1px"}}>
                                            <i class="fas fa-envelope-square" style={{fontSize: "3rem", marginBottom: "1vh" }}></i>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://www.linkedin.com/in/dillon-gentry-768b411a0/" style={{ textDecoration: "none", color: "blue", display: "block", padding: "1px"}}>
                                            <i class="fab fa-linkedin" style={{fontSize: "3rem", marginBottom: "1vh"}}></i>
                                        </a>
                                    </div>  
                                </div>
                            </div>
                        </div>
                    </footer>

                </div>
            </React.Fragment>
        );
    }
}export default GolfProj;