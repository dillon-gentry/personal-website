import React, { Component } from 'react';
import NavBar from './navbar';
// import { Document, Page } from 'react-pdf';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
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

    aboutDivStyle = {
        // marginLeft: "0",
        // marginTop: "-80vh",
        // alignSelf: "center",
        width: "76vw"
    }

    contentDivStyle = {
        display: "flex",
        width: "79vw",
        maxWidth: "79vw",
        display: "inline-block",
        justifyContent: "center",
        alignContent: "center"
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
                            <div clasName="flex-container" style={this.contentDivStyle}>
                                <h1 style= { this.titleStyle }>Resume</h1>
                                    <Document file={this.state.file}>
                                        <Page pageNumber={this.state.pageNumber}/>
                                    </Document>
                                    <p>Page {this.state.pageNumber} of {this.state.numPages}</p>
                            </div>
                        </div>
                    </div>
                </div>    
            </React.Fragment>
          );
    }
}
 
export default Resume;