import React, { Component } from 'react';
import NavBar from './navbar';

class NokiaProj extends Component{

    titleStyle = {
        fontSize: "5rem",
        textAlign: "center"
    }

    pageDivStyle = {
        marginLeft: "0vw",
        width: "80vw",
        textAlign: "center"
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

    togglePopup1 = () => {
        var popup = document.getElementById("popup1");
        popup.classList.toggle("show");
    }

    togglePopup2 = () => {
        var popup = document.getElementById("popup2");
        popup.classList.toggle("show");
    }


    render(){
        return(
            <React.Fragment>
                <div className="row" style= {{width: "100vw"}}>
                    
                    {/* Navbar element first */}
                    <NavBar/>

                    {/* Page content */}
                    <div style= {this.pageDivStyle } className="col" id="page">
                        <h1 style= { this.titleStyle }>Nokia Auto-TSF</h1>
                        <div id="content" style={this.contentDivStyle}>
                            <div className="row" style = {{ marginLeft: "18vw", marginTop: "3vh"}}>
                                <img src="/gif/tsf_demo.gif" alt="loading..." style={{width: "40vw"}} />
                            </div>
                            <div className="row" style = {{ marginLeft: "18vw", marginTop: "3vh", width: "40vw"}}>
                                <div className="card-deck">
                                <div className="card" style={{height: "22vh"}}>
                                        <div className="card-body">
                                            <h4 className="card-title">Background</h4>
                                            <p className="card-text">A senior design project with Nokia for automatic time series forecasting.</p>
                                            <div class="popup" onClick={ () => this.togglePopup1() }>
                                            <a className="btn btn-primary">More Background</a>
                                                <span class="popuptext" id="popup1">Nokia sponsored this project that consists of a forecasting API that can take an input dataset
                                                and automatically perform a SARIMA, XGBoost, and LSTM forecast on the data and display to the user the "best" model by determining the model with
                                                the best RMSE score.</span>
                                            </div>
                                        </div>
                                </div>
                                <div className="card" style={{height: "22vh"}}>
                                        <div className="card-body">
                                            <h4 className="card-title">Information</h4>
                                            <p className="card-text">Forecasting Flask API hooked up to a ReactJS frontend UI.</p>
                                            <div class="popup" onClick={ () => this.togglePopup2() }>
                                            <a className="btn btn-primary">More Info</a>
                                                <span class="popuptext" id="popup2">The project involves a ReactJS user interface that allows the user to 
                                                    perform time series forecasting through a backend Flask API while displaying the results to the user
                                                    using ChartJS. GET and POST requests are made to the API using Axios within the React App.</span>
                                            </div>
                                        </div>
                                </div>
                                <div className="card" style={{height: "22vh"}}>
                                        <div className="card-body">
                                            <h4 className="card-title">Tools</h4>
                                            <p className="card-text">ReactJS, ChartJS, Axios, Flask, JavaScript, HTML/CSS, MongoDB</p>
                                            <p className="card-text"></p>
                                        </div>
                                </div>
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
}export default NokiaProj;