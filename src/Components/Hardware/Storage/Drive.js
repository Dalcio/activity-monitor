import React from "react";
import { RiHardDrive2Line } from "react-icons/ri";
import { ProgressBar } from "react-bootstrap";
import styled from "styled-components";

const getUnit = (size) => {
  const unit = ["K", "M", "G", "T", "P", "E", "Z", "Y"];
  let index = 0;
  if (size <= 1024) {
    size /= 1024;
    index = 0;
  } else if (size <= Math.pow(1024, 2)) {
    size /= 1024 ** 2;
    index = 1;
  } else if (size <= Math.pow(1024, 3)) {
    size /= 1024 ** 3;
    index = 2;
  } else if (size <= Math.pow(1024, 4)) {
    size /= 1024 ** 4;
    index = 3;
  } else if (size <= Math.pow(1024, 5)) {
    size /= 1024 ** 5;
    index = 4;
  } else if (size <= Math.pow(1024, 6)) {
    size /= 1024 ** 6;
    index = 5;
  } else if (size <= Math.pow(1024, 7)) {
    size /= 1024 ** 7;
    index = 6;
  } else if (size <= Math.pow(1024, 8)) {
    size /= 1024 ** 8;
    index = 7;
  }
  return size + unit[index] + "B";
};

function Drive(props) {
  const { used, capacity, name, select } = props;
  const percent = (used * 100) / capacity;
  return (
    <Hard width={"100%"} select={select}>
      <div id="header">
        <RiHardDrive2Line />
        {" " + name}
      </div>
      <ProgressBar
        variant={percent >= 90 ? "danger" : ""}
        now={percent}
        style={{
          height: "20px",
          marginTop: "5px",
          backgroundColor: "#3E424A",
        }}
      />
      <p id="statistics">
        {used + "GB"} used out of {capacity / 1024 + "TB"}
      </p>
      <p id="percent">{Math.round(percent)}%</p>
    </Hard>
  );
}

const Hard = styled.div`
  width: ${({ width }) => width};
  background-color: ${({ select }) =>
    select ? "rgb(60, 140, 251,0.1)" : "#282a2c"};
  border-radius: 10px;
  height: 100px;
  padding: 10px 20px;
  &:hover {
    background-color: "rgb(60, 140, 251,0.1)";
  }
  #header {
    text-transform: uppercase;
  }
  #statistics {
    float: left;
  }
  #percent {
    float: right;
  }
`;

export default Drive;
