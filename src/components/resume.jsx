import React, { Component } from 'react';
import { Document, Page} from 'react-pdf/dist/esm/entry.webpack';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

class Resume extends Component {
    state = {
        numPages: 1,
        pageNumber: 1,
        file: "/Resume_SP21.pdf"
    }

    contentDivStyle = {
        position: "relative",
        left: "25vw",
        height: "75vh",
        width: "50vw",
        overflow: "scroll"
    }

    render() {

        return (
            <React.Fragment>
                <div className="row" style= {{width: "100vw"}}>
                    <div className="page-div" id="page">
                        <h1 className="page-title">Resume</h1>
                        <div style={ this.contentDivStyle } id="content">
                            <Document file={this.state.file}>
                                <Page pageNumber={this.state.pageNumber} width="1000"/>
                            </Document>
                            <p style={{color: "white"}}>Page {this.state.pageNumber} of {this.state.numPages}</p>
                        </div>
                    </div>
                </div>   
            </React.Fragment>
          );
    }
}
 
export default Resume;