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

            {/* Touchscreen navbar (mobile and tablets) */}
            <MediaQuery maxDeviceWidth={1024}>
            <div className="nav-bg">
              <div style={this.navMobContStyle}>
                <div className={"nav-mobile-flex-" + navType}>
                  <div class="flex-item-mobile">
                    <a onClick={ () => this.toggleNavMobile() }>
                      <i class="fas fa-bars nav-mobile-icon"></i>
                    </a>
                  </div>
                  <div class="flex-item-mobile">
                  <a href="/" className={"nav-mobile-link-a-" + navbarStatus}>
                    <i className="fas fa-home nav-mobile-icon"></i>
                  </a>
                  </div>
                  <div class="flex-item-mobile">
                  <a href="/projects" className={"nav-mobile-link-a-" + navbarStatus}>
                    <i class="fas fa-laptop-code nav-mobile-icon"></i>
                  </a>
                  </div>
                  <div class="flex-item-mobile">
                  <a href="/resume" className={"nav-mobile-link-a-" + navbarStatus}>
                    <i class="fas fa-file-alt nav-mobile-icon"></i>
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
            </MediaQuery>
            <MediaQuery minDeviceWidth={1025}>
            <div className="nav-bg">
              <div style={this.navMobContStyle}>
                <div className={"nav-flex-" + navType}>
                  <div className="flex-item-toggle">
                    <a onClick={ () => this.toggleNavMobile() }>
                      <i class="fas fa-bars nav-icon"></i>
                    </a>
                  </div>
                  <div className={"flex-item-" + navType}>
                    <a href="/" className={"nav-mobile-link-a-" + navbarStatus}>
                      <div className="flexxy">
                        <div className={"icon-div-" + navType}>
                          <i className="fas fa-home nav-icon"></i>
                        </div>
                        <div className={"tex-div-" + navType}>
                          <p className={"nav-link tex-" + navbarStatus}>Home</p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className={"flex-item-" + navType}>
                    <a href="/projects" className={"nav-mobile-link-a-" + navbarStatus}>
                      <div className="flexxy">
                        <div className={"icon-div-" + navType}>
                        <i class="fas fa-laptop-code nav-icon"></i>
                        </div>
                        <div className={"tex-div-" + navType}>
                          <p className={"nav-link tex-" + navbarStatus}>Projects</p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className={"flex-item-" + navType}>
                    <a href="/resume" className={"nav-mobile-link-a-" + navbarStatus}>
                      <div className="flexxy">
                        <div className={"icon-div-" + navType}>
                        <i class="fas fa-file-alt nav-icon"></i>
                        </div>
                        <div className={"tex-div-" + navType}>
                          <p className={"nav-link tex-" + navbarStatus}>Resume</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            </MediaQuery>

          </React.Fragment>
        );
    }
}
 
export default NavBar;