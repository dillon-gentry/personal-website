import React, { Component } from 'react';
import NavBar from './navbar';

class Contact extends Component {
    state = {  }

    titleStyle = {
        // position: "fixed",
        fontSize: "5rem",
        textAlign: "center"
    }

    render() {
        //add send email functionality to djg81999@gmail.com
        //add linkedin account
        //add handshake profile
         
        return (
            <React.Fragment>
                <div className="row" style= {{width: "100vw"}}>
                    <div className="col" style={{width: "21vw"}}>
                        <NavBar/>
                    </div>
                    <div style= {this.aboutDivStyle } className="col">
                        <div className="row">
                            <h1 style= { this.titleStyle }>Contact</h1>
                        </div>
                        
                        <div className="row">
                            <span style={{fontSize: "12rem"}}>
                                <span style={{color: "blue"}}>
                                    <a href="mailto: djg81999@gmail.com">
                                    <i class="fas fa-envelope-square"></i>
                                    </a>
                                </span>
                            </span>
                        </div>

                        <div className="row">    
                            <span style={{fontSize: "12rem"}}>
                                <span style={{color: "blue"}}>
                                    <a href="https://www.linkedin.com/in/dillon-gentry-768b411a0/">
                                    <i class="fab fa-linkedin"></i>
                                    </a>
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            </React.Fragment>
          );
    }
}
 
export default Contact;