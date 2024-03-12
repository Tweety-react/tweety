import React, { useEffect, useState } from "react";
import handleRequest from "../client/axios";
import { Form, Row, Label, Input, FormGroup, Col, Container, Button, Table } from "reactstrap";

const Scraper = () => {
  const [status, setStatus] = useState(false);
  const [logs, setLogs] = useState([]);
  const [users, setUsers] = useState([]);

  const getLogs = () => {
    handleRequest('/logs').then((res) => {
      const logs = res.data;
      setLogs(logs);
    })
  }

  const startScript = (formData) => {
    const [user, proxy] = formData.get('user').split('-');
    handleRequest(`/start/${user}/${proxy}/`).then((res) => {
      console.log(res.data);
    })
  };

  const stopScript = () => {
    handleRequest(`/stop/`).then((res) => {
      console.log(res.data);
    })
  };

  const submitForm = (event) => {
    event.preventDefault()
    if (status) {
      stopScript();
    } else {
      const formData = new FormData(event.target);
      startScript(formData);
      getLogs();
    }
    setStatus(!status)
  }

  useEffect(() => {
    handleRequest('/users').then((res) => {
      const users = res.data;
      setUsers(users);
    });

  }, [setUsers]);

  useEffect(() =>{
    if (status) {
      const intervalId = setInterval(getLogs, 5000);

      return () => clearInterval(intervalId);
    }
  }, [setLogs, status]);

  return (
    <div>
      <p className="mb-4 text-primary fst-italic fs-1">Scraper & Logs</p>
      <Row>
        <Col sm="12">
          <Container fluid className="p-2">
            <Form className="col-12" onSubmit={submitForm}>
              <Container fluid className="d-flex justify-content-between">
                <FormGroup className="col-12 col-sm-5">
                  <Label for="user" className="mr-sm-2">User:</Label>
                  <Input type="select" name="user" id="user" required>
                    <option value="">Select a user</option>
                    {users.map((user) => (
                        <option value={`${user.id}-${user.proxy}`}>{user.username}</option>
                    ))}
                  </Input>
                </FormGroup>
              </Container>
              <Container fluid className="d-flex justify-content-end">
                {status && <Button
                  onClick={() => getLogs()}
                  size="sm"
                  className={`rounded rounded-pill px-5 bg-primary`}
                > Refresh
                </Button>}
                <Button
                  type="submit"
                  // onClick={() => setStatus(!status)}
                  size="sm"
                  className={`rounded rounded-pill px-5 ${status ? 'bg-secondary' : 'bg-primary'}`}
                >
                  {status ? "Stop" : "Start"} Twitter Scraper
                </Button>
            </Container>
            </Form>

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
