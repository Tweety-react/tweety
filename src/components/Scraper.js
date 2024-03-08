import React, { useEffect, useState } from "react";
import handleRequest from "../client/axios";
import { Row, Col, Container, Button, Table } from "reactstrap";

const Scraper = () => {
  const [status, setStatus] = useState(false);
  const [logs, setLogs] = useState([]);

  const getLogs = () => {
    handleRequest('/logs').then((res) => {
      const logs = res.data;
      setLogs(logs);
    })
  }

  useEffect(() =>{
    if (status) {
      const intervalId = setInterval(getLogs, 500);

      return () => clearInterval(intervalId);
    }
  }, [setLogs, status]);

  return (
    <div>
      <p className="mb-4 text-primary fst-italic fs-1">Scraper & Logs</p>
      <Row>
        <Col sm="12">
          <Container fluid className="p-2">

            <Container fluid className="d-flex justify-content-between">
              <Button
                onClick={() => setStatus(!status)}
                size="lg"
                className={`rounded rounded-pill px-5 ${status ? 'bg-secondary' : 'bg-primary'}`}
              >
                {status ? "Stop" : "Start"} Twitter Scraper
              </Button>

              {status && <Button
                onClick={() => getLogs()}
                size="lg"
                className={`rounded rounded-pill px-5 bg-primary`}
              > Refresh
              </Button>}
            </Container>
            {status && (
              <p className="p-2 mt-2">
                Scraper is running ...................
                <br></br> And you can check out logs below
              </p>
            )}
          </Container>
        </Col>
        {status && (
          <Col sm="12">
            <Container fluid className="p-2">
              <p className="text-primary fst-italic fs-3 w-100">Logs</p>
              <Table hover variant="dark">
                <thead className="bg-secondary text-white">
                  <tr>
                    <th>App</th>
                    <th>Client</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  {logs.map((item) => (
                    <tr>
                      <td>{item.app_label}</td>
                      <td>{item.client}</td>
                      <td>{item.tweetyGroup ? `[Group=${item.tweetyGroup}] ` : ''}{item.tweetyUser ? `[Group=${item.tweetyUser}] ` : ''}{item.description}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Container>
          </Col>
        )}
      </Row>
    </div>
  );
};

export default Scraper;
