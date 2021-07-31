import React, { Component } from 'react';
import MediaQuery from 'react-responsive';

class NavBar extends Component {
    state = {
      navbar: "close",
      navType: "row",
      navStyle: this.navMobileCloseStyle
    };

    toggleNav = () => {
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
        navType = 'row';
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
      const navbarStatus = this.state.navbar;
      const navType = this.state.navType;
        return (
          <React.Fragment>

            <div className="nav-bg">
              <div style={this.navMobContStyle}>
                {/* Touchscreen navbar (mobile and tablets) */}
                <MediaQuery maxDeviceWidth={1024}>
                    <div className={"nav-mobile-flex-" + navType}>
                      <div class="nav-mobile-flex-item">
                        <a onClick={ () => this.toggleNav() }>
                          <i class="fas fa-bars nav-mobile-icon"></i>
                        </a>
                      </div>
                      <div class="nav-mobile-flex-item">
                      <a href="/" className={"nav-mobile-link-a-" + navbarStatus}>
                        <i className="fas fa-home nav-mobile-icon"></i>
                      </a>
                      </div>
                      <div class="nav-mobile-flex-item">
                      <a href="/projects" className={"nav-mobile-link-a-" + navbarStatus}>
                        <i class="fas fa-laptop-code nav-mobile-icon"></i>
                      </a>
                      </div>
                      <div class="nav-mobile-flex-item">
                      <a href="/resume" className={"nav-mobile-link-a-" + navbarStatus}>
                        <i class="fas fa-file-alt nav-mobile-icon"></i>
                      </a>
                      </div>
                    </div>
                    <div className={"nav-mobile-links-div nav-mobile-" + navbarStatus}>
                      <div className="nav-mobile-flex-item-text">
                        <p className="nav-mobile-item-text-hide">Toggle</p>
                      </div>
                      <div className="nav-mobile-flex-item-text">
                        <a href="/">
                          <p className="nav-mobile-item-text">Home</p>
                        </a>
                      </div>
                      <div className="nav-mobile-flex-item-text">
                        <a href="/projects">
                          <p className="nav-mobile-item-text">Projects</p>
                        </a>
                      </div>
                      <div className="nav-mobile-flex-item-text">
                        <a href="/resume">
                          <p className="nav-mobile-item-text">Resume</p>
                        </a>
                      </div>
                    </div>
                </MediaQuery>

                {/* No touchscreen, has hover effects (desktops and laptops) */}
                <MediaQuery minDeviceWidth={1025}>
                    <div className={"nav-flex-" + navType}>
                      <div className="nav-flex-item-toggle">
                        <a className="nav-toggle-link" onClick={ () => this.toggleNav() }>
                          <i class="fas fa-bars nav-icon"></i>
                        </a>
                      </div>
                      <div className={"nav-flex-item-" + navType}>
                        <a href="/" className={"nav-mobile-link-a-" + navbarStatus}>
                          <div className="nav-flex-item">
                            <div className={"nav-icon-div-" + navType}>
                              <i className="fas fa-home nav-icon"></i>
                            </div>
                            <div className={"nav-text-div-" + navType}>
                              <p className={"nav-link text-" + navbarStatus}>Home</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className={"nav-flex-item-" + navType}>
                        <a href="/projects" className={"nav-mobile-link-a-" + navbarStatus}>
                          <div className="nav-flex-item">
                            <div className={"nav-icon-div-" + navType}>
                            <i class="fas fa-laptop-code nav-icon"></i>
                            </div>
                            <div className={"nav-text-div-" + navType}>
                              <p className={"nav-link text-" + navbarStatus}>Projects</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className={"nav-flex-item-" + navType}>
                        <a href="/resume" className={"nav-mobile-link-a-" + navbarStatus}>
                          <div className="nav-flex-item">
                            <div className={"nav-icon-div-" + navType}>
                            <i class="fas fa-file-alt nav-icon"></i>
                            </div>
                            <div className={"nav-text-div-" + navType}>
                              <p className={"nav-link text-" + navbarStatus}>Resume</p>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                </MediaQuery>
              </div>
            </div>

          </React.Fragment>
        );
    }
}
 
export default NavBar;