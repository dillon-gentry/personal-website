import React, { Component } from 'react';

class Footer extends Component {
    state = {  }

    footerStyle={
        marginLeft: "21vw", //for expanded navbar, marginLeft: "0" for closed navbar
        marginTop: "85vh"
    }
    render() { 
        return (
            <footer>
        <div id="foot" class="jumbotron" style={{marginBottom: "0px", marginTop: "30px"}}>
            <section>
                <div class="row">
                    <div class="col-md-1"></div>
                    <div class="col-md-5 mt-md-0 mt-3">
                        <h3 class="display-4">Dillon Gentry</h3>
                        <p>
                            Proudly produced by Team E7. Last updated: November 30th, 2020
                        </p>
                        <a href="https://github.com/UT-SWLab/TeamE7" class="btn btn-dark fab fa-github" style={{color: "ghostwhite"}} role="button"> GitHub</a>
                        <a href="https://twitter.com/GolfGuru461" class="btn btn-dark fab fa-twitter" style={{color: "ghostwhite"}} role="button"> Twitter</a>
                    </div>
                    {/* <div class="col-md-3 mb-md-0 mb-3">
                        <h5 class="text-uppercase">Menu</h5>
                        <ul class="list-unstyled">
                            <li>
                                <a href="/" onclick="clearStorage()">Home</a>
                            </li>
                            <li>
                                <a href="/players" onclick="clearStorage()">Players</a>
                            </li>
                            <li>
                                <a href="/courses" onclick="clearStorage()">Courses</a>
                            </li>
                            <li>
                                <a href="/tournaments" onclick="clearStorage()">Tournaments</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-md-3 mb-md-0 mb-3">
                        <h5 class="text-uppercase">About</h5>
                        <ul class="list-unstyled">
                            <li>
                                <a href="/about-us" onclick="clearStorage()">About Page</a>
                            </li>
                            <li>
                                <a href="mailto:golfguru461@gmail.com" onclick="clearStorage()">Contact Us</a>
                            </li>
                            <li>
                                <a href="/about-us" onclick="clearStorage()">References</a>
                            </li>
                        </ul>
                    </div> */}
                </div>
        </section>
        </div>
        </footer>
          );
    }
}
 
export default Footer;