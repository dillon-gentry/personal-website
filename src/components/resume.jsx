import React, { Component } from 'react';
import NavBar from './navbar';
// import { Document, Page } from 'react-pdf';
import { Document, Page} from 'react-pdf/dist/esm/entry.webpack';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
// import resume from '/Resume_SP21.pdf';

class Resume extends Component {
    state = {
        numPages: 1,
        pageNumber: 1,
        file: "/Resume_SP21.pdf"
      }

    titleStyle = {
        fontSize: "5rem",
        textAlign: "center"
    }

    pageDivStyle = {
        // marginLeft: "0",
        // marginTop: "-80vh",
        // alignSelf: "center",
        width: "76vw"
    }

    contentDivStyle = {
        display: "flex",
        width: "79vw",
        maxWidth: "79vw",
        // display: "inline-block",
        justifyContent: "center",
        alignContent: "center"
    }

    footerStyle= {
        zIndex: "0",
        position: "fixed",
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
                    {/* <div className="col-2" style={{width: "21vw"}}> */}
                        <NavBar/>
                    {/* </div> */}
                    {/* <div style= {this.aboutDivStyle } className="col"> */}
                    <div style= {this.pageDivStyle } className="col" id="page">
                        <h1 style= { this.titleStyle }>Resume</h1>
                        <div style={{width: "66vw", marginLeft: "10vw"}} id="content">
                        <Document file={this.state.file}>
                            <Page pageNumber={this.state.pageNumber} width="1000"/>
                        </Document>
                        <p>Page {this.state.pageNumber} of {this.state.numPages}</p>
                        </div>
                        
                    </div>
                    {/* <div class="d-flex justify-content-center">
                        <div className="col-10">
                            <h1 style={this.titleStyle}>Resume</h1>
                                <Document file={this.state.file}>
                                    <Page pageNumber={this.state.pageNumber}/>
                                </Document>
                                <p>Page {this.state.pageNumber} of {this.state.numPages}</p>       
                        {/* </div> */}
                    {/* </div>
                    </div> */}

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
 
export default Resume;