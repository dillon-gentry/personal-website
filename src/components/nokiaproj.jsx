import React, { Component } from 'react';

class NokiaProj extends Component{

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
        position: "absolute",
        height: "90vh",
        overflowY: "scroll",
        overflowX: "hidden"
    }

    contentDivStyle = {
        position: "relative",
        left: "12%"
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
                <div style={this.bgStyle}>
                    <div className="row" style= {{width: "100vw"}}>

                        {/* Page content */}
                        <div style= {this.pageDivStyle } id="page">
                            <h1 style= { this.titleStyle }>Nokia Auto-TSF</h1>
                            <div id="content" style={this.contentDivStyle}>
                                <div className="row" style = {{ marginLeft: "18vw", marginTop: "3vh"}}>
                                <div class="card" style={{width: "40vw"}}>
                                    <div class="card-body">
                                        <h4 class="card-title">Demo</h4>
                                    </div>
                                    <img class="card-img-bottom"src="/gif/tsf_demo.gif" alt="loading..." style={{marginLeft: "1vw", width: "38vw"}}></img>
                                </div>
                                </div>
                                <div className="row" style = {{ marginLeft: "18vw", marginTop: "3vh", width: "40vw"}}>
                                    <div className="card-deck">
                                    <div className="card" style={{width: "25vw"}}>
                                            <div className="card-body">
                                                <h4 className="card-title">Background</h4>
                                                <p className="card-text">A senior design project with Nokia for automatic time series forecasting based on a collection of models.</p>
                                                <div class="popup" onClick={ () => this.togglePopup1() }>
                                                <a className="btn btn-primary">More Background</a>
                                                    <span class="popuptext" id="popup1">Nokia sponsored this project that consists of a forecasting API that can take an input dataset
                                                    and automatically perform a SARIMA, XGBoost, and LSTM forecast on the data and display to the user the "best" model by determining the model with
                                                    the best RMSE score.</span>
                                                </div>
                                            </div>
                                    </div>
                                    <div className="card" style={{width: "25vw"}}>
                                            <div className="card-body">
                                                <h4 className="card-title">Information</h4>
                                                <p className="card-text">ReactJS UI that communicates with a Flask API to perform and display forecasts.</p>
                                                <div class="popup" onClick={ () => this.togglePopup2() }>
                                                <a className="btn btn-primary">More Info</a>
                                                    <span class="popuptext" id="popup2">The project involves a ReactJS user interface that allows the user to 
                                                        perform time series forecasting through a backend Flask API while displaying the results to the user
                                                        using ChartJS. GET and POST requests are made to the API using Axios within the React App.
                                                         The API uses MongoDB to store any dataset or forecast data.</span>
                                                </div>
                                            </div>
                                    </div>
                                    <div className="card" style={{width: "25vw"}}>
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

                    </div>
                </div>
            </React.Fragment>
        );
    }
}export default NokiaProj;