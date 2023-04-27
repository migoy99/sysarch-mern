import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const RegisterModal = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  
  // const elements = [
  //   {label: "Email", type: 'email'} ,
  //   {label: "Username", type: 'text'},
  //   {label: "Password", type: 'password'},
  // ]


  // const register = (e) => {
  //   localStorage.setItem("email", email)
  //   localStorage.setItem("Password", password)
  // }


  return (
    <>
      <Button variant="outline-dark" onClick={handleShow}>
        REGISTER
      </Button>

      <Modal
        show={show}
        onHide={handleClose} 
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Type in your email"
                autoFocus
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
          <h3>Your Email is: {email}</h3>
          <h3>Your Password is: {password}</h3>
          </Form>





        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => { handleClose() }}>
            Register
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default RegisterModal;