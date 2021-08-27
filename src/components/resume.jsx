import React, { Component } from 'react';
import { Document, Page} from 'react-pdf/dist/esm/entry.webpack';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import MediaQuery from 'react-responsive';



class Resume extends Component {
    state = {
        numPages: 1,
        pageNumber: 1,
        file: "/Resume_Aug2021.pdf"
    }

    render() {
        const { vWidth } = this.props;

        return (
            <React.Fragment>
                        <h1 className="page-title">Resume</h1>
                        <div className="resume-div" id="content">
                            <Document file={this.state.file}>
                                <MediaQuery maxDeviceWidth={1024}>
                                    <Page pageNumber={this.state.pageNumber} width={ vWidth*.9 } scale={1.0}/>
                                </MediaQuery>
                                <MediaQuery minDeviceWidth={1025}>
                                    <Page pageNumber={this.state.pageNumber} width={ vWidth*.75 } scale={1.0}/>
                                </MediaQuery>
                            </Document>
                            <p style={{color: "white"}}>Page {this.state.pageNumber} of {this.state.numPages}</p>
                        </div>
            </React.Fragment>
          );
    }
}
 
export default Resume;