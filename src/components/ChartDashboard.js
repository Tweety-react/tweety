import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Row,
  Col,
  Container,
} from "reactstrap";
import Bar from "./Charts/Bar";
import Pie from "./Charts/Pie";

const Dashboard = () => {
  const [entitiesCount] = useState({
    users_count: 100,
    proxies_count: 200,
  });

  return (
    <div>
      <p className="mb-4 text-primary fst-italic fs-1">Dashboard</p>
      <Row className="text-primary">
        <Col sm="6" md="3">
          <Card className="shadow border rounded-3">
            <CardBody>
              <CardTitle>Total Accounts</CardTitle>
              <CardText className="d-flex align-items-center justify-content-between gap-3 fs-3">
                <span class="material-symbols-outlined">person_add</span>
                <span>{entitiesCount.users_count}</span>
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col sm="6" md="3">
          <Card className="shadow border rounded-3">
            <CardBody>
              <CardTitle>Total Proxies</CardTitle>
              <CardText className="d-flex align-items-center justify-content-between gap-3 fs-3">
                <span class="material-symbols-outlined">passkey</span>
                <span>{entitiesCount.proxies_count}</span>
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <p className="my-5 text-primary fst-italic fs-3">
        Analytics (Charts & Graphs)
      </p>
      <Row>
        <Col sm="6">
          <Container className="border shadow p-2">
            <Bar />
          </Container>
        </Col>
        <Col sm="6">
          <Container className="border shadow p-2">
            <Pie />
          </Container>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
