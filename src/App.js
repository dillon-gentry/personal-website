import './App.css';
import Splash from './components/splash';
import Projects from './components/projects';
import Resume from './components/resume';
import AuctionProj from './components/auctionproj';
import NokiaProj from './components/nokiaproj';
import GolfProj from './components/golfproj';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import MediaQuery from 'react-responsive';
import Div100vh from 'react-div-100vh';

class App extends Component{

  bgStyle = {
    backgroundImage: "url('/img/splash_bg.png')",
    backgroundSize: "cover",
    overflow: "scroll",
    width: "100vw",
    height: "100vh"
  }

  render(){ 
    return(
    <React.Fragment>
        <div className="page" style={this.bgStyle}>
          <Navbar/>
          <div className="content">
            <Switch>
              <Route path="/projects/auction-house" component={AuctionProj}/>
              <Route path="/projects/nokia-tsf" component={NokiaProj}/>
              <Route path="/projects/golf-guru" component={GolfProj}/>
              <Route path="/projects" component={Projects}/>
              <Route path="/resume" component={Resume}/>
              <Route path="/" component={Splash}/>
            </Switch>
          </div>
          <Footer/>
        </div>
    </React.Fragment>
    );
    }
}

export default App;
