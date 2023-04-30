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

  const elements = [
    { label: "Username", type: 'text', placeholder: 'Type in your username' , set: function(e) {setName(e.target.value)}},
    { label: "Email", type: 'email', placeholder: 'example@email.com' , set: function(e) {setEmail(e.target.value)}},
    { label: "Password", type: 'password', placeholder: '' , set: function(e) {setPassword(e.target.value)}},
  ]

  return (
    <>
      <Button variant="outline-dark" onClick={handleShow}>
        Register
      </Button>&nbsp;&nbsp; 

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}>

        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            {elements.map((el) => {
              return (
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>{el.label}</Form.Label>
                  <Form.Control
                    autoFocus
                    type={el.type}
                    placeholder={el.placeholder}
                    onChange={el.set}
                  />
                </Form.Group>
              )
            })}
  
            <h4>Hello {name}</h4>
            <h4>Your Email is: {email}</h4>
            <h4>Your Password is: {password}</h4>
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




  // const register = (e) => {
  //   localStorage.setItem("email", email)
  //   localStorage.setItem("Password", password)
  // }

