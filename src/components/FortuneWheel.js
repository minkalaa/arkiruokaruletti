import React, { Component } from "react";
import "./WheelStyle.css";

class FortuneWheel extends Component {

    render() {
        return(
            <div id="wrapper">
            <div id="wheel">
              <div id="inner-wheel">
                <div className="sec">
                </div>
                <div className="sec">
                </div>
                <div className="sec">
                </div>
                <div className="sec">
                </div>
                <div className="sec">
                </div>
                <div className="sec">
                </div>
              </div>
              
              <div id="spin">
              </div>
              
              <div id="shine"></div>
            </div>
            <div id="txt"></div>
          </div> 
        );

    }
}

export default FortuneWheel;