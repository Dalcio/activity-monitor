import React from "react";
import { RiHardDrive2Line } from "react-icons/ri";
import styled from "styled-components";

function BenchRow({ name, date, speedR, speedW }) {
  return (
    <BenchR id="body">
      <div id="ico">
        <RiHardDrive2Line />
      </div>
      <div id="date">
        <h6>{name}</h6>
        <p>{date}</p>
      </div>
      <Btn c="47, 83, 148">
        <span>{speedR}</span>
        <p>Read</p>
      </Btn>
      <Btn c="65, 107, 61">
        <span>{speedW}</span>
        <p>Write</p>
      </Btn>
    </BenchR>
  );
}

const BenchR = styled.div`
  background-color: #282a2a;
  border-radius: 10px;
  min-height: 80px;
  padding: 10px;
  width: calc(100% - 20px);
  margin: 20px 20px 0 20px;
  #body p {
    opacity: 0.5;
  }
  #ico,
  #date {
    display: inline-block;
  }
  #ico {
    font-size: 30px;
    margin-right: 20px;
  }
`;
const Btn = styled.div`
  background-color: ${({ c }) => `rgba(${c}, 0.3)`};
  border: 2px solid ${({ c }) => `rgb(${c})`};
  border-radius: 10px;
  padding: 0 20px;
  margin: 10px;
  text-align: center;
  float: right;
  p {
    margin: 0;
    font-size: 10px;
    opacity: 0.5;
  }
`;
export default BenchRow;
