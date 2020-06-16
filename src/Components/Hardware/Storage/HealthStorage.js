import React, { Component } from "react";
import { Link } from "react-router-dom";
import Health from "../Health";
import styled from "styled-components";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { TiThermometer, TiHeartFullOutline } from "react-icons/ti";
import {
  BsFillLightningFill,
  BsCheckCircle,
  BsXCircle,
  BsHeartFill,
} from "react-icons/bs";
import { Back } from "./Back";

class HealthStorage extends Component {
  render() {
    return (
      <div>
        <Link to="/storage">
          <Back>
            <MdKeyboardArrowLeft />
          </Back>
        </Link>
        <div className="container">
          <div className="row">
            <div className="col-12 ">
              <h4>{"APple ssd ap1024n".toUpperCase()}</h4>
            </div>
            <div className="col-12 ">
              <Health
                status={100}
                unit={"%"}
                ico={<TiHeartFullOutline />}
                color={"#DD5E97"}
                info={"This drive is in good condition."}
              />
              <Health
                status={31}
                unit={"°C"}
                ico={<TiThermometer />}
                color={"#3C8DFB"}
                info={"The temperature is within normal working conditions."}
              />
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-12 mb-2">
              <h5>S.M.A.R.T Values</h5>
            </div>
            <div className="col-12">
              <Options>
                <span id="th">
                  <BsFillLightningFill />
                </span>
                <div id="ditail">
                  <h6>Critical Warning</h6>
                  <p>Pre-fail indicator</p>
                </div>
                <div id="r">
                  <p>0</p>
                  <span>
                    <BsXCircle />
                  </span>
                </div>
              </Options>
              <Options sucess>
                <span id="th">
                  <BsFillLightningFill />
                </span>
                <div id="ditail">
                  <h6>Temperature</h6>
                  <p>Pre-fail indicator</p>
                </div>
                <div id="r">
                  <p>30,85°C</p>
                  <span>
                    <BsCheckCircle />
                  </span>
                </div>
              </Options>
              <Options sucess>
                <span id="th">
                  <BsFillLightningFill />
                </span>
                <div id="ditail">
                  <h6>Available Space</h6>
                  <p>Pre-fail indicator</p>
                </div>
                <div id="r">
                  <p>100%</p>
                  <span>
                    <BsCheckCircle />
                  </span>
                </div>
              </Options>
              <Options sucess>
                <span id="th">
                  <BsFillLightningFill />
                </span>
                <div id="ditail">
                  <h6>Percentage Used</h6>
                  <p>Pre-fail indicator</p>
                </div>
                <div id="r">
                  <p>0%</p>
                  <span>
                    <BsCheckCircle />
                  </span>
                </div>
              </Options>
              <Options sucess>
                <span id="th">
                  <BsHeartFill />
                </span>
                <div id="ditail">
                  <h6>Data Inits Read</h6>
                  <p>Old age indicator</p>
                </div>
                <div id="r">
                  <p>3,31 TB</p>
                  <span>
                    <BsCheckCircle />
                  </span>
                </div>
              </Options>
              <Options sucess>
                <span id="th">
                  <BsHeartFill />
                </span>
                <div id="ditail">
                  <h6>Data Units Written</h6>
                  <p>Old age indicator</p>
                </div>
                <div id="r">
                  <p>3,94 TB</p>
                  <span>
                    <BsCheckCircle />
                  </span>
                </div>
              </Options>
              <Options sucess>
                <span id="th">
                  <BsHeartFill />
                </span>
                <div id="ditail">
                  <h6>Host Read Commands</h6>
                  <p>Old age indicator</p>
                </div>
                <div id="r">
                  <p>68 093 461</p>
                  <span>
                    <BsCheckCircle />
                  </span>
                </div>
              </Options>
              <Options sucess>
                <span id="th">
                  <BsHeartFill />
                </span>
                <div id="ditail">
                  <h6>Host Write Commands</h6>
                  <p>Old age indicator</p>
                </div>
                <div id="r">
                  <p>52 977 016</p>
                  <span>
                    <BsCheckCircle />
                  </span>
                </div>
              </Options>
              <Options sucess>
                <span id="th">
                  <BsHeartFill />
                </span>
                <div id="ditail">
                  <h6>Controller Busy Time</h6>
                  <p>Old age indicator</p>
                </div>
                <div id="r">
                  <p>0</p>
                  <span>
                    <BsCheckCircle />
                  </span>
                </div>
              </Options>
              <Options sucess>
                <span id="th">
                  <BsHeartFill />
                </span>
                <div id="ditail">
                  <h6>Power Circles</h6>
                  <p>Old age indicator</p>
                </div>
                <div id="r">
                  <p>52</p>
                  <span>
                    <BsCheckCircle />
                  </span>
                </div>
              </Options>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const Options = styled.div`
  width: 100%;
  padding: 10px;
  height: 60px;
  p,
  h6 {
    margin: 0;
  }
  &:first-child {
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }
  &:last-child {
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
  }
  #th {
    float: left;
    color: #3c8dfb;
    width: 40px;
    font-size: 20px;
    text-align: center;
  }
  #ditail {
    display: inline-block;
  }
  #ditail p {
    opacity: 0.5;
  }
  #r {
    float: right;
    line-height: 40px;
  }
  #r p,
  #r span {
    display: inline-block;
  }
  #r span {
    color: ${({ sucess }) => (sucess ? "#62BE58" : "crimson")};
    margin-left: 10px;
  }
  &:nth-child(odd) {
    background-color: #282a2a;
  }
  &:nth-child(even) {
    background-color: #2e3032;
  }
`;

export default HealthStorage;
