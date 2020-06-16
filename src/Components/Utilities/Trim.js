import React, { useState } from "react";
import styled from "styled-components";
import { BsFillLightningFill } from "react-icons/bs";

const Trim = () => {
  const [sw, setSw] = useState(false);
  const sms = sw
    ? "Trim is enabled and working in th background."
    : "Tun on the Trim.";
  return (
    <Container>
      <div className="trim-modal">
        <span id="thunder">
          <BsFillLightningFill />
        </span>
        <div id="switch">
          <label className="switch">
            <input type="checkbox" onClick={() => setSw(!sw)} />
            <span className="slider round"></span>
          </label>
        </div>
        <div id="trim-sms">
          <p>{sms}</p>
          <p>{sw ? "Everything looks great!" : ""}</p>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 90vh;
  .trim-modal {
    color: #c0c0c0;
    height: 80vh;
    width: 40%;
    min-width: 200px;
    text-align: center;
    border: 1px solid rgb(90, 90, 90, 0.5);
    border-radius: 5px;
    background-color: #1d1e20;
    margin-top: 10vh;
    margin-bottom: 10vh;
    margin-left: 30%;
  }
  /****/
  #thunder {
    color: #3d8bf7;
    font-size: 25vh;
    line-height: 25vh;
  }
  #switch {
    background-color: #302e32;
    width: 100%;
    margin: 5vh 0 4vh 0;
    padding-top: 7px;
  }
  #trim-sms {
    height: 25vh;
  }
`;

export default Trim;
