import React from 'react'
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBarHome.jsx';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';


function RegisterPage() {

    const [userInput, setUserInput] = useState({
        username: "",
        email: "",
        password: "",
    })

    const elements = [
        { name: "username", label: "Username", type: 'text', placeholder: 'Type in your username', set: function (e) { setUserInput({ ...userInput, [e.target.name]: e.target.value }) } },
        { name: "email", label: "Email", type: 'email', placeholder: 'example@email.com', set: function (e) { setUserInput({ ...userInput, [e.target.name]: e.target.value }) } },
        { name: "password", label: "Password", type: 'password', placeholder: '', set: function (e) { setUserInput({ ...userInput, [e.target.name]: e.target.value }) } },
    ]

    //store value in local storage.
    const handleRegisterClick = (e) => {
        e.preventDefault();
        localStorage.setItem("user", JSON.stringify(userInput))
    }

    return (
        <>
            <NavBar />
            <div >
                <div style={{ display: 'flex', justifyContent: 'center', borderRadius: '35px', padding: '2%', }}>
                    <Form style={{ width: '400px', borderRadius: '35px', backgroundColor: 'rgba(0, 0, 0,  10%)', }}>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '5%' }}>
                            <h3>Register</h3>
                        </div>

                        {elements.map((el) => {
                            return (
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" style={{ margin: '5%' }}>
                                    <Form.Label>{el.label}</Form.Label>
                                    <Form.Control

                                        autoFocus={el.label === "Username"}
                                        type={el.type}
                                        name={el.name}
                                        placeholder={el.placeholder}
                                        onChange={el.set}

                                        style=
                                        {{
                                            padding: '.6em',
                                            outline: 'none',
                                            border: '2px solid rgb(200, 200, 200)',
                                            backgroundColor: 'transparent',
                                            borderRadius: '15px',
                                        }}
                                    />
                                </Form.Group>
                            )
                        })}

                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Button variant="outline-dark" onClick={handleRegisterClick}>Register</Button>
                        </div>


                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '25px' }}>
                            <h6>Already have an account? <Link to='/login'>Login</Link></h6>
                        </div>


                        <div style={{ justifyContent: 'center', alignItems: 'center', margin: '5%' }}>
                            <h4>Hello {userInput.username}</h4>
                            <h4>Your Email is: {userInput.email}</h4>
                            <h4>Your Password is: {userInput.password}</h4>
                        </div>

                    </Form>
                </div>
            </div>
        </>
    );
}
export default RegisterPage;
