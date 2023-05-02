import React from 'react'
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBarHome.jsx';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';


function RegisterPage() {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");


    // const [myName, setMyName] = useState('')
    // const [myAge, setMyAge] = useState(0)
    // const [like, setLike] = useState(true)

    // function handleClickAddThreeAge(){
    //     setMyAge(myAge => myAge+1);
    //     setMyAge(myAge => myAge+1);
    //     setMyAge(myAge => myAge+1);
    //     //adds 3 per click
    // }
    // function handleClick(){
    //     setMyAge(myAge+1);
    // }

    // function handleChange(e){
    //     setMyName(e.target.value);
    // }

    // function handleCheck(e){
    //     setLike(e.target.checked)
    // }


    const [book, setBook] = useState({
        title: '',
        date: '',
        author: {
            firstname: '',
            lastname: '',
        }
    });

    function handleTitleChange(e) {
        setBook({ ...book, title: e.target.value });
    };
    function handleDateChange(e) {
        setBook({ ...book, date: e.target.value });
    };
    function handleAuthorFirstChange(e) {
        setBook({
            ...book,
            author: {
                ...book.author,
                firstname: e.target.value
            }
        });
    };
    function handleAuthorLastChange(e) {
        setBook({
            ...book,
            author: {
                ...book.author,
                lastname: e.target.value
            }
        });
    };


    const elements = [
        { label: "Username", type: 'text', placeholder: 'Type in your username', set: function (e) { setName(e.target.value) } },
        { label: "Email", type: 'email', placeholder: 'example@email.com', set: function (e) { setEmail(e.target.value) } },
        { label: "Password", type: 'password', placeholder: '', set: function (e) { setPassword(e.target.value) } },
    ]

    return (
        <>
            <NavBar />

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: '300px', marginLeft: '300px' }}>
                <Form style={{ width: '40%' }}>

                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <h4>Register</h4>
                    </div>

                    {elements.map((el) => {
                        return (
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>{el.label}</Form.Label>
                                <Form.Control
                                    autoFocus={el.label === "Username"}
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
                        <Button variant="outline-dark">Register</Button>
                    </div>


                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '25px' }}>
                        <h6>Already have an account? <Link to='/login'>Login</Link></h6>
                    </div>


                    <div style={{ justifyContent: 'center', alignItems: 'center', marginTop: '25px' }}>
                        <h3>Hello {name}</h3>
                        <h3>Your Email is: {email}</h3>
                        <h3>Your Password is: {password}</h3>
                    </div>

                </Form>
            </div>

            {/* <input value={myName} onChange={handleChange}></input>
            <button onClick={handleClick}>Add Age</button>
            <button onClick={handleClickAddThreeAge}>Add 3 to aAge</button>
            <p>Your name is {myName} and you are {myAge} years old..</p>
            <input type="checkbox" checked={like} onChange={handleCheck}></input>
            <p>You {like ? 'like' : 'dont like'} chicken</p> */}


            <p>BOOKS</p>
            <label>Title: <input value={book.title} onChange={handleTitleChange} /></label>
            <label>Date: <input value={book.date} onChange={handleDateChange} /></label>
            <label>Author First name: <input value={book.author.firstname} onChange={handleAuthorFirstChange} /></label>
            <label>Author Last name: <input value={book.author.lastname} onChange={handleAuthorLastChange} /></label>

            <p>Book title: {book.title}</p>
            <p>Book date release: {book.date}</p>
            <p>Book Author: {book.author.firstname} {book.author.lastname}</p>


        </>
    );
}
export default RegisterPage;
