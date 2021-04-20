import React, { Component } from 'react';
//import Footer from './footer';

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
        marginBottom: "3vh",
        textDecoration: "none",
        fontSize: "50px",
        color: "white",
        padding: "1px"
    }

    navLogoStyle = {
        marginTop: "10vh",
        marginLeft: "5vw",
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
      zIndex: "1",
      position: "fixed",
      marginLeft: "18vw",
      height: "100vh",
      width: "2vw",
      backgroundColor: "rgb(24, 37, 223)"
    }

    toggleNav = () => {
      const dir = this.state.chevron;
      let chevron = '';
      let navBarCSS = {...this.navStyle};
      let toggleDivCSS = {...this.toggleDivStyle};
      if(dir === 'left'){
        chevron = 'right';
        navBarCSS.width = "0";
        toggleDivCSS.marginLeft = "1.5vw";
        document.getElementById('foot').style.left = "0vw";
        document.getElementById('foot').style.width = "100vw";
        document.getElementById('page').style.marginLeft = "-20vw";
        document.getElementById('page').style.width = "100vw";
        //document.getElementById('content').style.marginLeft = "13vw"; //works for about page
        document.getElementById('content').style.marginLeft = "20vw"; //works for resume page
      }else{
        chevron = 'left';
        navBarCSS.width = "18vw";
        toggleDivCSS.marginLeft = "18vw";
        document.getElementById('foot').style.left = "18vw";
        document.getElementById('foot').style.width = "82vw";
        document.getElementById('page').style.marginLeft = "0vw";
        document.getElementById('page').style.width = "80vw";
        //document.getElementById('content').style.marginLeft = "3vw"; //works for about page
        document.getElementById('content').style.marginLeft = "10vw"; //works for resume page
      }
      this.navStyle = navBarCSS;
      this.toggleDivStyle = toggleDivCSS;
      this.setState({chevron});
    };

    render() {
      const chevronClass = "fas fa-chevron-"+this.state.chevron; 
        return (
          <React.Fragment>
            <div className="row" style={{width: "24vw"}}>
              <div>
                <div id="navBar" style= { this.navStyle }>
                  <div className="row" style={ this.navLogoStyle }>
                    <i className="fas fa-exclamation-triangle fa-9x col-7"></i>
                  </div>
                  <div style={{marginBottom: "2vh"}}>
                  <a style= { this.navContentStyle } href="/">
                  <i className="fas fa-home fa"></i> Home</a>
                  </div>
                  <div style={{marginBottom: "2vh"}}>
                  <a style= { this.navContentStyle } href="/about">
                  <i class="fas fa-user"></i> About</a>
                  </div>
                  <div style={{marginBottom: "2vh"}}>
                  <a style= { this.navContentStyle } href="/projects">
                  <i class="fas fa-laptop-code"></i> Projects</a>
                  </div>
                  {/* <div style={{marginBottom: "2vh"}}>
                  <a style= { this.navContentStyle } href="/contact">
                  <i class="fas fa-envelope"></i> Contact</a>
                  </div> */}
                  <div style={{marginBottom: "2vh"}}>
                  <a style= { this.navContentStyle } href="/resume">
                  <i class="fas fa-file-alt"></i> Resume</a>
                  </div>
                </div>
              </div>
          
              <div style={ this.toggleDivStyle }>
                <a onClick={ () => this.toggleNav() }>
                  <i className={ chevronClass } style={ this.toggleStyle }></i>
                </a>
              </div>
            </div>
            {/* <Footer/> */}
          </React.Fragment>
        );
    }
}
 
export default NavBar;