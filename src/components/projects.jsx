import React, { Component } from 'react';
import MediaQuery from 'react-responsive';

class Projects extends Component {

    render() {
        return (
            <React.Fragment>

                        {/* Page content */}
                        <div className="page-div" id="page">
                            
                            {/*Page title */}
                            <h1 className="page-title">Projects</h1>
                            

                            {/*Page content*/}
                            <div id="content">

                                    {/*Projects card deck*/}
                                        <MediaQuery maxDeviceWidth={600}>
                                        <div className="card-deck" style={{position: "absolute", left: "20vw"}}>
                                            <div className="card">
                                                <div className="card-body">
                                                    <h4 className="card-title">Golf Guru IDB</h4>
                                                    <p className="card-text">Flask, Bootstrap 4, JavaScript, HTML/CSS, MongoDB, Google Cloud Platform</p>
                                                    <a href="/projects/golf-guru" class="btn btn-primary">Learn More</a>
                                                </div>
                                            </div>

                                            <div className="card">
                                                <div className="card-body">
                                                    <h4 className="card-title">Nokia Auto-Forecasting</h4>
                                                    <p className="card-text">ReactJS, ChartJS, Axios, Flask, JavaScript, HTML/CSS, MongoDB</p>
                                                    <a href="/projects/nokia-tsf" class="btn btn-primary">Learn More</a>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className="card-body">
                                                    <h4 className="card-title">Auction House</h4>
                                                    <p className="card-text">Java, JavaFx, Observable interface</p>
                                                    <a href="/projects/auction-house" class="btn btn-primary">Learn More</a>
                                                </div>
                                            </div>
                                        </div>
                                        </MediaQuery>

                                        <MediaQuery minDeviceWidth={601}>
                                        <div className="card-deck">
                                            <div className="card" style={{width: "20vw", position: "absolute", left: "10vw"}}>
                                                <div className="card-body">
                                                    <h4 className="card-title">Golf Guru IDB</h4>                                               
                                                    <p className="card-text">Flask, Bootstrap 4, JavaScript, HTML/CSS, MongoDB, Google Cloud Platform</p>
                                                    <a href="/projects/golf-guru" class="btn btn-primary">Learn More</a>
                                                </div>
                                            </div>

                                            <div className="card" style={{width: "20vw", position: "absolute", left: "40vw", padding: "0"}}>
                                                <div className="card-body">
                                                    <h4 className="card-title">Nokia Auto-Forecasting</h4>
                                                    <p className="card-text">ReactJS, ChartJS, Axios, Flask, JavaScript, HTML/CSS, MongoDB</p>
                                                    <a href="/projects/nokia-tsf" class="btn btn-primary">Learn More</a>
                                                </div>
                                            </div>

                                            <div className="card" style={{width: "20vw", position: "absolute", left: "70vw"}}>
                                                <div className="card-body">
                                                    <h4 className="card-title">Auction House</h4>
                                                    <p className="card-text">Java, JavaFx, Observable interface</p>
                                                    <a href="/projects/auction-house" class="btn btn-primary">Learn More</a>
                                                </div>
                                            </div>
                                        </div>
                                        </MediaQuery>
                                    
                                </div>
                            </div>
            </React.Fragment>
          );
    }
}
 
export default Projects;