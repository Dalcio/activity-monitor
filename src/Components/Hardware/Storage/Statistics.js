import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Back } from "./Back";
import { MdKeyboardArrowLeft } from "react-icons/md";
import styled from "styled-components";
import Btn from "./Btn";
import Chart from "./Chart";

class Statistics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      graphs: [],
    };
  }

  addGraph = (graph) => {
    let graphs = this.state.graphs;
    graphs.push(graph);
    this.setState({ graphs: graphs });
  };

  removeGraph = (id) => {
    let graphs = this.state.graphs;
    graphs.filter((gID) => gID !== id);
    this.setState({ graphs: graphs });
  };

  render() {
    return (
      <div>
        <Link to="/storage" className="d-inline-block">
          <Back>
            <MdKeyboardArrowLeft />
          </Back>
        </Link>
        <h6
          className="d-inline-block"
          style={{ textAlign: "center", width: "calc(100% - 50px)" }}
        >
          APPLE SSD AP1024N
        </h6>
        <Left className="col-5 float-left">
          <Btn name="Read Operations" />
          <Btn name="Write Operations" />
          <Btn name="Read Latency Time" />
          <Btn name="Write Latence Time" />
          <Btn name="Read Bytes" />
          <Btn name="Written Bytes" />
          <Btn name="Read Errors" />
          <Btn name="Write Errors" />
          <Btn name="Read Total Time " />
          <Btn name="Write Total Time" />
          <Btn name="Read Retries" />
          <Btn name="Write Retries" />
        </Left>
        <Right className="col-7 float-right">
          <Chart />
        </Right>
      </div>
    );
  }
}
const Left = styled.div`
  background-color: #292a2a;
  height: calc(100vh - 36px);
  padding: 0;
  button {
    width: 100%;
    border-radius: 0;
    margin-bottom: 1px;
    text-align: left;
  }
  @media screen and (max-height: 500px) {
    overflow-y: scroll;
    &::-webkit-scrollbar {
      max-width: 0.3rem !important;
    }

    &::-webkit-scrollbar-track {
      background: #2a2a2b !important;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #7d7d7e !important;
    }
  }
`;
const Right = styled.div`
  background-color: #323232;
  min-height: calc(100vh - 36px);
  border-top: 0.001rem solid #c0c0c0;
  border-left: 0.001rem solid #c0c0c0;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    max-width: 0.3rem !important;
  }
  &::-webkit-scrollbar-track {
    background: #2a2a2b !important;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #7d7d7e !important;
  }
`;
export default Statistics;
