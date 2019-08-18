import React, {Component} from 'react';
import {NavLink, Redirect, Route, Switch} from "react-router-dom";
import {
  Collapse, DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarToggler,
  NavItem,
  UncontrolledDropdown
} from "reactstrap";
import Heroes from "./Heroes";
import {Register} from "./Register";
import "./Index.scss"
export class Index extends Component {
  render() {
    return (
      <>
        <Nav className="mb-3">
          <NavItem>
            <NavLink to="/heroes/hero" className="nav-link">Hero List</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/heroes/register" className="nav-link">Register</NavLink>
          </NavItem>
        </Nav>
        <Switch>
          <Route path="/heroes/hero" component={Heroes}></Route>
          <Route path="/heroes/register" component={Register}></Route>
          <Route path="/heroes" render={()=><Redirect to="/heroes/hero" />}></Route>
        </Switch>
      </>
    )
  }
}
