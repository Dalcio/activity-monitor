import React from "react";
import styled from "styled-components";
import Chart from "./Chart";

function Block(props) {
  return (
    <Div>
      <h6>CPU</h6>
      <Chart name="CPU Core #1" color={"green"} value={49} />
      <Chart name="CPU Core #2" color={"green"} value={50} />
      <Chart name="CPU Core #3" color={"green"} value={47} />
      <Chart name="CPU Core #4" color={"green"} value={48} />
      <Chart name="CPU Core #5" color={"green"} value={49} />
      <Chart name="CPU Core #6" color={"green"} value={48} />
      <Chart name="CPU Core #7" color={"green"} value={48} />
      <Chart name="CPU Core #8" color={"green"} value={48} />
      <Chart name="CPU #1 Die" color={"green"} value={48} />
      <Chart name="CPU #1 PECI" color={"green"} value={48} />
    </Div>
  );
}

const Div = styled.div`
  background-color: #292a2a;
  padding: 0;
  border-radius: 10px;
  width: 100%;
`;
export default Block;
