import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { RiHardDrive2Line } from "react-icons/ri";
import ReactSpeedometer from "react-d3-speedometer";
import { Back } from "./Back";
import BenchRow from "./BenchRow";

class Benchmark extends Component {
  render() {
    const segments = [0, 500, 1000, 1500, 2000, 2500, 3000, 3500, 4000];
    const segmentColors = [
      "rgba(51, 129, 245, 0.329)",
      "rgba(51, 135, 245, 0.4467)",
      "rgba(51, 119, 245, 0.363)",
      "rgba(51, 119, 245, 0.432)",
      "rgba(51, 119, 245, 0.589)",
      "rgba(51, 119, 245, 0.781)",
      "rgba(51, 119, 245, 0.911)",
      "#3376F5",
    ];
    return (
      <Bench>
        <div id="header">
          <Link to="/storage">
            <Back>
              <MdKeyboardArrowLeft />
            </Back>
          </Link>
          <button className="btn btn-primary pl-3 pr-3">Run Benchmark</button>
          <div id="speedmoter">
            <Speedometer float="left">
              <ReactSpeedometer
                customSegmentStops={segments}
                segmentColors={segmentColors}
                currentValueText="Read (MB/s)"
                maxValue={4000}
                value={2502}
                ringWidth={20}
                height={180}
                width={250}
              />
            </Speedometer>
            <Speedometer float="right">
              <ReactSpeedometer
                customSegmentStops={segments}
                segmentColors={segmentColors}
                currentValueText="Write (MB/s)"
                maxValue={4000}
                value={2187}
                ringWidth={20}
                height={180}
                width={250}
              />
            </Speedometer>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <h4 className="ml-4">APPLE SSD AP1020N</h4>
            {/***************************************************************/}
            <BenchRow
              name={"APPLE SSD AP1020N"}
              date={"2020-01-10 13:57"}
              speedR={"2,5 GB/s"}
              speedW={"2,19 GB/s"}
            />
            <BenchRow
              name={"APPLE SSD AP1020N"}
              date={"2020-01-10 22:41"}
              speedR={"2,57 GB/s"}
              speedW={"2,17 GB/s"}
            />
            <BenchRow
              name={"APPLE SSD AP1020N"}
              date={"2020-01-08 13:09"}
              speedR={"2,52 GB/s"}
              speedW={"2,12 GB/s"}
            />
          </div>
        </div>
      </Bench>
    );
  }
}
const Bench = styled.div`
  #header {
    background-color: #3c3c3c;
    margin-bottom: 20px;
    min-height: 360px;
    padding: 10px;
  }
  .btn {
    margin-top: 50px;
    margin-left: calc(50% - 72.275px);
    margin-bottom: 50px;
  }
`;
const Speedometer = styled.div`
  float: ${({ float }) => float};
`;
export default Benchmark;
