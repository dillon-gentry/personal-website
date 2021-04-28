import React, { Component } from 'react';
import NavBar from './navbar';

class GolfProj extends Component{

    titleStyle = {
        fontSize: "5rem",
        textAlign: "center"
    }

    pageDivStyle = {
        marginLeft: "0vw",
        width: "80vw",
        textAlign: "center"
    }

    footerStyle= {
        zIndex: "0",
        position: "absolute",
        left: "18vw",
        bottom: "0vh",
        height:"10vh",
        width:"82vw",
        background:"#999"
    }

    togglePopup = () => {
        var popup = document.getElementById("myPopup");
        popup.classList.toggle("show");
    }


    render(){
        return(
            <React.Fragment>
                <div className="row" style= {{width: "100vw"}}>
                    
                    {/* Navbar element first */}
                    <NavBar/>

                    {/* Page content */}
                    <div style= {this.pageDivStyle } className="col" id="page">
                        <h1 style= { this.titleStyle }>Golf Guru IDB</h1>
                        <div id="content" style={this.contentDivStyle}>
                            <div className="row" style = {{ marginLeft: "18vw", marginTop: "3vh"}}>
                                <img src="/gif/golf_demo.gif" alt="loading..." style={{width: "40vw"}} />
                            </div>
                            <div className="row" style = {{ marginLeft: "18vw", marginTop: "3vh", width: "40vw"}}>
                                <div className="card-deck">
                                <div className="card" style={{height: "22vh"}}>
                                        <div className="card-body">
                                            <h4 className="card-title">Link</h4>
                                            <p className="card-text">Click below for the finalized version of the website.</p>
                                            <a href="http://golf-idb.uc.r.appspot.com" class="btn btn-primary">Go</a>
                                        </div>
                                </div>
                                <div className="card" style={{height: "22vh"}}>
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
                                <div className="card" style={{height: "22vh"}}>
                                        <div className="card-body">
                                            <h4 className="card-title">Tools</h4>
                                            <p className="card-text">Flask, Bootstrap 4, JavaScript, HTML/CSS, MongoDB, Google Cloud Platform</p>
                                            <p className="card-text"></p>
                                        </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer starts here */}
                    <footer style={this.footerStyle} id="foot">
                        <div className="row" style={{ marginLeft: "10vw", marginTop: "2vh", marginRight: "6vw" }}>
                            <div className="col-3" style={{marginRight: "2vw", paddingTop: "1vh"}}>
                                <h4>Last updated: 4/18/2021</h4>
                            </div>
                            <div className="col-5" style={{marginRight: "2vw", paddingTop: "1.5vh"}}>
                                <h6>Made with React.js, HTML, CSS, Bootstrap 4, and FontAwesome.</h6>
                            </div>
                            <div className="col-2">
                                <div className="row">
                                    <div style={{paddingRight: "2vw"}}>
                                        <a href="mailto: djg81999@gmail.com" style={{ textDecoration: "none", color: "blue", display: "block", padding: "1px"}}>
                                            <i class="fas fa-envelope-square" style={{fontSize: "3rem", marginBottom: "1vh" }}></i>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://www.linkedin.com/in/dillon-gentry-768b411a0/" style={{ textDecoration: "none", color: "blue", display: "block", padding: "1px"}}>
                                            <i class="fab fa-linkedin" style={{fontSize: "3rem", marginBottom: "1vh"}}></i>
                                        </a>
                                    </div>  
                                </div>
                            </div>
                        </div>
                    </footer>

                </div>
            </React.Fragment>
        );
    }
}export default GolfProj;