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
import styled from "styled-components";

function App() {
  const [pW, setPW] = useState("calc(100% - 50px)");
  return (
    <React.Fragment>
      <Sidebar setPW={setPW} />
      <PageContent width={pW} class="" id="page-content">
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
      </PageContent>
    </React.Fragment>
  );
}

const PageContent = styled.div`
  width: 70%;
  background-color: #1e1e20;
  float: left;
  height: 100vh;
  @media screen and (max-width: 760px) {
    width: ${({ width }) => width};
    transition: all 0.5s ease-in-out;
  }
`;
export default App;
