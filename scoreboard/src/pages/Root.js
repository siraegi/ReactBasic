import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./Home";
import Heroes from "./heroes/Heroes";
import Scoreboard from "./scoreboard/Scoreboard";
import Menu from "./Menu";
import View from "./hero/View";
import {Index} from "./heroes/Index"
export class Root extends Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <Menu/>
          <div className="container" style={{backgroundColor: '#ffffff'}}>
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route path="/heroes" component={Index}></Route>
              <Route path="/scoreboard" component={Scoreboard}></Route>
              {/*<Route path="/hero/:id" component={Hero}></Route>*/}
            </Switch>
          </div>

        </>
      </BrowserRouter>
    )
  }
}