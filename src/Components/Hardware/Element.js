import React from "react";
import styled from "styled-components";
import src from "../Assets/background-1.jpg";

function Element({ name, info }) {
  return (
    <Box>
      <img src={src} alt="" />
      <h4>{name}</h4>
      <p>{info}</p>
    </Box>
  );
}

const Box = styled.div`
  background-color: #282a2a;
  border-radius: 10px;
  width: 60%;
  max-width: 306px;
  margin: 10px;
  text-align: center;
  padding: 20px 10px;
  display: inline-block;
  img {
    width: 80px;
    height: 80px;
    background-color: red;
  }
`;

export default Element;
