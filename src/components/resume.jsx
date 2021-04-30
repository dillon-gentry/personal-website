import React, { Component } from 'react';
import NavBar from './navbar';
// import { Document, Page } from 'react-pdf';
import { Document, Page} from 'react-pdf/dist/esm/entry.webpack';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
// import resume from '/Resume_SP21.pdf';
import Footer from './footer';

class Resume extends Component {
    state = {
        numPages: 1,
        pageNumber: 1,
        file: "/Resume_SP21.pdf"
    }

    bgStyle = {
        backgroundImage: "url('/img/splash_bg.png')",
        backgroundSize: "cover",
        overflow: "hidden",
        height: "100vh",
        widht: "100vw"
    }

    titleStyle = {
        fontSize: "5rem",
        textAlign: "center"
    }

    pageDivStyle = {
        marginLeft: "0vw",
        width: "100vw",
        textAlign: "center",
        position: "absolute"
    }

    contentDivStyle = {
        position: "relative",
        left: "25vw",
        height: "80vh",
        width: "50vw",
        overflow: "scroll"
    }

    render() {

        return (
            <React.Fragment>
                <div style={this.bgStyle}>
                <div className="row" style= {{width: "100vw"}}>
                    <div style= {this.pageDivStyle } id="page">
                        <h1 style= { this.titleStyle }>Resume</h1>
                        <div style={ this.contentDivStyle } id="content">
                            <Document file={this.state.file}>
                                <Page pageNumber={this.state.pageNumber} width="1000"/>
                            </Document>
                            <p style={{color: "white"}}>Page {this.state.pageNumber} of {this.state.numPages}</p>
                        </div>
                    </div>
                </div>
                </div>    
            </React.Fragment>
          );
    }
}
 
export default Resume;