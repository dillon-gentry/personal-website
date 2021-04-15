import React, { Component } from 'react';
import NavBar from './navbar';

class Projects extends Component {
    state = {  }

    titleStyle = {
        position: "fixed",
        fontSize: "5rem",
        textAlign: "center"
        //paddingLeft: "21vw"
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
        //each project button has popup box that give more info about the project
        //for golf guru provide link and talk about libraries used
        //auction house make a gif or screenshots of gui
        //time series forecasting screenshots of UI with general details from resume 
        return (
            <React.Fragment>
                <div className="row" style= {{width: "100vw"}}>
                    <div className="col" style={{width: "21vw"}}>
                        <NavBar/>
                    </div>
                    <div style= {this.aboutDivStyle } className="col">
                        <h1 style= { this.titleStyle }>Projects</h1>
                        <div className="row" style= {this.projRow1Style}>
                            {/* <div className="col">
                                {/* <a href="https://github.com/dillon-gentry">
                                <div class="box">
                                Github logo here
                                </div>
                                </a>
                            </div> */}
                            <div className="col">
                                <div className="row">
                                    <div class="box">
                                        Golf Guru IDB
                                    </div>
                                </div>
                                <div className="row">
                                    <div class="box">
                                        NOKIA Automatic Time Series Forecasting
                                    </div>
                                </div>
                                <div className="row">
                                    <div class="box">
                                       Auction House
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="row" style={this.projRow2Style}>
                            <div className="col">
                                <div class="box">
                                Auction House
                                </div>
                            </div>
                            <div className="col">
                                <div class="box">
                                    NOKIA Automatic Time Series Forecasting
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </React.Fragment>
          );
    }
}
 
export default Projects;
<h1>Projects Section</h1>