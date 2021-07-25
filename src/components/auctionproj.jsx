import React, { Component } from 'react';
import MediaQuery from 'react-responsive';

class AuctionProj extends Component{

    togglePopup = () => {
        var popup = document.getElementById("popup");
        popup.classList.toggle("show");
    }


    render(){
        return(
            <React.Fragment>

                <h1 className="proj-title">Auction House</h1>

                {/* <MediaQuery maxDeviceWidth={480}> */}
                    <div className="flex-all-proj-col">
                        <div className="flex-proj-col">
                            <h4>Tools</h4>
                            <p>Java, JavaFx, Observable interface</p>
                        </div>
                        <div className="flex-proj-col">
                            <h4>Concepts</h4>
                            <p>Socket Programming, Multithreading, Client/Server Architecture, Observer Pattern</p>
                        </div>
                        <div className="flex-proj-col">
                            <h4>Info</h4>
                            <p>Server and client that allow specified users to compete for listed items.</p>
                            <div class="popup" onClick={ () => this.togglePopup() }>
                                <a>More Info</a>
                                    <span class="popuptext" id="popup">A final project for Software Design II with a separate server and client that connect to one other via sockets.
                                    The server ensures proper synchronization for live auction bids and keeping track of results.</span>
                                </div>
                        </div>
                    </div>
                {/* </MediaQuery> */}

                {/* <MediaQuery minDeviceWidth={481}>
                <div style={{position: "absolute", left: "29vw", width: "42vw", height: "47vh", top: "12vh"}}>
                    <img src="/gif/auction_demo.gif" alt="loading..." style={{marginLeft: "1vw", width: "40vw"}}></img>
                </div>
                <div className="row" style = {{ position: "absolute", left: "29.5vw", top: "60vh", width: "42vw", margin: "0"}}>
                    <div className="card-deck">
                    <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Concepts</h4>
                                <p className="card-text">Socket Programming, Multithreading, Client/Server Architecture, Observer Pattern</p>
                            </div>
                    </div>
                    <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Information</h4>
                                <p className="card-text">Server and client that allow specified users to compete for listed items.</p>
                                <div class="popup" onClick={ () => this.togglePopup() }>
                                <a className="btn btn-primary">More Info</a>
                                    <span class="popuptext" id="popup">A final project for Software Design II with a separate server and client that connect to one other via sockets.
                                    The server ensures proper synchronization for live auction bids and keeping track of results.</span>
                                </div>
                            </div>
                    </div>
                    <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Tools</h4>
                                <p className="card-text">Java, JavaFx, Observable interface</p>
                                <p className="card-text"></p>
                            </div>
                    </div>
                    </div>
                </div>
                </MediaQuery> */}
                
            </React.Fragment>
        );
    }
}export default AuctionProj;