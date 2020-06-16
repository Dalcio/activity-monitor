import React from "react";
import styled from "styled-components";

function Boxs({ name, value, children }) {
  return (
    <Div>
      <h5>{name}</h5>
      <h6>{value}°C</h6>
      <div>{children}</div>
    </Div>
  );
}
const Div = styled.div`
  width: 100%;
  margin: 20px 0;
  padding: 10px;
  border-radius: 10px;
  background-color: #292a2a;
  h5 {
    display: inline-block;
  }
  h6 {
    float: right;
  }
`;
export default Boxs;
