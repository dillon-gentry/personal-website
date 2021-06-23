import React, { Component } from 'react';

class Projects extends Component {
    state={
        device: "not-mobile"
    }

    projRow1Style = {
        marginTop: "30vh",
        marginLeft: "-20vw"
    }

    projRow2Style = {
        marginTop: "5vh",
        marginLeft: "-20vw"
    }

    render() {
        return (
            <React.Fragment>
                    {/* <div className="row" style= {{width: "100vw"}}> */}

                        {/* Page content */}
                        <div className="page-div" id="page">
                            
                            {/*Page title */}
                            {/* <div className="page-title-div"> */}
                                <h1 className="page-title">Projects</h1>
                            {/* </div> */}
                            

                            {/*Page content*/}
                            <div id="content">
                                {/* <div className="row" style = {{ marginTop: "15vh", width: "96vw"}}> */}

                                    {/*Projects card deck*/}
                                    <div className="card-deck" style={{position: "absolute", left: "20vw"}}>
                                        <div className="card">
                                        {/* <div className="card" style={{width: "20vw", position: "absolute", left: "10vw", height: "25vh"}}> */}
                                            <div className="card-body">
                                                <h4 className="card-title">Golf Guru IDB</h4>
                                                {/* <p className="card-text">Tools</p> */}
                                                <p className="card-text">Flask, Bootstrap 4, JavaScript, HTML/CSS, MongoDB, Google Cloud Platform</p>
                                                <a href="/projects/golf-guru" class="btn btn-primary">Learn More</a>
                                            </div>
                                        </div>
                                        <div className="card">
                                        {/* <div className="card" style={{width: "20vw", position: "absolute", left: "40vw", padding: "0", height: "25vh"}}> */}
                                            <div className="card-body">
                                                <h4 className="card-title">Nokia Auto-Forecasting</h4>
                                                {/* <p className="card-text">Tools</p> */}
                                                <p className="card-text">ReactJS, ChartJS, Axios, Flask, JavaScript, HTML/CSS, MongoDB</p>
                                                <a href="/projects/nokia-tsf" class="btn btn-primary">Learn More</a>
                                            </div>
                                        </div>
                                        <div className="card">

                                        {/* <div className="card" style={{width: "20vw", position: "absolute", left: "70vw", height: "25vh"}}> */}
                                            <div className="card-body">
                                                <h4 className="card-title">Auction House</h4>
                                                {/* <p className="card-text">Tools</p> */}
                                                <p className="card-text">Java, JavaFx, Observable interface</p>
                                                <a href="/projects/auction-house" class="btn btn-primary">Learn More</a>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        {/* </div> */}
                    {/* // </div> */}
            </React.Fragment>
          );
    }
}
 
export default Projects;