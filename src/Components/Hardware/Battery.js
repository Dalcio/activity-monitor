import React, { Component } from "react";
import { Table, TableGroup, TableLinha } from "./HardwareComponents";
import { TiThermometer, TiHeartFullOutline } from "react-icons/ti";
import Batery from "../Assets/battery.png";
import Health from "./Health";
import styled from "styled-components";
import { ProgressBar } from "react-bootstrap";

class Battery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      charging: false,
    };
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <Header className="col-md-12">
            <img src={Batery} alt="battery" />
            <div id="info">
              <div id="capacity">
                <span>8700 mAh</span>
                <p>Capacity</p>
              </div>
              <h4>BQ40Z651</h4>
              <p>Li-Polyner MacBook Pro (16-inch, 2019) Battery</p>
              <h6>DSY</h6>
              <ProgressBar
                variant="success"
                now={18}
                label={`${18}%`}
                style={{
                  height: "30px",
                  marginTop: "30px",
                  backgroundColor: "#474E47",
                }}
              />
            </div>
          </Header>
        </div>
        <hr />
        <div className="row">
          <div className="col-12 ">
            <h4>Health</h4>
          </div>
          <div className="col-12 ">
            <Health
              status={98}
              unit={"%"}
              ico={<TiHeartFullOutline />}
              color={"#DD5E97"}
              info={
                "This battery is in good condition but is starting to lose some capacity."
              }
            />
            <Health
              status={32}
              unit={"°C"}
              ico={<TiThermometer />}
              color={"#3C8DFB"}
              info={"The temperature is within normal working conditions."}
            />
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
                  <div>Serial #</div>
                  <div>F5D9422ANQHK7LQ5N</div>
                </TableLinha>
                <TableLinha>
                  <div>Voltage</div>
                  <div>10972 mv</div>
                </TableLinha>
                <TableLinha>
                  <div>Amperage</div>
                  <div>-2274 mA</div>
                </TableLinha>
                <TableLinha>
                  <div>Pack reserve</div>
                  <div>244 mA</div>
                </TableLinha>
                <TableLinha>
                  <div>Resolution scale</div>
                  <div>244 mA</div>
                </TableLinha>
                <TableLinha last>
                  <div>Time remaining</div>
                  <div>38 minutes</div>
                </TableLinha>
              </TableGroup>
              {/**********************************************/}
              <TableGroup>
                <TableLinha>
                  <div>Manufacturer</div>
                  <div>DSY</div>
                </TableLinha>
                <TableLinha>
                  <div>Manufacture date</div>
                  <div>10 October 2019</div>
                </TableLinha>
                <TableLinha>
                  <div>Design capacity</div>
                  <div>8790 mAh</div>
                </TableLinha>
                <TableLinha>
                  <div>Max capacity</div>
                  <div>8581 mAh</div>
                </TableLinha>
                <TableLinha>
                  <div>Design cycle count</div>
                  <div>1000</div>
                </TableLinha>
                <TableLinha last>
                  <div>Cycle count</div>
                  <div>37</div>
                </TableLinha>
              </TableGroup>
            </Table>
          </div>
        </div>
      </div>
    );
  }
}

const Header = styled.div`
  margin-top: 20px;
  #info {
    float: left;
    width: calc(100% - 182px);
  }
  #capacity {
    float: right;
    width: 100px;
    text-align: center;
  }
  #capacity span {
    border: 1px solid #c0c0c0;
    border-radius: 3px;
    padding 2px 10px;
  }
  img{
    float: left;
    width: 182px;
  }
`;

export default Battery;
