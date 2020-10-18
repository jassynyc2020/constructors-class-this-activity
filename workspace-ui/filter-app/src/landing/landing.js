import React, { Component } from "react";
import "./landing.css";
import logo from '../images/logo.jpeg';

class Landing extends Component {
  render() {
    return (
      <div className="parent">
        <div className="icon">
          <img src={logo}></img>
        </div>
      </div>
    );
  }
}

export default Landing;
