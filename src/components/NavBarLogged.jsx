import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
// import LoginModal from './Modals/LoginModal.jsx'
// import RegisterModal from './Modals/LoginModal.jsx'

function NavScroll() {

    const navigate = useNavigate();

    const handleLogoutClick = () => {
        localStorage.removeItem("loggedIn");
        navigate("/login");
    }

    return (
        <Navbar bg="transparent" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">ReactJS</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1" >Home</Nav.Link>
                        <Nav.Link href="#action2">Link</Nav.Link>
                        <NavDropdown title="Link" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Customer Support</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                About us
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                FAQs
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search Something"
                            className="me-2"
                            aria-label="Search"
                            style={{ backgroundColor: 'transparent', border: 'none', color: '#fff', textColor: '#fff' }}
                        />


                        {/* <LoginModal />
                        <RegisterModal /> */}


                        <Button variant="outline-dark" onClick={handleLogoutClick}>Logout</Button>&nbsp;&nbsp;

                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavScroll;