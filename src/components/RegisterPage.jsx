import React from 'react'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {

    const history = useNavigate();

    function handleClick() {
        history.push('./RegisterPage.jsx');
    }

    return (
        <>
            <Button variant="outline-dark" onClick={handleClick}>
                REGISTER PAGE
            </Button>
        </>
    )
}

export default RegisterPage