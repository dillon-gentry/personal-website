import React, { Component } from 'react';
import { Document, Page} from 'react-pdf/dist/esm/entry.webpack';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import MediaQuery from 'react-responsive';

class Resume extends Component {
    state = {
        numPages: 1,
        pageNumber: 1,
        file: "/Resume_SP21.pdf"
    }

    render() {

        return (
            <React.Fragment>
                    <div className="page-div" id="page">
                        <h1 className="page-title">Resume</h1>
                        <div className="resume-div" id="content">
                            <Document file={this.state.file}>
                                <MediaQuery maxDeviceWidth={600}>
                                    <Page pageNumber={this.state.pageNumber} width={1200} scale={0.5}/>
                                </MediaQuery>
                                <MediaQuery minDeviceWidth={601}>
                                    <Page pageNumber={this.state.pageNumber} width={2000} scale={0.5}/>
                                </MediaQuery>
                                <MediaQuery minDeviceWidth={2400}>
                                    <Page pageNumber={this.state.pageNumber} width={3000} scale={0.5}/>
                                </MediaQuery>
                            </Document>
                            <p style={{color: "white"}}>Page {this.state.pageNumber} of {this.state.numPages}</p>
                        </div>
                    </div>
            </React.Fragment>
          );
    }
}
 
export default Resume;