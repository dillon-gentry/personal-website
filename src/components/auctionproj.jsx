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
                            <h4>Demo</h4>
                            <img className="proj-gif" src="/gif/auction_demo.gif" alt="loading..."></img>
                        </div>
                        <div className="flex-proj-mobile">
                            <h4>Tools</h4>
                            <p>Java, JavaFx</p>
                        </div>
                        <div className="flex-proj-mobile">
                            <h4>Concepts</h4>
                            <p>Socket Programming, Multithreading, Client/Server Architecture</p>
                        </div>
                        <div className="flex-proj-mobile">
                            <h4>Info</h4>
                            <p>A final project for Software Design II with a server resembling an auction house and a JavaFx client GUI resembling specified users to compete for listed items.</p>
                            <p>The server and client are completely separate and connect to one other via sockets.
                                    The server ensures proper synchronization for live auction bids and keeping track of results.</p>
                        </div>
                    </div>
                {/* </MediaQuery> */}
                
            </React.Fragment>
        );
    }
}export default AuctionProj;