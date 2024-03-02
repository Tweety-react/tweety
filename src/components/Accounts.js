import React, { useState, useEffect } from 'react';
import handleRequest, { handlePostRequest } from "../client/axios";
import { Modal, ModalBody, ModalHeader, ModalFooter, FormGroup, Label, Input, Button, Table } from 'reactstrap';

const Accounts = () => {
  const [accounts, setAccounts] = useState([]);
  const [accountModalOpen, setAccountModalOpen] = useState(false);

  useEffect(() => {
    handleRequest('/users').then((res) => {
      const accounts = res.data;
      setAccounts(accounts);
    });
  }, [setAccounts]);

  const handleAccountSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    setAccounts([...accounts, { email: email.value, password: password.value }]);
    toggleAccountModal();
    handlePostRequest('/users/', { username: 'deaulter', email: email.value, password: password.value});
  };
  
  const toggleAccountModal = () => setAccountModalOpen(!accountModalOpen);


  return (
    <>
      <h2>Accounts</h2>
      <Button color="primary" onClick={toggleAccountModal}>Add Account</Button>
      <Table>
        <thead>
          <tr>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {accounts.length > 0 ? accounts.map((account, index) => (
            <tr key={index}>
              <td>{account.email}</td>
              <td>{account.password}</td>
            </tr>
          )) : <tr><td colSpan="2">Account List will be shown here</td></tr>}
        </tbody>
      </Table>
      <Modal isOpen={accountModalOpen} toggle={toggleAccountModal}>
        <ModalHeader toggle={toggleAccountModal}>Add Account</ModalHeader>
        <form onSubmit={handleAccountSubmit}>
          <ModalBody>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input type="email" id="email" name="email" required />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input type="password" id="password" name="password" required />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" type="submit">Submit</Button>{' '}
            <Button color="secondary" onClick={toggleAccountModal}>Cancel</Button>
          </ModalFooter>
        </form>
      </Modal>
    </>
  );
};

export default Accounts;
