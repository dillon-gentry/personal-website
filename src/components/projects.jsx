import React, { Component } from 'react';
import NavBar from './navbar';

class Projects extends Component {
    state = {  }

    titleStyle = {
        fontSize: "5rem",
        textAlign: "center"
        //paddingLeft: "21vw"
    }

    pageDivStyle = {
        marginLeft: "0vw",
        width: "80vw",
        textAlign: "center"
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
        //each project button has popup box that give more info about the project
        //for golf guru provide link and talk about libraries used
        //auction house make a gif or screenshots of gui
        //time series forecasting screenshots of UI with general details from resume 
        return (
            <React.Fragment>
                <div className="row" style= {{width: "100vw"}}>
                    
                    {/* Navbar element first */}
                    <NavBar/>

                    {/* Page content */}
                    <div style= {this.pageDivStyle } className="col" id="page">
                        <h1 style= { this.titleStyle }>Projects</h1>
                        <div id="content" style={{marginLeft: "3vw"}}>
                            <div className="row" style = {{ marginLeft: "10vw", marginTop: "3vh"}}>

                                <div className="card-deck">
                                {/* <div className="col-3"> */}
                                    <div className="card" style={{height: "22vh"}}>
                                        {/* <img className="card-img-top" src="img_avatar1.png" alt="Card image"/> */}
                                        <div className="card-body">
                                            <h4 className="card-title">Golf Guru IDB</h4>
                                            <p className="card-text">Tools</p>
                                            <p className="card-text">Flask, Bootstrap 4, JavaScript, HTML/CSS, MongoDB, Google Cloud Platform</p>
                                            <a href="/projects/golf-guru" class="btn btn-primary">Learn More</a>
                                        </div>
                                    </div>
                                {/* </div> */}

                                {/* <div className="col-3"> */}
                                    <div className="card" style={{marginTop: "22vh", height: "22vh"}}>
                                        {/* <img className="card-img-top" src="img_avatar1.png" alt="Card image"/> */}
                                        <div className="card-body">
                                            <h4 className="card-title">Nokia Auto-Forecasting</h4>
                                            <p className="card-text">Tools</p>
                                            <p className="card-text">ReactJS, ChartJS, Axios, Flask, JavaScript, HTML/CSS, MongoDB</p>
                                            <a href="/projects/nokia-tsf" class="btn btn-primary">Learn More</a>
                                        </div>
                                    </div>
                                {/* </div> */}

                                {/* <div className="col-3"> */}
                                    <div className="card" style={{marginTop: "44vh"}}>
                                        {/* <img className="card-img-top" src="img_avatar1.png" alt="Card image"/> */}
                                        <div className="card-body">
                                            <h4 className="card-title">Auction House</h4>
                                            <p className="card-text">Tools</p>
                                            <p className="card-text">Using Java socket programming, the auction house operates as a server accepting multiple clients
                                                    who wish to compete and place bids on items. The client GUI was developed using JavaFx.</p>
                                            <a href="/projects/auction-house" class="btn btn-primary">Learn More</a>
                                        </div>
                                    </div>
                                {/* </div> */}
                                </div>
                            
                            </div>
                        </div>
                    </div>

                    {/* Footer starts here */}
                    <footer style={this.footerStyle} id="foot">
                            <div className="row" style={{ marginLeft: "10vw", marginTop: "2vh", marginRight: "6vw" }}>
                                <div className="col-3" style={{marginRight: "2vw", paddingTop: "1vh"}}>
                                    <h4>Last updated: 4/18/2021</h4>
                                </div>
                                <div className="col-5" style={{marginRight: "2vw", paddingTop: "1.5vh"}}>
                                    <h6>Made with React.js, HTML, CSS, Bootstrap 4, and FontAwesome.</h6>
                                </div>
                                <div className="col-2">
                                    <div className="row">
                                        <div style={{paddingRight: "2vw"}}>
                                            <a href="mailto: djg81999@gmail.com" style={{ textDecoration: "none", color: "blue", display: "block", padding: "1px"}}>
                                                <i class="fas fa-envelope-square" style={{fontSize: "3rem", marginBottom: "1vh" }}></i>
                                            </a>
                                        </div>
                                        <div>
                                            <a href="https://www.linkedin.com/in/dillon-gentry-768b411a0/" style={{ textDecoration: "none", color: "blue", display: "block", padding: "1px"}}>
                                                <i class="fab fa-linkedin" style={{fontSize: "3rem", marginBottom: "1vh"}}></i>
                                            </a>
                                        </div>  
                                    </div>
                                </div>
                            </div>
                    </footer>
                </div>
            </React.Fragment>
          );
    }
}
 
export default Projects;
<h1>Projects Section</h1>