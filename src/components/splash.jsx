import React, { Component } from 'react';
// import headshot from './img/splash_headshot.jpg';
// import background from './img/splash_bg.jpg';
//Note: wallpaper came from https://wallpaperaccess.com/mountain-forest
import Footer from './footer';

class Splash extends Component {
    state = {  }

    divStyle = {
        height: "100vh",
        marginTop: "0vh",
        marginBottom: "0vh",
        backgroundImage: "url('/img/splash_bg.png')",
        backgroundSize: "cover"
    }

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

    bttnParentStyle = {
        display: "flex",
        justifyContent: "center",
        paddingTop: "2rem"
    }

    bttnStyle = {
        fontSize: '30px',
        fontWeight: "bold",
        textAlign: "center",
    }

    render() { 
        return (
          <React.Fragment>
          <div
            style={this.divStyle}
            className="jumbotron jumbotron-fluid vertical-center"
          >
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
            {/* <div style={this.bttnParentStyle}>
                <a href="/about">
                    <button style={this.bttnStyle}>Learn More</button>
                </a>
            </div> */}
          </div>
          <Footer/>
          </React.Fragment>
        );
    }
}
 
export default Splash;