/* eslint-disable no-restricted-globals */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import handleRequest, { handlePostRequest, handleDeleteRequest } from "../client/axios";
import { Modal, ModalBody, ModalHeader, ModalFooter, FormGroup, Label, Input, Button, Table, Container } from 'reactstrap';

const Accounts = () => {
  const [accounts, setAccounts] = useState([]);
  const [proxies, setProxies] = useState([]);
  const [accountModalOpen, setAccountModalOpen] = useState(false);

  useEffect(() => {
    handleRequest('/users').then((res) => {
      const accounts = res.data;
      setAccounts(accounts);
    });
    handleRequest('/available_proxies').then((res) => {
      const proxies = res.data;
      setProxies(proxies);
    });
  }, [setAccounts, setProxies]);

  const handleAccountSubmit = (e) => {
    e.preventDefault();
    const user = new FormData(e.target);
    toggleAccountModal();
    handlePostRequest('/users/', user).then((res) => {
      const user1 = res.data;
      setAccounts([...accounts, user1]);
    });
  };

  const handleAccountDelete = (id) => {
    if(confirm('Are you sure you want to delete this user?')){
      handleDeleteRequest(`/users/${id}`).then((res) => {
        console.log(res.data);
        setAccounts(accounts.filter(account => account.id !== id));
      });
    }

  }

  const toggleAccountModal = () => setAccountModalOpen(!accountModalOpen);


  return (
    <>
      <h2>Accounts</h2>
      <Button color="primary" onClick={toggleAccountModal}>Add Account</Button>
      <Table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Password</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {accounts.length > 0 ? accounts.map((account, index) => (
            <tr key={index}>
              <td>{account.username}</td>
              <td>{account.email}</td>
              <td>{account.phone}</td>
              <td>{account.password}</td>
              <td>
              <Button color="danger" type="button" onClick={() => handleAccountDelete(account.id)}>Delete</Button>
              </td>
            </tr>
          )) : <tr><td colSpan="2">Account List will be shown here</td></tr>}
        </tbody>
      </Table>
      <Modal isOpen={accountModalOpen} toggle={toggleAccountModal}>
        <ModalHeader toggle={toggleAccountModal}>Add Account</ModalHeader>
        <form onSubmit={handleAccountSubmit}>
          <ModalBody>
            <FormGroup >
              <Label for="proxy">Proxy:</Label>
              <Input type="select" name="proxy" id="proxy" required>
                <option value="">Select a proxy</option>
                {proxies.map((proxy) => (
                    <option value={proxy.id}>{proxy.proxyHost}-{proxy.proxyPort}-{proxy.proxyUsername}</option>
                ))}
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="username">Username</Label>
              <Input type="text" id="username" name="username" required />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input type="email" id="email" name="email" required />
            </FormGroup>
            <FormGroup>
              <Label for="phone">Phone Number</Label>
              <Input type="text" id="phone" name="phone" required />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input type="password" id="password" name="password" required />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Container fluid className="d-flex justify-content-between">
              <div className="w-50 d-flex justify-content-start">
                <Link className='btn btn-outline-info' to="/proxies">Add Proxies</Link>
              </div>
              <div className="w-50 d-flex justify-content-end">
                <Button className="me-2" color="primary" type="submit">Submit</Button>
                <Button color="secondary" onClick={toggleAccountModal}>Cancel</Button>
              </div>
            </Container>
          </ModalFooter>
        </form>
      </Modal>
    </>
  );
};

export default Accounts;
