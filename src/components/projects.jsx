import React, { Component } from 'react';
import MediaQuery from 'react-responsive';

class Projects extends Component {

    render() {
        return (
            <React.Fragment>
                <h1 className="page-title">Projects</h1>
                <MediaQuery maxDeviceWidth={480}>
                    <div className="flex-mobile-all-proj-col">
                        <div className="flex-proj-col">
                            <h4>Golf Guru IDB</h4>
                            <h6>Tools</h6>
                            <p>Flask, Bootstrap 4, JavaScript, HTML/CSS, MongoDB, GCP</p>
                            <a href="/projects/golf-guru">Learn More</a>
                        </div>
                        <div className="flex-proj-col">
                            <h4>Nokia Auto-TSF</h4>
                            <h6>Tools</h6>
                            <p>ReactJS, ChartJS, Axios, Flask, JavaScript, HTML/CSS, MongoDB</p>
                            <a href="/projects/nokia-tsf">Learn More</a>
                        </div>
                        <div className="flex-proj-col">
                            <h4>Auction House</h4>
                            <h6>Tools</h6>
                            <p>Java, JavaFx, Observable interface</p>
                            <a href="/projects/auction-house">Learn More</a>
                        </div>
                    </div>
                </MediaQuery>
                <MediaQuery minDeviceWidth={481}>
                    <div className="flex-all-proj-row">
                        <div className="flex-proj-row">
                            <h4>Golf Guru IDB</h4>
                            <h6>Tools</h6>
                            <p>Flask, Bootstrap 4, JavaScript, HTML/CSS, MongoDB, GCP</p>
                            <a href="/projects/golf-guru">Learn More</a>
                        </div>
                        <div className="flex-proj-row">
                            <h4>Nokia Auto-TSF</h4>
                            <h6>Tools</h6>
                            <p className="card-text">ReactJS, ChartJS, Axios, Flask, JavaScript, HTML/CSS, MongoDB</p>
                            <a href="/projects/nokia-tsf">Learn More</a>
                        </div>
                        <div className="flex-proj-row">
                            <h4>Auction House</h4>
                            <h6>Tools</h6>
                            <p className="card-text">Java, JavaFx, Observable interface</p>
                            <a href="/projects/auction-house">Learn More</a>
                        </div>
                    </div>
                </MediaQuery>
            </React.Fragment>
          );
    }
}
 
export default Projects;