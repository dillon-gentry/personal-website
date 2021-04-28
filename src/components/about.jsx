import React, { Component } from 'react';
import NavBar from './navbar';

class About extends Component {
    state = {  }

    titleStyle = {
        fontSize: "5rem",
        textAlign: "center"
        //paddingLeft: "21vw"
    }

    aboutDivStyle = {
        marginLeft: "0vw",
        width: "80vw"
    }

    imgNStyle = {
        marginTop: "6vh",
        marginLeft: "-9vw"
        // marginLeft: "3vw"
    }

    imgHStyle = {
        marginTop: "6vh",
        marginLeft: "-14vh"
    }

    contentRowStyle = {
        width: "60vw",
        marginTop: "4vh",
        marginBottom: "5vh",
        marginLeft: "0vw"
    }

    textColStyle = {
        // width: "20vw"
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
    

    render() { 
        return (
            <React.Fragment>
                <div className="row" style= {{width: "100vw"}}>
                    
                    {/* Navbar element first */}
                    <NavBar/>

                    {/* Page content */}
                    <div style= {this.aboutDivStyle } className="col" id="page">
                        <h1 style= { this.titleStyle }>About</h1>
                        <div id="content" style={{marginLeft: "3vw"}}>
                            <div className="row" style = { this.contentRowStyle }>
                                    <div className="card-deck" style={{marginLeft: "18vw"}}>
                                        {/* <div className="card"> */}
                                        <div class="flip-card card">
                                            <div class="flip-card-inner">
                                                <div class="flip-card-front">
                                                <img src="/img/hikingFormatted.png" alt="hiking" style={{width: "300px", height: "300px"}}/>
                                                </div>
                                                <div class="flip-card-back">
                                                <p></p>
                                                <p>I have always been fascinated by 
                                                    technology and automation, and I am excited to live in a time period 
                                                    where technology is constantly evolving to further provide for humanity.</p>
                                                <p>Interests include
                                                    full stack development, app development, and automation.</p>    
                                                </div>
                                            </div>
                                        {/* </div> */}
                                        </div>
                                        
                                        {/* <div className="card"> */}
                                        <div class="flip-card card">
                                            <div class="flip-card-inner">
                                                <div class="flip-card-front">
                                                <img src="/img/headshotFormatted.jpg" alt="headshot" style={{width: "300px", height: "300px"}}/>
                                                </div>
                                                <div class="flip-card-back">
                                                <p></p>    
                                                <p>Studying Electrical and Computer Engineering with a focus on Software 
                                                Engineering and Design at UT Austin.</p> 
                                                <p>Experiences include working as a Business Analyst in IT at Phillips 66 HQ as well as 
                                                coursework utilizing Python, JavaScript, Java, Verilog, and C/C++ programming 
                                                languages.</p>
                                                </div>
                                            </div>
                                        {/* </div> */}
                                        </div>
                                        
                                    </div>
                                    {/* <div className="col">
                                        <div className="box tri">I have always been fascinated by 
                                            technology and automation, and I am excited to live in a time period 
                                            where technology is constantly evolving to further provide for humanity. Interests include
                                            full stack development, software consulting, and API development.
                                        </div>
                                        <img src="/img/hikingFormatted.png" alt="hiking pic" style={this.imgNStyle}></img>
                                    </div>
                                    
                                    <div className="col">
                                        <div className="box tri">
                                            Studying Electrical and Computer Engineering with a focus on Software 
                                            Engineering and Design at UT Austin. Experiences include working as a business analyst in IT as well as 
                                            coursework utilizing Python, JavaScript, Java, and C/C++ programming 
                                            languages.
                                        </div>
                                        <img src="/img/headshotFormatted.jpg" alt="headshot" style={this.imgHStyle}></img>
                                    </div> */}
                            </div>
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
}
 
export default About;