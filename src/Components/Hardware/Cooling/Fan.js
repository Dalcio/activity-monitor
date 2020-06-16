import React from "react";
import { BsFan } from "react-icons/bs";
import styled from "styled-components";
import { GiBoatPropeller } from "react-icons/gi";

function Fan({ name, speed, maxSpeed, minSpeed }) {
  return (
    <Div>
      <div id="left">
        <h6>{name}</h6>
        <h6>{speed} RPM</h6>
        <div className="chart">
          <p>Max {maxSpeed}</p>
          <div>Chart</div>
          <p>Min {minSpeed}</p>
          <h6>{speed} RPM</h6>
        </div>
      </div>
      <div id="fan">
        <GiBoatPropeller className="fan" />
      </div>
    </Div>
  );
}
const Div = styled.div`
  display: inline-block;
  width: calc(50% - 20px);
  margin: 10px;
  padding: 10px;
  background-color: #28282a;
  border-radius: 10px;
  #left {
    display: inline-block;
    width: calc(100% - 130px);
  }
  .chart div {
    background-color: #2b416a;
    width: 100%;
  }
  .chart p {
    margin: 0;
    padding: 0;
    opacity: 0.5;
    font-size: 11px;
  }
  .chart div + p {
    display: inline-block;
  }
  .chart h6 {
    float: right;
  }
  #fan {
    float: right;
    font-size: 40px;
    margin: 20px;
    border: 5px solid gray;
    border-radius: 100%;
    width: 81px;
    height: 81px;
    text-align: center;
    line-height: 55px;
  }
  @media screen and (max-width: 900px) {
    /*margin: 10px 40px 10px 0px;*/
    width: 100%;
    display: block;
  }
`;
export default Fan;
