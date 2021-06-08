import React, { Component } from 'react';

class About extends Component {

    contentDivStyle = {
        position: "relative",
        left: "11%"
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
        marginLeft: "2vw"
    }
    

    render() { 
        return (
            <React.Fragment>
                    <div className="row" style= {{width: "100vw"}}>

                        {/*Page*/}
                        <div className="page-div" id="page">
                            
                            {/*Page title*/}
                            <h1 className="page-title">About</h1>
                            
                            <div className="col content-div" id="content">
                                <div className="row" style = { this.contentRowStyle }>
                                    
                                    {/*Picture card deck*/}
                                    <div className="card-deck" style={{marginLeft: "18vw"}}>
                                            
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
                                        </div>
                                            
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
                                        </div>
                                            
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </React.Fragment>
          );
    }
}
 
export default About;