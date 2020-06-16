import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Benchmark from "./Benchmark";
import Home from "./Home";
import Statistics from "./Statistics";
import HealthStorage from "./HealthStorage";
class Storage extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/storage" component={Home} />
        <Route path="/storage/benchmark" component={Benchmark} />
        <Route path="/storage/health" component={HealthStorage} />
        {/*<Route path="/storage/statistics" component={Statistics} />*/}
      </Switch>
    );
  }
}

export default Storage;
