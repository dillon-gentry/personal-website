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

                                {/* For Mobile */}
                                <MediaQuery maxDeviceWidth={600}>
                                <div className="card-deck">
                                    <div className="card">
                                            <div className="card-body">
                                                <h4 className="card-title">Tools</h4>
                                                <p className="card-text">ReactJS, ChartJS, Axios, Flask, Flask-RESTful, JavaScript, HTML/CSS, MongoDB</p>
                                                <p className="card-text"></p>
                                            </div>
                                    </div>
                                    <div className="card">
                                            <div className="card-body">
                                                <h4 className="card-title">Background</h4>
                                                <p className="card-text">A senior design project with Nokia for automatic time series forecasting.</p>
                                                <div class="popup" onClick={ () => this.togglePopup1() }>
                                                <a className="btn btn-primary">More Background</a>
                                                    <span class="popuptext" id="popup1">Nokia wanted a forecasting API that can take a dataset
                                                    and determine the best model to use for forecasting the data based on a collection of models while using a UI for API inputs and outputs.</span>
                                                </div>
                                            </div>
                                    </div>
                                    <div className="card">
                                            <div className="card-body">
                                                <h4 className="card-title">Information</h4>
                                                <p className="card-text">ReactJS UI that communicates with a Flask API to perform and display forecasts.</p>
                                                <div class="popup" onClick={ () => this.togglePopup2() }>
                                                <a className="btn btn-primary">More Info</a>
                                                    <span class="popuptext" id="popup2">A ReactJS UI that communicates with a backend Flask API using Axios while displaying forecasts to the user
                                                        using ChartJS. The API uses MongoDB to store any dataset or forecast data.</span>
                                                </div>
                                            </div>
                                    </div>
                                    </div>
                                </MediaQuery>

                                {/* For (most) monitors */}
                                <MediaQuery minDeviceWidth={601}>
                                <div style={{position: "absolute", left: "29vw", width: "42vw", height: "47vh", top: "12vh"}}>
                                    <img src="/gif/tsf_demo.gif" alt="loading..." style={{marginLeft: "1vw", width: "40vw"}}></img>
                                </div>
                                <div className="row" style = {{ position: "absolute", left: "29.5vw", top: "57vh", width: "42vw", margin: "0"}}>
                                    <div className="card-deck">
                                    <div className="card">
                                            <div className="card-body">
                                                <h4 className="card-title">Background</h4>
                                                <p className="card-text">A senior design project with Nokia for automatic time series forecasting.</p>
                                                <div class="popup" onClick={ () => this.togglePopup1() }>
                                                <a className="btn btn-primary">More Background</a>
                                                    <span class="popuptext" id="popup1">Nokia wanted a forecasting API that can take a dataset
                                                    and determine the best model to use for forecasting the data based on a collection of models while using a UI for API inputs and outputs.</span>
                                                </div>
                                            </div>
                                    </div>
                                    <div className="card">
                                            <div className="card-body">
                                                <h4 className="card-title">Info</h4>
                                                <p className="card-text">UI that communicates with an API to perform and display forecasts.</p>
                                                <div class="popup" onClick={ () => this.togglePopup2() }>
                                                <a className="btn btn-primary">More Info</a>
                                                    <span class="popuptext" id="popup2">A ReactJS UI that communicates with a backend Flask API using Axios while displaying forecasts to the user
                                                        using ChartJS. The API uses MongoDB to store any dataset or forecast data.</span>
                                                </div>
                                            </div>
                                    </div>
                                    <div className="card">
                                            <div className="card-body">
                                                <h4 className="card-title">Tools</h4>
                                                <p className="card-text">ReactJS, ChartJS, Axios, Flask, Flask-RESTful, JavaScript, HTML/CSS, MongoDB</p>
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