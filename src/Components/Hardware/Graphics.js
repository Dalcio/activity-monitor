import React, { Component } from "react";
import Element from "./Element";

class Graphics extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 ">
            <h1>Graphics</h1>
            <hr />
          </div>
          <div className="col-12 ">
            <h4>Processing Units</h4>
          </div>
          <div className="col-12 ">
            <Element
              name="Intel UHD Graphics 630"
              src=""
              info="Internal Low power GPU"
            />
            <Element name="AMD Radeon RX 580" src="" info="External GPU" />
            <Element name="AMD Radeon Pro 5500M" src="" info="Internal GPU" />
            <hr />
          </div>
          <div className="col-12 ">
            <h4>Displays</h4>
          </div>
          <div className="col-12 ">
            <Element name="Color LCD" src="" info="Internal 16-incg Display" />
            <Element name="XV273K" src="" info="External 27-inch Display" />
          </div>
        </div>
      </div>
    );
  }
}

export default Graphics;
