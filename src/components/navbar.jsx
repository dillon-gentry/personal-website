import React, { Component } from 'react';
import Footer from './footer';

class NavBar extends Component {
    state = {
      chevron: "left"
    };

    navStyle = {
      height: "100vh",
      width: "18vw",
      position: "fixed",
      backgroundColor: "rgb(34, 139, 34)",
      overflowX: "hidden"
    }

    navContentStyle = {
        marginLeft: "3vw",
        marginBottom: "2vh",
        textDecoration: "none",
        fontSize: "50px",
        color: "white",
        display: "block"
    }

    navLogoStyle = {
        marginTop: "10vh",
        marginLeft: "4vw",
        marginBottom: "8vh"
    }

    closeStyle={
        textDecoration: "none",
        fontSize: "50px",
        color: "white",
        display: "block",
        marginLeft: "3vw", 
        marginTop: "1vw"
    }

    toggleStyle = {
      paddingTop: "45vh",
      textDecoration: "none",
      fontSize: "50px",
      color: "white",
      display: "block",
    }

    toggleDivStyle={
      marginLeft: "18vw",
      height: "100vh",
      width: "3vw",
      backgroundColor: "rgb(24, 37, 223)"
    }

    toggleNav = () => {
      const dir = this.state.chevron;
      let chevron = '';
      let navBarCSS = {...this.navStyle};
      let toggleDivCSS = {...this.toggleDivStyle};
      if(dir == 'left'){
        chevron = 'right';
        navBarCSS.width = "0";
        toggleDivCSS.marginLeft = "0";
      }else{
        chevron = 'left';
        navBarCSS.width = "18vw";
        toggleDivCSS.marginLeft = "18vw";
      }
      this.navStyle = navBarCSS;
      this.toggleDivStyle = toggleDivCSS;
      this.setState({chevron});
    };

    render() {
      const chevronClass = "fas fa-chevron-"+this.state.chevron; 
        return (
          <React.Fragment>
            <div className="row">
              <div className="col">
                <div id="navBar" style= { this.navStyle }>
                  <div className="row" style={ this.navLogoStyle }>
                    <i className="fas fa-exclamation-triangle fa-9x col-7"></i>
                  </div>
                  <a style= { this.navContentStyle } href="/">
                  <i className="fas fa-home fa"></i> Home</a>
                  <a style= { this.navContentStyle } href="/about">
                  <i class="fas fa-user"></i> About</a>
                  <a style= { this.navContentStyle } href="/projects">
                  <i class="fas fa-laptop-code"></i> Projects</a>
                  <a style= { this.navContentStyle } href="/contact">
                  <i class="fas fa-envelope"></i> Contact</a>
                  <a style= { this.navContentStyle } href="/resume">
                  <i class="fas fa-file-alt"></i> Resume</a>
                </div>
              </div>
            </div>
            <div className="col" style={ this.toggleDivStyle }>
              <a onClick={ () => this.toggleNav() }>
                <i className={ chevronClass } style={ this.toggleStyle }></i>
              </a>
            </div>
            {/* <Footer/> */}
          </React.Fragment>
        );
    }
}
 
export default NavBar;