import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
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
  const [Bg, setBg] = useState(null);
  return (
    <React.Fragment>
      <Sidebar setPW={setPW} />
      <PageContent width={pW} id="page-content" bg={Bg}>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/optimize" component={Optimize} />
          <Route path="/uninstaller" component={Uninstaller} />
          <Route path="/clean" component={Clean} />
          <Route path="/trim" component={Trim} Bg={setBg} />
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
  width: calc(100% - 256px);
  background-color: #1e1e20;
  float: left;
  height: 100vh;
  background-image: URL(${({ bg }) => bg});
  @media screen and (max-width: 853px) {
    width: 70%;
  }
  @media screen and (max-width: 760px) {
    width: ${({ width }) => width};
    transition: all 0.5s ease-in-out;
  }
  overflow-y: scroll;
  &::-webkit-scrollbar {
    max-width: 0.625rem !important;
  }
  &::-webkit-scrollbar-track {
    background: #2a2a2b !important;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #7d7d7e !important;
  }
`;
export default App;
