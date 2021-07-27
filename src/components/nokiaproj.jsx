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

                <h1 className="proj-title">Nokia Auto-TSF</h1>

                {/* <MediaQuery maxDeviceWidth={480}> */}
                    <div className="flex-all-proj-col">
                        <div className="flex-proj-mobile">
                            <h4>Tools</h4>
                            <p>ReactJS, ChartJS, Axios, Flask, Flask-RESTful, JavaScript, HTML/CSS, MongoDB</p>
                        </div>
                        <div className="flex-proj-mobile">
                            <h4>Background</h4>
                            <p>A senior design project with Nokia for automatic time series forecasting.</p>
                            <p>Nokia wanted a forecasting API that can take a dataset
                                and determine the best model to use for forecasting the data based on a collection of models while using a UI for API inputs and outputs.</p>
                            {/* <div class="popup" onClick={ () => this.togglePopup1() }>
                            <a>More Background</a>
                                <span class="popuptext" id="popup1">Nokia wanted a forecasting API that can take a dataset
                                and determine the best model to use for forecasting the data based on a collection of models while using a UI for API inputs and outputs.</span>
                            </div> */}
                        </div>
                        <div className="flex-proj-mobile">
                            <h4>Info</h4>
                            <p>ReactJS UI that communicates with a Flask API to perform and display forecasts.</p>
                            <p>A ReactJS UI that communicates with a backend Flask API using Axios while displaying forecasts to the user
                                    using ChartJS. The API uses MongoDB to store any dataset or forecast data.</p>
                            {/* <div class="popup" onClick={ () => this.togglePopup2() }>
                            <a>More Info</a>
                                <span class="popuptext" id="popup2">A ReactJS UI that communicates with a backend Flask API using Axios while displaying forecasts to the user
                                    using ChartJS. The API uses MongoDB to store any dataset or forecast data.</span>
                            </div> */}
                        </div>
                    </div>
                {/* </MediaQuery> */}

                {/* <div style={{position: "absolute", left: "29vw", width: "42vw", height: "47vh", top: "12vh"}}>
                    <img src="/gif/tsf_demo.gif" alt="loading..." style={{marginLeft: "1vw", width: "40vw"}}></img>
                </div> */}

            </React.Fragment>
        );
    }
}export default NokiaProj;