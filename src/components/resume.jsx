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
                        <h1 className="page-title">Resume</h1>
                        <div className="resume-div" id="content">
                        <MediaQuery maxDeviceWidth={480}>
                        <div style={{backgroundColor: "white"}}>
                            <h4 style={{textAlign: "center"}}>Having trouble viewing in mobile? Turn sideways for a better view. (Changes will be made to this page soon).</h4>
                        </div>
                        </MediaQuery>
                        {/* <MediaQuery minDeviceWidth={481} maxDeviceWidth={1200}>
                            <div style={{backgroundColor: "white"}}>
                            <h4 style={{textAlign: "center"}}>Having trouble viewing in portrait mode on your tablet? Turn sideways for a better view. (Changes will be made to this page soon).</h4>
                            </div>
                        </MediaQuery> */}
                            <Document file={this.state.file}>
                                <MediaQuery maxDeviceWidth={480}>
                                    <Page pageNumber={this.state.pageNumber} width={1200} scale={0.5}/>
                                </MediaQuery>
                                <MediaQuery minDeviceWidth={481} maxDeviceWidth={1200}>
                                    <Page pageNumber={this.state.pageNumber} width={2000} scale={0.5}/>
                                </MediaQuery>
                                <MediaQuery minDeviceWidth={1201}>
                                    <Page pageNumber={this.state.pageNumber} width={3000} scale={0.5}/>
                                </MediaQuery>
                            </Document>
                            <p style={{color: "white"}}>Page {this.state.pageNumber} of {this.state.numPages}</p>
                        </div>
            </React.Fragment>
          );
    }
}
 
export default Resume;