import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'; 

function LoginModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  return (
    <>
      <Button variant="outline-dark" onClick={handleShow}>
        LOGIN
      </Button> &nbsp;&nbsp;

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false} 
        className="modal-backdrop-transparent" 
      >
        <Modal.Header closeButton>
          <Modal.Title modal-header>Login to Website</Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label modal-header>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your username"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label modal-header>Password</Form.Label>
              <Form.Control
                type="Password"
                placeholder="Enter your password"
              />
            </Form.Group>
            {/* <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group> */}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default LoginModal;