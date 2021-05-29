import React, { Component } from 'react';
// import headshot from './img/splash_headshot.jpg';
// import background from './img/splash_bg.jpg';
//Note: wallpaper came from https://wallpaperaccess.com/mountain-forest

class Splash extends Component {

    imgStyle = {
        marginTop: "10vh",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto"
    }

    textStyle= {
        fontSize: '50px',
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
        paddingTop: "2rem",
        textShadow: "0 0 3px black"
    }

    render() { 
        return (
          <React.Fragment>
            <img
              className="rounded-circle"
              style={this.imgStyle}
              src="/img/splash_headshot.jpg"
              alt="headshot"
            ></img>
            <h1 style={this.textStyle}>Hi, my name is Dillon Gentry.</h1>
            <h2 style={this.textStyle}>
              I study software engineering and design.
            </h2>
          </React.Fragment>
        );
    }
}
 
export default Splash;