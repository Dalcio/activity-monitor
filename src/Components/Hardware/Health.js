import React from "react";
import styled from "styled-components";
function Health({ status, unit, ico, color, info }) {
  return (
    <Container>
      <Ico color={color}>{ico}</Ico>
      <Infor>
        <h3>{status + unit}</h3>
        <p>{info}</p>
      </Infor>
    </Container>
  );
}
const Ico = styled.div`
  float: left;
  font-size: 40px;
  text-align: center;
  width: 60px;
  height: 60px;
  margin-top: 35px;
  margin-left: 10px;
  line-height: 45px;
  border: 3px solid ${({ color }) => color};
  border-radius: 100%;
  color: ${({ color }) => color};
`;
const Infor = styled.div`
  text-align: right;
  float: right;
  height: 130px;
  width: calc(100% - 70px);
  padding: 10px;
  @media screen and (max-width: 340px) {
    font-size: 70%;
  }
  @media screen and (max-width: 260px) {
    & p {
      display: none;
    }
    & h3 {
      line-height: 130px;
    }
  }
`;
const Container = styled.div`
  border-radius: 10px;
  border: none;
  width: calc(50% - 20px);
  background-color: #282a2a;
  margin: 0 10px;
  min-height: 130px;
  display: inline-block;
  @media screen and (max-width: 900px) {
    margin: 10px 40px 10px 0px;
    width: 100%;
    display: block;
  }
`;
export default Health;
