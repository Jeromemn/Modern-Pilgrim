import { Link } from "react-router-dom";
import LoginBtn from "../Buttons/LoginBtn"
import LogoutBtn from "../Buttons/LogoutBtn";
import SignupBtn from "../Buttons/SignupBtn";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavTabs() {
  return (
    <>
    <Navbar bg="light" variant="light">
    <Container>
    <Nav className="me-auto">
        <Nav.Link to='/profile'>
          My Profile</Nav.Link>
          

        <Nav.Link to='/Review'>
          Submit a Voyage</Nav.Link>
      

          <Nav.Link to='/'>
          Explore</Nav.Link>


        <Nav>
        <LoginBtn/>
        </Nav>

        <Nav>
        <SignupBtn/>
        </Nav>
        
        <Nav>
          <LogoutBtn/>
        </Nav>
      </Nav>
      </Container>
    </Navbar>
    </>
  );
}

