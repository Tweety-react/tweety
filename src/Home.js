import React from "react";
import { Route, Routes, NavLink } from "react-router-dom";
import { Container, Row, Col, Nav, NavItem } from "reactstrap";
import Accounts from "./components/Accounts";
import Proxies from "./components/Proxies";
import Dashboard from "./components/Dashboard";

const Home = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col md={2} className="bg-light sidebar">
            <Nav vertical className="shadow border rounded-3 p-3 m-3 h-95vh gap-1">
              <NavItem>
                <NavLink
                  className="nav-link my-3"
                  activeClassName="active"
                  to="/"
                >
                  <h1>Tweety</h1>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className="nav-link d-flex align-items-center gap-2"
                  activeClassName="active"
                  to="/"
                >
                  <span className="material-symbols-outlined">
                    bar_chart_4_bars
                  </span>
                  Dashboard
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className="nav-link d-flex align-items-center gap-2"
                  activeClassName="active"
                  to="/accounts"
                >
                  <span className="material-symbols-outlined">group</span>
                  Accounts
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className="nav-link d-flex align-items-center gap-2"
                  activeClassName="active"
                  to="/proxies"
                >
                  <span className="material-symbols-outlined">vpn_lock</span>
                  Proxies
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
          <Col md={10} className="mt-4">
            <Routes>
              <Route path="/accounts" element={<Accounts />} />
              <Route path="/proxies" element={<Proxies />} />
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
