import React, { useEffect, useState } from 'react';
import { Card, CardBody, CardTitle, CardText, Row, Col } from 'reactstrap';
import handleRequest from "../client/axios";

const Dashboard = () => {

  const [entitiesCount, setEntitiesCount] = useState({'users_count': 0, 'proxies_count': 0});

  useEffect(() => {
    handleRequest('/dashboard').then((res) => {
      const entitiesCount = res.data;
      setEntitiesCount(entitiesCount);
    });
  }, [setEntitiesCount]);

  return (
    <div>
      <h2 className="mb-4">Dashboard</h2>
      <Row>
        <Col sm="6" md="4">
          <Card>
            <CardBody>
              <CardTitle>Accounts</CardTitle>
              <CardText>
                <span className="fs-4">{entitiesCount.users_count}</span>
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col sm="6" md="4">
          <Card>
            <CardBody>
              <CardTitle>Proxies</CardTitle>
              <CardText>
                <span className="fs-4">{entitiesCount.proxies_count}</span>
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
