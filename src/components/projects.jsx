import React, { Component } from 'react';
import MediaQuery from 'react-responsive';

class Projects extends Component {

    render() {
        return (
            <React.Fragment>
                <h1 className="page-title">Projects</h1>

                {/* <div style={{backgroundColor: "white"}}>
                    <h4 style={{textAlign: "center"}}>Note: Recorded GIFs (courtesy of ScreenToGif) of project demos will soon be available on project pages!</h4>
                </div> */}
                <MediaQuery maxDeviceWidth={480}>
                    <div className="flex-all-proj-col">
                        <div className="flex-proj-mobile">
                            <h4>Golf Guru IDB</h4>
                            <h6>Tools</h6>
                            <p>Flask, Bootstrap 4, JavaScript, HTML/CSS, MongoDB, GCP</p>
                            <a href="/projects/golf-guru">
                                <button>Learn More</button>
                            </a>
                        </div>
                        <div className="flex-proj-mobile">
                            <h4>Nokia Auto-TSF</h4>
                            <h6>Tools</h6>
                            <p>ReactJS, ChartJS, Axios, Flask, JavaScript, HTML/CSS, MongoDB</p>
                            <a href="/projects/nokia-tsf">
                                <button>Learn More</button>
                            </a>
                        </div>
                        <div className="flex-proj-mobile">
                            <h4>Auction House</h4>
                            <h6>Tools</h6>
                            <p>Java, JavaFx</p>
                            <a href="/projects/auction-house">
                                <button>Learn More</button>
                            </a>
                        </div>
                    </div>
                </MediaQuery>
                <MediaQuery minDeviceWidth={481}>
                    <div className="flex-all-proj-col">
                        <div className="flex-proj">
                            <h4>Golf Guru IDB</h4>
                            <h6>Tools</h6>
                            <p>Flask, Bootstrap 4, JavaScript, HTML/CSS, MongoDB, GCP</p>
                            <a href="/projects/golf-guru">
                                <button>Learn More</button>
                            </a>
                        </div>
                        <div className="flex-proj">
                            <h4>Nokia Auto-TSF</h4>
                            <h6>Tools</h6>
                            <p className="card-text">ReactJS, ChartJS, Axios, Flask, JavaScript, HTML/CSS, MongoDB</p>
                            <a href="/projects/nokia-tsf">
                                <button>Learn More</button>
                            </a>
                        </div>
                        <div className="flex-proj">
                            <h4>Auction House</h4>
                            <h6>Tools</h6>
                            <p className="card-text">Java, JavaFx</p>
                            <a href="/projects/auction-house">
                                <button>Learn More</button>
                            </a>
                        </div>
                    </div>
                </MediaQuery>
            </React.Fragment>
          );
    }
}
 
export default Projects;