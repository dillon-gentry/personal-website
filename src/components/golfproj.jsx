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

                <h1 className="proj-title">Golf Guru IDB</h1>

                {/* <MediaQuery maxDeviceWidth={480}> */}
                    <div className="flex-all-proj-col">
                        <div className="flex-proj-mobile">
                            <h4>Link</h4>
                            <p>Click below for the finalized version of the website.</p>
                            <a href="http://golf-idb.uc.r.appspot.com">Go</a>
                        </div>
                        <div className="flex-proj-mobile">
                            <h4>Tools</h4>
                            <p>Flask, Bootstrap 4, JavaScript, HTML/CSS, MongoDB, Google Cloud Platform</p>
                        </div>
                        <div className="flex-proj-mobile">
                            <h4>Info</h4>
                            <p>Full stack internet database completed in Agile sprints.</p>
                            <p>Golf Guru uses Flask for both the frontend and backend while holding hundreds of data entries in a
                                                MongoDB cluster.</p>
                        </div>
                    </div>
                {/* </MediaQuery> */}

                {/* <MediaQuery minDeviceWidth={481}> */}
                            {/* {/* <div style={{position: "absolute", left: "29vw", width: "42vw", height: "47vh", top: "12vh"}}>
                                <img src="/gif/golf_demo.gif" alt="loading..." style={{marginLeft: "1vw", width: "40vw"}}></img>
                            </div> */}
                {/* </MediaQuery> */}

            </React.Fragment>
        );
    }
}export default GolfProj;