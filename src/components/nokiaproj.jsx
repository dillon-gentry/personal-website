import React, { Component } from 'react';
import MediaQuery from 'react-responsive';

class NokiaProj extends Component{

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

                        {/* Page content */}
                        <div className="page-div-proj" id="page">
                            <h1 className="page-title">Nokia Auto-TSF</h1>
                            <div className="content-div" id="content">

                                <MediaQuery minDeviceWidth={200} and maxDeviceWidth={600}>
                                <div className="card-deck">
                                    <div className="card">
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
                                    <div className="card">
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
                                    <div className="card">
                                            <div className="card-body">
                                                <h4 className="card-title">Tools</h4>
                                                <p className="card-text">ReactJS, ChartJS, Axios, Flask, JavaScript, HTML/CSS, MongoDB</p>
                                                <p className="card-text"></p>
                                            </div>
                                    </div>
                                    </div>
                                </MediaQuery>

                                <MediaQuery minDeviceWidth={1000}>
                                <div class="card" style={{position: "absolute", left: "29vw", width: "42vw", height: "47vh", top: "10vh"}}>
                                    <div class="card-body">
                                        <h4 class="card-title">Demo</h4>
                                    </div>
                                    <img class="card-img-bottom"src="/gif/tsf_demo.gif" alt="loading..." style={{marginLeft: "2vw", width: "38vw"}}></img>
                                </div>
                                <div className="row" style = {{ position: "absolute", left: "30vw", top: "57vh", width: "40vw", margin: "0"}}>
                                    <div className="card-deck">
                                    <div className="card">
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
                                    <div className="card">
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
                                    <div className="card">
                                            <div className="card-body">
                                                <h4 className="card-title">Tools</h4>
                                                <p className="card-text">ReactJS, ChartJS, Axios, Flask, JavaScript, HTML/CSS, MongoDB</p>
                                                <p className="card-text"></p>
                                            </div>
                                    </div>
                                    </div>
                                    
                                </div>
                                </MediaQuery>
                            </div>
                        </div>

            </React.Fragment>
        );
    }
}export default NokiaProj;