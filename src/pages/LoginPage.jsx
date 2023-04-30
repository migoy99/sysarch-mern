import React from 'react'
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBarHome.jsx';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';

const LoginPage = () => {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const elements = [
        { label: "Email", type: 'email', placeholder: 'example@email.com', set: function (e) { setEmail(e.target.value) } },
        { label: "Password", type: 'password', placeholder: '', set: function (e) { setPassword(e.target.value) } },
    ]
    return (
        <>
            <NavBar />

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: '300px', marginLeft: '300px' }}>
                <Form style={{ width: '40%' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <h4>Login</h4>
                    </div>
                    {elements.map((el) => {
                        return (
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>{el.label}</Form.Label>
                                <Form.Control
                                    autoFocus={el.label === "Email"}
                                    type={el.type}
                                    placeholder={el.placeholder}
                                    onChange={el.set}
                                    style={{
                                        padding: '.6em',
                                        outline: 'none',
                                        border: '2px solid rgb(200, 200, 200)',
                                        backgroundColor: 'transparent',
                                        borderRadius: '20px',
                                    }}
                                />
                            </Form.Group>
                        )
                    })}

                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Button variant="outline-dark">Login</Button>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '25px' }}>
                        <h6>Don't have an account? <Link to='/register'>Register</Link></h6>
                    </div>
                </Form>
            </div>
        </>
    )
}

export default LoginPage