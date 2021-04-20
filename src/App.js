import './App.css';
import Splash from './components/splash';
import About from './components/about';
import Projects from './components/projects';
import Resume from './components/resume';
import AuctionProj from './components/auctionproj';
import NokiaProj from './components/nokiaproj';
import GolfProj from './components/golfproj';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

class App extends Component{
  render(){ 
    return(
    <React.Fragment>
      <Switch>
        <Route path="/projects/auction-house" component={AuctionProj}/>
        <Route path="/projects/nokia-tsf" component={NokiaProj}/>
        <Route path="/projects/golf-guru" component={GolfProj}/>
        <Route path="/projects" component={Projects}/>
        <Route path="/resume" component={Resume}/>
        <Route path="/about" component={About}/>
        <Route path="/" component={Splash}/>
      </Switch>
    </React.Fragment>
    );
    }
}

export default App;
