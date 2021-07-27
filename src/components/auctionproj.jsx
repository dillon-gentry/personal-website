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
                        <div className="flex-proj-mobile">
                            <h4>Tools</h4>
                            <p>Java, JavaFx, Observable interface</p>
                        </div>
                        <div className="flex-proj-mobile">
                            <h4>Concepts</h4>
                            <p>Socket Programming, Multithreading, Client/Server Architecture, Observer Pattern</p>
                        </div>
                        <div className="flex-proj-mobile">
                            <h4>Info</h4>
                            <p>Server and client that allow specified users to compete for listed items.</p>
                            <p>A final project for Software Design II with a separate server and client that connect to one other via sockets.
                                    The server ensures proper synchronization for live auction bids and keeping track of results.</p>
                            {/* <div class="popup" onClick={ () => this.togglePopup() }>
                                <a>More Info</a>
                                    <span class="popuptext" id="popup">A final project for Software Design II with a separate server and client that connect to one other via sockets.
                                    The server ensures proper synchronization for live auction bids and keeping track of results.</span>
                                </div> */}
                        </div>
                    </div>
                {/* </MediaQuery> */}

                
                {/* <div style={{position: "absolute", left: "29vw", width: "42vw", height: "47vh", top: "12vh"}}>
                    <img src="/gif/auction_demo.gif" alt="loading..." style={{marginLeft: "1vw", width: "40vw"}}></img>
                </div> */}
                
            </React.Fragment>
        );
    }
}export default AuctionProj;