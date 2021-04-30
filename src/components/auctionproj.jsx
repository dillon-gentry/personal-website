import React, { Component } from 'react';

class AuctionProj extends Component{

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

    togglePopup = () => {
        var popup = document.getElementById("popup");
        popup.classList.toggle("show");
    }


    render(){
        return(
            <React.Fragment>
                <div style={this.bgStyle}>
                    <div className="row" style= {{width: "100vw"}}>

                        {/* Page content */}
                        <div style= {this.pageDivStyle } id="page">
                            <h1 style= { this.titleStyle }>Auction House</h1>
                            <div id="content" style={this.contentDivStyle}>
                                <div className="row" style = {{ marginLeft: "18vw", marginTop: "3vh"}}>
                                <div class="card" style={{width: "40vw"}}>
                                    <div class="card-body">
                                        <h4 class="card-title">Demo</h4>
                                    </div>
                                    <img class="card-img-bottom"src="/gif/auction_demo.gif" alt="loading..." style={{marginLeft: "1vw", width: "38vw"}}></img>
                                </div>
                                </div>
                                <div className="row" style = {{ marginLeft: "18vw", marginTop: "3vh", width: "40vw"}}>
                                    <div className="card-deck">
                                    <div className="card" style={{width: "25vw"}}>
                                            <div className="card-body">
                                                <h4 className="card-title">Concepts</h4>
                                                <p className="card-text">Socket Programming, Client/Server Architecture, Observer Pattern</p>
                                            </div>
                                    </div>
                                    <div className="card" style={{width: "25vw"}}>
                                            <div className="card-body">
                                                <h4 className="card-title">Information</h4>
                                                <p className="card-text">ReactJS UI that communicates with a Flask API to perform and display forecasts.</p>
                                                <div class="popup" onClick={ () => this.togglePopup() }>
                                                <a className="btn btn-primary">More Info</a>
                                                    <span class="popuptext" id="popup">The project involves a ReactJS user interface that allows the user to 
                                                        perform time series forecasting through a backend Flask API while displaying the results to the user
                                                        using ChartJS. GET and POST requests are made to the API using Axios within the React App.
                                                         The API uses MongoDB to store any dataset or forecast data.</span>
                                                </div>
                                            </div>
                                    </div>
                                    <div className="card" style={{width: "25vw"}}>
                                            <div className="card-body">
                                                <h4 className="card-title">Tools</h4>
                                                <p className="card-text">Java, JavaFx, Observable interface, etc</p>
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
}export default AuctionProj;