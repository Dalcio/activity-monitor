import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { Switch, Route } from "react-router-dom";
import {
  Sidebar,
  Dashboard,
  Optimize,
  Uninstaller,
  Clean,
  Trim,
  Storage,
  Graphics,
  Battery,
  Cooling,
  Settings,
} from "./Components/ActivityComponents";
import { useState } from "react";
import { Col, Row, Container } from "react-bootstrap";

function App() {
  //const [col, setCol] = useState(' col-xs-1')
  return (
    <React.Fragment>
      <Container fluid>
        <Row>
          <Col xs={2} md={2} id="sidebar-wrapper">
            <Sidebar />
          </Col>
          <Col xs={10}  md={10} id="page-content-wrapper">
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route path="/optimize" component={Optimize} />
              <Route path="/uninstaller" component={Uninstaller} />
              <Route path="/clean" component={Clean} />
              <Route path="/trim" component={Trim} />
              <Route path="/storage" component={Storage} />
              <Route path="/graphics" component={Graphics} />
              <Route path="/battery" component={Battery} />
              <Route path="/cooling" component={Cooling} />
              <Route path="/settings" component={Settings} />
            </Switch>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default App;
