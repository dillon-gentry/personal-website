import logo from './logo.svg';
import './App.css';
// import NavBar from './components/navbar';
import Splash from './components/splash';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';
import Resume from './components/resume';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

class App extends Component{
  render(){ 
    return(
    <React.Fragment>
      <Switch>
        <Route path="/projects" component={Projects}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/resume" component={Resume}/>
        <Route path="/about" component={About}/>
        <Route path="/" component={Splash}/>
      </Switch>
    </React.Fragment>
    );
    }
}

export default App;
