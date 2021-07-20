import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
// import headshot from './img/splash_headshot.jpg';
// import background from './img/splash_bg.jpg';
//Note: wallpaper came from https://wallpaperaccess.com/mountain-forest

class Splash extends Component {

    render() { 
        return (
          <React.Fragment>
            <img
              className="rounded-circle splash-img"
              src="/img/splash_headshot.jpg"
              alt="headshot"
            ></img>

            <h1 className="splash-text">Hi, my name is Dillon Gentry.</h1>
            <MediaQuery minDeviceWidth={200} and maxDeviceWidth={600}>
              <div className="row" style={{width: "80vw", marginLeft: "10vw", textAlign: "center"}}>
                <h2 className="splash-text"> I am an aspiring software engineer.</h2>
              </div>
            </MediaQuery>
            <MediaQuery minDeviceWidth={601}>
            <h2 className="splash-text"> I am an aspiring software engineer.</h2>
            </MediaQuery>
          </React.Fragment>
        );
    }
}
 
export default Splash;