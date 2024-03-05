import React, { useState } from "react";
import { Row, Col, Container, Button, Table } from "reactstrap";

const Scraper = () => {
  const [status, setStatus] = useState(false);

  return (
    <div>
      <p className="mb-4 text-primary fst-italic fs-1">Scraper & Logs</p>
      <Row>
        <Col sm="12">
          <Container fluid className="p-2">
            <Button
              onClick={() => setStatus(!status)}
              size="lg"
              className={`rounded rounded-pill px-5 ${status ? 'bg-secondary' : 'bg-primary'}`}
            >
              {status ? "Stop" : "Start"} Twitter Scraper
            </Button>
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
                    <th>#</th>
                    <th>Type</th>
                    <th>From</th>
                    <th>Detail</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>SUCCESS</td>
                    <td>Twitter</td>
                    <td>Group @mendalla posting retweets</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>ERROR</td>
                    <td>Twitter</td>
                    <td>Group @mendalla retweeting error</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>SUCCESS</td>
                    <td>Twitter</td>
                    <td>Group @mendalla posting retweets</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>ERROR</td>
                    <td>Twitter</td>
                    <td>Group @mendalla retweeting error</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>SUCCESS</td>
                    <td>Twitter</td>
                    <td>Group @mendalla posting retweets</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>ERROR</td>
                    <td>Twitter</td>
                    <td>Group @mendalla retweeting error</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>SUCCESS</td>
                    <td>Twitter</td>
                    <td>Group @mendalla posting retweets</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>ERROR</td>
                    <td>Twitter</td>
                    <td>Group @mendalla retweeting error</td>
                  </tr>
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
