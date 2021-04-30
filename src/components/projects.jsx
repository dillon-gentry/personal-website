import React, { Component } from 'react';

class Projects extends Component {
    state = {  }

    titleStyle = {
        fontSize: "5rem",
        textAlign: "center"
    }

    bgStyle = {
        backgroundImage: "url('/img/splash_bg.png')",
        backgroundSize: "cover",
        overflow: "hidden",
        height: "100vh",
        widht: "100vw"
    }

    pageDivStyle = {
        marginLeft: "0vw",
        width: "100vw",
        textAlign: "center",
        position: "absolute"
    }

    contentDivStyle = {
        position: "relative",
        left: "11%"
    }

    projRow1Style = {
        marginTop: "30vh",
        marginLeft: "-20vw"
    }

    projRow2Style = {
        marginTop: "5vh",
        marginLeft: "-20vw"
    }

    footerStyle= {
        zIndex: "0",
        position: "absolute",
        left: "18vw",
        bottom: "0vh",
        height:"10vh",
        width:"82vw",
        background:"#999"
    }

    render() {
        return (
            <React.Fragment>
                <div style={this.bgStyle}>
                    <div className="row" style= {{width: "100vw"}}>

                        {/* Page content */}
                        <div style= {this.pageDivStyle } id="page">
                            
                            {/*Page title */}
                            <h1 style= { this.titleStyle }>Projects</h1>

                            {/*Page content*/}
                            <div id="content" style={{marginLeft: "3vw"}}>
                                <div className="row" style = {{ marginLeft: "10vw", marginTop: "3vh"}}>

                                    {/*Projects card deck*/}
                                    <div className="card-deck">
                                        <div className="card" style={{height: "22vh"}}>
                                            <div className="card-body">
                                                <h4 className="card-title">Golf Guru IDB</h4>
                                                <p className="card-text">Tools</p>
                                                <p className="card-text">Flask, Bootstrap 4, JavaScript, HTML/CSS, MongoDB, Google Cloud Platform</p>
                                                <a href="/projects/golf-guru" class="btn btn-primary">Learn More</a>
                                            </div>
                                        </div>
                                        <div className="card" style={{marginTop: "22vh", height: "22vh"}}>
                                            <div className="card-body">
                                                <h4 className="card-title">Nokia Auto-Forecasting</h4>
                                                <p className="card-text">Tools</p>
                                                <p className="card-text">ReactJS, ChartJS, Axios, Flask, JavaScript, HTML/CSS, MongoDB</p>
                                                <a href="/projects/nokia-tsf" class="btn btn-primary">Learn More</a>
                                            </div>
                                        </div>
                                        <div className="card" style={{marginTop: "44vh"}}>
                                            <div className="card-body">
                                                <h4 className="card-title">Auction House</h4>
                                                <p className="card-text">Tools</p>
                                                <p className="card-text">Java, JavaFx, Observable interface</p>
                                                <a href="/projects/auction-house" class="btn btn-primary">Learn More</a>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
          );
    }
}
 
export default Projects;