import React from "react";
import styled from "styled-components";

function Chart({ name, value, color, one }) {
  return (
    <Div color={color} one={one}>
      <p>{name}</p>
      <div id="chart">Chart</div>
      <p>{value}°C</p>
    </Div>
  );
}
const Div = styled.div`
  display: inline-block;
  width: ${({ one }) => (one ? "calc(100% - 20px)" : "calc(50% - 20px)")};
  margin: 5px 10px;
  #chart {
    width: 100%;
    height: 40px;
    background-color: ${({ color }) => color};
  }
  p {
    margin: 0;
    font-size: 12px;
  }
  p:first-child {
    opacity: 0.5;
  }
  p:last-child {
    float: right;
    color: #fff;
  }
`;
export default Chart;
