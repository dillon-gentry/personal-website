import React, { Component } from 'react';

class NavBar extends Component {
    state = {
      chevron: "right"
    };

    navStyle = {
      zIndex: "2",
      height: "100vh",
      width: "0vw",
      position: "fixed",
      backgroundColor: "rgb(0, 51, 25)",
      overflowX: "hidden"
    }

    navContentStyle = {
        marginLeft: "3vw",
        marginBottom: "3vh",
        textDecoration: "none",
        fontSize: "3rem",
        color: "white",
        padding: "1px"
    }

    navLogoStyle = {
        marginTop: "10vh",
        marginBottom: "8vh",
        textAlign: "center"
    }

    closeStyle={
        textDecoration: "none",
        fontSize: "3rem",
        color: "white",
        display: "block",
        marginLeft: "3vw", 
        marginTop: "1vw"
    }

    toggleStyle = {
      paddingLeft: "1vw",
      paddingTop: "45vh",
      textDecoration: "none",
      fontSize: "4vw",
      color: "white",
      display: "block",
    }

    toggleDivStyle={
      zIndex: "3",
      position: "fixed",
      marginLeft: "0",
      height: "100vh",
      width: "4vw",
      backgroundColor: "rgb(0, 0, 153)"
    }

    toggleNav = () => {
      const dir = this.state.chevron;
      let chevron = '';
      let navBarCSS = {...this.navStyle};
      let toggleDivCSS = {...this.toggleDivStyle};
      let toggleCSS = {...this.toggleStyle};
      if(dir === 'left'){
        chevron = 'right';
        navBarCSS.width = "0";
        toggleDivCSS.marginLeft = "0vw";
        toggleDivCSS.width = "4vw";
        toggleCSS.paddingLeft = "1vw";
      }else{
        chevron = 'left';
        navBarCSS.width = "18vw";
        toggleDivCSS.marginLeft = "18vw";
        toggleDivCSS.width = "4vw";
        toggleCSS.paddingLeft = "1vw";
      }
      this.toggleStyle = toggleCSS;
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
                  <div style={ this.navLogoStyle }>
                    <i className="fas fa-exclamation-triangle fa-9x col-7"></i>
                  </div>
                  <div style={{marginBottom: "2vh"}}>
                  <a className="nav-content" href="/">
                  <i className="fas fa-home fa"></i> Home</a>
                  </div>
                  <div style={{marginBottom: "2vh"}}>
                  <a className="nav-content" href="/projects">
                  <i class="fas fa-laptop-code"></i> Projects</a>
                  </div>
                  <div style={{marginBottom: "2vh"}}>
                  <a className="nav-content" href="/resume">
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
          </React.Fragment>
        );
    }
}
 
export default NavBar;