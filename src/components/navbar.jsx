import React, { Component } from 'react';
import MediaQuery from 'react-responsive';

class NavBar extends Component {
    state = {
      chevron: "right",
      navbar: "close",
      navType: "row",
      navStyle: this.navMobileCloseStyle
    };

    toggleNav = () => {
      const dir = this.state.chevron;
      let chevron = '';
      let navbar = '';
      if(dir === 'left'){
        chevron = 'right';
        navbar = 'close';
      }else{
        chevron = 'left';
        navbar = 'open';
      }
      this.setState({navbar});
      this.setState({chevron});
    };

    toggleNavMobile = () => {
      const status = this.state.navbar;
      const type = this.state.navType;
      let navContCSS = {...this.navMobContStyle};
      let navbar = '';
      let navType = '';
      if(status === 'close'){
        navbar = 'open';
        navType = 'col';
        navContCSS.display = "flex";
        navContCSS.flexDirection = "row";
      }else{
        navbar = 'close';
        navType = 'row'
        navContCSS.display = "block";
      }
      this.navMobContStyle = navContCSS;
      this.setState({navbar});
      this.setState({navType});
    }

    navMobContStyle={
      width: "100%"
    }

    render() {
      const chevronClass = "fas fa-chevron-"+this.state.chevron;
      const navbarStatus = this.state.navbar;
      const navType = this.state.navType;
        return (
          <React.Fragment>
            {/* <MediaQuery maxDeviceWidth={480}> */}
            <div className="nav-bg">
              <div style={this.navMobContStyle}>
                <div className={"nav-mobile-flex-" + navType}>
                  <div class="flex-test">
                    <a onClick={ () => this.toggleNavMobile() }>
                      <i class="fas fa-bars nav-icon"></i>
                    </a>
                  </div>
                  <div class="flex-test">
                  <a href="/" className={"nav-mobile-link-a-" + navbarStatus}>
                    <i className="fas fa-home nav-icon"></i>
                  </a>
                  </div>
                  <div class="flex-test">
                  <a href="/projects" className={"nav-mobile-link-a-" + navbarStatus}>
                    <i class="fas fa-laptop-code nav-icon"></i>
                  </a>
                  </div>
                  <div class="flex-test">
                  <a href="/resume" className={"nav-mobile-link-a-" + navbarStatus}>
                    <i class="fas fa-file-alt nav-icon"></i>
                  </a>
                  </div>
                </div>
                <div className={"nav-mobile-links-div " + navbarStatus}>
                  <div class="flex-nav-mobile-link">
                    <p className="nav-mobile-link-hide">Toggle</p>
                  </div>
                  <div class="flex-nav-mobile-link">
                    <a href="/">
                      <p className="nav-mobile-link">Home</p>
                    </a>
                  </div>
                  <div class="flex-nav-mobile-link">
                    <a href="/projects">
                      <p className="nav-mobile-link">Projects</p>
                    </a>
                  </div>
                  <div class="flex-nav-mobile-link">
                    <a href="/resume">
                      <p className="nav-mobile-link">Resume</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="nav-mobile-open"> */}
            {/* <div className="flex-col">
              <a onClick={ () => this.toggleNavMobile() }>
                <i class="fas fa-bars nav-icon"></i>
              </a>
              <a href="/">
                <i className="fas fa-home nav-icon-open"></i>
              </a>
              <a href="/projects">
                <i class="fas fa-laptop-code nav-icon-open"></i>
              </a>
              <a className={"link-"+navbarStatus} href="/resume">
                <i class="fas fa-file-alt nav-icon-open"></i>
              </a>
            </div> */}
            {/* <div className="flex-row">
              
            </div>
            <div className="flex-row">
              
          </div> */}
            {/* </div> */}
            {/* <div className={"flex-col nav-mobile-" + navbarStatus}>
              <a onClick={ () => this.toggleNavMobile() }>
                <i class="fas fa-bars nav-icon"></i>
              </a>
              <div className="flex-row">
                <a className="nav-content" href="/">
                <i className="fas fa-home fa"></i> Home</a>
              </div>
              <div className="flex-row">
                <a className="nav-content" href="/projects">
                <i class="fas fa-laptop-code"></i> Projects</a>
              </div>
              <div className="flex-row">
                <a className="nav-content" href="/resume">
                <i class="fas fa-file-alt"></i> Resume</a>
              </div>
            </div> 
            <div className={"nav-mobile-blur-" + navbarStatus}>
            </div> */}


            {/* </MediaQuery>

            <MediaQuery minDeviceWidth={481}> */}


              {/* <div>
                <div id="navBar" className={"nav-"+navbarStatus}>
                  <div style={{marginTop: "40vh"}}>
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
              </div>
          
              <div className={"toggle-div-" + navbarStatus}>
                <a onClick={ () => this.toggleNav() }>
                  <i className={ chevronClass + " toggle-" + this.state.chevron} ></i>
                </a>
              </div> */}
            {/* </MediaQuery> */}
          </React.Fragment>
        );
    }
}
 
export default NavBar;