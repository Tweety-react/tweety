/* eslint-disable no-restricted-globals */
import React, { useState,useEffect } from 'react';
import handleRequest, { handlePostRequest, handleDeleteRequest } from "../client/axios";
import { Modal, ModalBody, ModalHeader, ModalFooter, FormGroup, Label, Input, Button, Table } from 'reactstrap';

const Proxies = () => {
  const [proxies, setProxies] = useState([]);
  const [proxyModalOpen, setProxyModalOpen] = useState(false);

  const toggleProxyModal = () => setProxyModalOpen(!proxyModalOpen);

  useEffect(() => {
    handleRequest('/proxies').then((res) => {
      const proxies = res.data;
      setProxies(proxies);
    });
  }, [setProxies]);

  const handleProxyDelete = (id) => {
    if(confirm('Are you sure you want to delete this proxy?')){
      handleDeleteRequest(`/proxies/${id}`).then((res) => {
        console.log(res.data);
        setProxies(proxies.filter(proxy => proxy.id !== id));
      });
    }
  }

  const handleProxySubmit = (e) => {
    e.preventDefault();
    const { proxyHost, proxyPort, proxyUsername, proxyPassword } = e.target.elements;
    const proxy = { proxyHost: proxyHost.value, proxyPort: proxyPort.value, proxyUsername: proxyUsername.value, proxyPassword: proxyPassword.value };
    setProxies([...proxies, proxy]);
    toggleProxyModal();
    handlePostRequest('/proxies/', proxy);
  };

  return (
    <>
      <h2>Proxies</h2>
      <Button color="primary" onClick={toggleProxyModal}>Add Proxy</Button>
      <Table>
        <thead>
          <tr>
            <th>Proxy Host</th>
            <th>Proxy Port</th>
            <th>Proxy Username</th>
            <th>Proxy Password</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {proxies.length > 0 ? proxies.map((proxy, index) => (
            <tr key={index}>
              <td>{proxy.proxyHost}</td>
              <td>{proxy.proxyPort}</td>
              <td>{proxy.proxyUsername}</td>
              <td>{proxy.proxyPassword}</td>
              <td>
              <Button color="danger" type="button" onClick={() => handleProxyDelete(proxy.id)}>Delete</Button>
              </td>
            </tr>
          )) : <tr><td colSpan="4">Proxies List will be shown here</td></tr>}
        </tbody>
      </Table>
      <Modal isOpen={proxyModalOpen} toggle={toggleProxyModal}>
        <ModalHeader toggle={toggleProxyModal}>Add Proxy</ModalHeader>
        <form onSubmit={handleProxySubmit}>
          <ModalBody>
            <FormGroup>
              <Label for="proxyHost">Proxy Host</Label>
              <Input type="text" id="proxyHost" name="proxyHost" required />
            </FormGroup>
            <FormGroup>
              <Label for="proxyPort">Proxy Port</Label>
              <Input type="text" id="proxyPort" name="proxyPort" required />
            </FormGroup>
            <FormGroup>
              <Label for="proxyUsername">Proxy Username</Label>
              <Input type="text" id="proxyUsername" name="proxyUsername" required />
            </FormGroup>
            <FormGroup>
              <Label for="proxyPassword">Proxy Password</Label>
              <Input type="password" id="proxyPassword" name="proxyPassword" required />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" type="submit">Submit</Button>{' '}
            <Button color="secondary" onClick={toggleProxyModal}>Cancel</Button>
          </ModalFooter>
        </form>
      </Modal>
    </>
  );
};

export default Proxies;
