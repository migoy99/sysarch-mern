import React from 'react'
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBarHome.jsx';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {

    const navigate = useNavigate();

    const [userInput, setUserInput] = useState({
        email: "",
        password: "",
    });

    const elements = [
        { name: "email", label: "Email", type: 'email', placeholder: 'example@email.com', set: function (e) { setUserInput({ ...userInput, [e.target.name]: e.target.value }) } },
        { name: "password", label: "Password", type: 'password', placeholder: '', set: function (e) { setUserInput({ ...userInput, [e.target.name]: e.target.value }) } },
    ]

    const handleLoginClick = (e) => {
        e.preventDefault();
        const loggedUser = JSON.parse(localStorage.getItem("user"));

        if(userInput.email === loggedUser.email && userInput.password === loggedUser.password){
            localStorage.setItem("loggedIn", true)
            navigate("/");
        }else{
            alert("Wrong Email or Password.");
        }
    }

    return (
        <>
            <NavBar />
            <div>
                <div style={{ display: 'flex', justifyContent: 'center', borderRadius: '35px', padding: '2%' }}>
                    <Form style={{ width: '400px', borderRadius: '35px', backgroundColor: 'rgba(0, 0, 0,  10%)', }}>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '5%' }}>
                            <h3>Login</h3>
                        </div>
                        {elements.map((el) => {
                            return (
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" style={{ margin: '5%' }}>
                                    <Form.Label>{el.label}</Form.Label>
                                    <Form.Control

                                        autoFocus={el.label === "Email"}
                                        type={el.type}
                                        placeholder={el.placeholder}
                                        onChange={el.set}
                                        name={el.name}

                                        style={{
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
                            <Button variant="outline-dark" onClick={handleLoginClick}>Login</Button>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '25px', marginBottom: '2%' }}>
                            <h6>Don't have an account? <Link to='/register'>Register</Link></h6>
                        </div>

                        <div style={{ justifyContent: 'center', alignItems: 'center', margin: '5%' }}>
                            <h4>Your Email is: {userInput.email}</h4>
                            <h4>Your Password is: {userInput.password}</h4>
                        </div>

                    </Form>
                </div>
            </div>
        </>
    )
}

export default LoginPage