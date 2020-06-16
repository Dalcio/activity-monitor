import React, { Component } from "react";
import Left from "./Block";
import Fan from "./Fan";
import Right from "./Boxs";
import Block from "./Block";
import Boxs from "./Boxs";
import Chart from "./Chart";

class Cooling extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 ">
            <h1>Cooling</h1>
            <hr />
          </div>
          <div className="col-12 ">
            <h4>Fans</h4>
          </div>
          <div className="col-12 ">
            <Fan
              name="Left Side Fan"
              speed="4429"
              maxSpeed="5616"
              minSpeed="1836"
            />
            <Fan
              name="Right Side Fan"
              speed="4085"
              maxSpeed="5200"
              minSpeed="1700"
            />
            <hr />
          </div>
          <div className="col-12 ">
            <h4>Thermal Sensors</h4>
          </div>
          <div className="col-12 ">
            <Block />
            <Boxs name="Storage" value={31}>
              <Chart name="SSD Out-f-band A" value={31} color="#2C4D8E" />
              <Chart name="SSD Out-f-band B" value={31} color="#2C4D8E" />
            </Boxs>
            <Boxs name="Memory" value={46}>
              <Chart name="Memory Proximity" value={46} color="#2C4D8E" one />
            </Boxs>
            <Boxs name="Palm Rest" value={34}>
              <Chart name="Palm Rest #1" value={36} color="#2C4D8E" />
              <Chart name="Palm Rest #2" value={32} color="#2C4D8E" />
            </Boxs>
          </div>
        </div>
      </div>
    );
  }
}
export default Cooling;
