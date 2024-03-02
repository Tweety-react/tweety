import React from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import { Container, Row, Col, Nav, NavItem } from 'reactstrap';
import Accounts from './components/Accounts';
import Proxies from './components/Proxies';
import Dashboard from './components/Dashboard';

const Home = () => {
  return (
    <div>
        <Container fluid>
          <Row>
            <Col md={2} className="bg-light sidebar">
              <Nav vertical>
                <NavItem>
                  <NavLink className="nav-link" activeClassName="active" to="/">Dashboard</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" activeClassName="active" to="/accounts">Accounts</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" activeClassName="active" to="/proxies">Proxies</NavLink>
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
