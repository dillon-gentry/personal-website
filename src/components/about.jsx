import React, { Component } from 'react';
import NavBar from './navbar';
import Footer from './footer';

class About extends Component {
    state = {  }

    titleStyle = {
        position: "a",
        fontSize: "5rem",
        textAlign: "center"
        //paddingLeft: "21vw"
    }

    aboutDivStyle = {
        // marginLeft: "0",
        // marginTop: "-80vh",
        // alignSelf: "center",
        width: "76vw"
    }

    imgRowStyle = {
        marginTop: "10vh",
        marginLeft: "-20vw"
    }

    textBubbleStyle = {
        marginTop: "20vh",
        marginBottom: "5vh",
        marginLeft: "-20vw"
    }

    textColStyle = {
        // width: "20vw"
    }

    footerStyle= {
        position: "absolute",
        left: "21vw",
        bottom: "0",
        height:"10vh",
        width:"79vw",
        background:"#999"
    }
    

    render() { 
        return (
            <React.Fragment>
                <div className="row" style= {{width: "100vw"}}>
                    <div className="col" style={{width: "21vw"}}>
                        <NavBar/>
                    </div>
                    <div style= {this.aboutDivStyle } className="col">
                        <div className="row">
                            <h1 style= { this.titleStyle }>About</h1>
                            <div className="row" style = { this.textBubbleStyle }>
                                <div className="col" style={this.textColStyle}>
                                <div className="box tri">I have always been fascinated by 
                                    technology and automation, and I am excited to live in a time period 
                                    where technology is constantly evolving to further provide for humanity. Interests include
                                    full stack development, software consulting, and API development.</div>
                                </div>
                                <div className="col">
                                <div className="box tri" style={this.textColStyle}>
                                    Studying Electrical and Computer Engineering with a focus on Software 
                                    Engineering and Design at UT Austin. Experiences include working as a business analyst in IT as well as 
                                    coursework utilizing Python, JavaScript, Java, and C/C++ programming 
                                    languages.
                                </div>
                                </div>
                            </div>
                            <div className="row" style = { this.imgRowStyle }>
                                <div className="col">
                                    <img src="/img/hikingFormatted.png" alt="hiking pic"></img>
                                </div>
                                <div className="col">
                                    <img src="/img/headshotFormatted.jpg" alt="headshot"></img>
                                </div>
                            </div>
                        </div>
                        {/* <div className="row">
                            <Footer/>
                        </div> */}
                    </div>
                    <footer style={this.footerStyle}>
                        <div className="row">
                            <div className="col-3">
                            <h1>Dillon Gentry</h1>
                            </div>
                            <div className="col-5">
                            <h2>Last updated: 4/14/2021</h2>
                            </div>
                            <div className="col-2">
                            <span style={{fontSize: "3rem"}}>
                                <span style={{color: "blue"}}>
                                    <a href="mailto: djg81999@gmail.com">
                                    <i class="fas fa-envelope-square"></i>
                                    </a>
                                </span>
                            </span>
                            </div>
                            <div className="col-2">
                            <span style={{fontSize: "3rem"}}>
                                <span style={{color: "blue"}}>
                                    <a href="https://www.linkedin.com/in/dillon-gentry-768b411a0/">
                                    <i class="fab fa-linkedin"></i>
                                    </a>
                                </span>
                            </span>
                            </div>
                        </div>
                    </footer>
                </div>
            </React.Fragment>
          );
    }
}
 
export default About;