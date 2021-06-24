import React, { Component } from 'react';
import MediaQuery from 'react-responsive';

class GolfProj extends Component{

    togglePopup = () => {
        var popup = document.getElementById("myPopup");
        popup.classList.toggle("show");
    }


    render(){
        return(
            <React.Fragment>

                    {/* Page content */}
                    <div className="page-div-proj" id="page">
                        <h1 className="page-title">Golf Guru IDB</h1>
                            <div className="content-div" id="content">

                                <MediaQuery minDeviceWidth={200} and maxDeviceWidth={600}>
                                    <div className="card-deck">
                                            <div class="card">
                                                    <div className="card-body">
                                                        <h4 className="card-title">Link</h4>
                                                        <p className="card-text">Click below for the finalized version of the website.</p>
                                                        <a href="http://golf-idb.uc.r.appspot.com" class="btn btn-primary">Go</a>
                                                    </div>
                                            </div>
                                            <div class="card">
                                                    <div className="card-body">
                                                        <h4 className="card-title">Information</h4>
                                                        <p className="card-text">Full stack internet database project performed in Agile sprints.</p>
                                                        <div class="popup" onClick={ () => this.togglePopup() }>
                                                        <a className="btn btn-primary">More Info</a>
                                                            <span class="popuptext" id="myPopup">Golf Guru is a full stack internet database project that manages hundreds of data entries within
                                                                a MongoDB cluster and displays this data to the user through a Flask application.</span>
                                                        </div>
                                                    </div>
                                            </div>
                                            <div class="card">
                                                    <div className="card-body">
                                                        <h4 className="card-title">Tools</h4>
                                                        <p className="card-text">Flask, Bootstrap 4, JavaScript, HTML/CSS, MongoDB, Google Cloud Platform</p>
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
                                                    <img class="card-img-bottom" src="/gif/golf_demo.gif" alt="loading..." style={{marginLeft: "2vw", width: "38vw"}}></img>
                                            </div>
                                            <div className="row" style = {{ position: "absolute", left: "30vw", top: "57vh", width: "40vw", margin: "0"}}>
                                                <div className="card-deck">
                                                    <div className="card">
                                                            <div className="card-body">
                                                                <h4 className="card-title">Link</h4>
                                                                <p className="card-text">Click below for the finalized version of the website.</p>
                                                                <a href="http://golf-idb.uc.r.appspot.com" class="btn btn-primary">Go</a>
                                                            </div>
                                                    </div>
                                                    <div className="card">
                                                            <div className="card-body">
                                                                <h4 className="card-title">Information</h4>
                                                                <p className="card-text">Full stack internet database project performed in Agile sprints.</p>
                                                                <div class="popup" onClick={ () => this.togglePopup() }>
                                                                <a className="btn btn-primary">More Info</a>
                                                                    <span class="popuptext" id="myPopup">Golf Guru is a full stack internet database project that manages hundreds of data entries within
                                                                        a MongoDB cluster and displays this data to the user through a Flask application.</span>
                                                                </div>
                                                            </div>
                                                    </div>
                                                    <div className="card">
                                                            <div className="card-body">
                                                                <h4 className="card-title">Tools</h4>
                                                                <p className="card-text">Flask, Bootstrap 4, JavaScript, HTML/CSS, MongoDB, Google Cloud Platform</p>
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
}export default GolfProj;