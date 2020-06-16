import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Table, TableGroup, TableLinha } from "../HardwareComponents";
import { IoIosSpeedometer, IoMdHeart } from "react-icons/io";
import { TiChartPie } from "react-icons/ti";
import Drive from "./Drive";

class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-2">
            <br />
            <h4>Drive</h4>
            <Drive
              used={232.82}
              capacity={1024}
              name={"Apple SSD AP1024"}
              select={true}
            />
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-12 mb-2">
            <h4>Feactures</h4>
          </div>
          <div className="col-12">
            <Link to="/storage/benchmark">
              <Feacture
                className="btn btn-success"
                bg={"#3C8DFB"}
                color={"#337add"}
              >
                <div id="bg">
                  <IoIosSpeedometer />
                </div>
                <div id="footer">
                  <h5>Benchmark</h5>
                  <p>Measure and compare your drive perfomace</p>
                </div>
              </Feacture>
            </Link>
            <Link to="/storage/health">
              <Feacture
                className="btn btn-danger"
                bg={"#DD5E97"}
                color={"rgb(240, 133, 181)"}
              >
                <div id="bg">
                  <IoMdHeart />
                </div>
                <div id="footer">
                  <h5>Health</h5>
                  <p>Analyze your drive health and longevity</p>
                </div>
              </Feacture>
            </Link>
            {/*
            <Link to="/storage/statistics">
              <Feacture
                className="btn btn-primary"
                bg={"#0060e7"}
                color={"#3C8DFB"}
                last
              >
                <div id="bg">
                  <TiChartPie />
                </div>
                <div id="footer">
                  <h5>Statistics</h5>
                  <p>Monitor realtime I/O statistics</p>
                </div>
              </Feacture>
            </Link>*/}
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-12 mb-2">
            <h4>Information</h4>
          </div>
          <div className="col-12">
            <Table>
              {/**********************************************/}
              <TableGroup>
                <TableLinha>
                  <div>Vendor</div>
                  <div>Apple</div>
                </TableLinha>
                <TableLinha>
                  <div>Type</div>
                  <div>Solid State Drive</div>
                </TableLinha>
                <TableLinha>
                  <div>Interface</div>
                  <div>PCI-Express</div>
                </TableLinha>
                <TableLinha>
                  <div>Location</div>
                  <div>Internal</div>
                </TableLinha>
                <TableLinha>
                  <div>Capacity</div>
                  <div>1 TB</div>
                </TableLinha>
                <TableLinha>
                  <div>Identifier</div>
                  <div>disk0</div>
                </TableLinha>
                <TableLinha>
                  <div>S.M.A.R.T Supported</div>
                  <div>Yes</div>
                </TableLinha>
                <TableLinha last>
                  <div>Block Size</div>
                  <div>4096</div>
                </TableLinha>
              </TableGroup>
              {/**********************************************/}
              <TableGroup>
                <TableLinha>
                  <div>S.M.A.R.T Status</div>
                  <div>Valid</div>
                </TableLinha>
                <TableLinha>
                  <div>Network</div>
                  <div>No</div>
                </TableLinha>
                <TableLinha>
                  <div>Ejectable</div>
                  <div>No</div>
                </TableLinha>
                <TableLinha>
                  <div>Locked</div>
                  <div>No</div>
                </TableLinha>
                <TableLinha>
                  <div>Children</div>
                  <div>2</div>
                </TableLinha>
                <TableLinha>
                  <div>Barrier enabled</div>
                  <div>Yes</div>
                </TableLinha>
                <TableLinha>
                  <div>Serial</div>
                  <div>C029437017BN9V01D</div>
                </TableLinha>
                <TableLinha last>
                  <div>Revision</div>
                  <div>717.40.1</div>
                </TableLinha>
              </TableGroup>
            </Table>
          </div>
        </div>
      </div>
    );
  }
}
const Feacture = styled.div`
  display: inline-block;
  /*width: 31%;*/
  width: calc(50% - 20px);
  height: 150px;
  padding: 0;
  margin: 0 10px;
  border-radius: 10px;
  background-color: ${({ bg }) => bg} !important;
  border-color: #363538 !important;
  #footer {
    text-align: left;
    height: 84px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    padding: 0 10px;
    background-color: #38353a;
    position: relative;
  }
  p {
    opacity: 0.5;
  }
  #bg {
    height: 65px;
    font-size: 80px;
    line-height: 0;
    color: ${({ color }) => color};
  }
  /*@media screen and (max-width: 1152px) {
    ${({ last }) => {
      return !last
        ? "width: calc(50% - 20px);"
        : `{
        display: block;
        margin-top: 20px;
        width: calc(100% - 18px);
      }`;
    }}
  }*/
  @media screen and (max-width: 650px) {
    margin: 10px 40px 10px 0px;
    width: 100%;
    display: block;
  }
`;
export default Home;
