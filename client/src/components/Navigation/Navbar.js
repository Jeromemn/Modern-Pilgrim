import { Link } from "react-router-dom";
import LoginBtn from "../Buttons/LoginBtn"
import LogoutBtn from "../Buttons/LogoutBtn";
import SignupBtn from "../Buttons/SignupBtn";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styled from "styled-components";

const LinkStyle = styled(Link)`
text-decoration: none;
color: black;

`;



export default function NavTabs() {
  return (
    <>
    <Navbar bg="light" variant="light">
    <Container>
    <Nav className="me-auto">
        <LinkStyle to='/profile'>
          My Profile</LinkStyle>
          

        <LinkStyle to='/Review'>
          Submit a Voyage</LinkStyle>
      

          <LinkStyle to='/'>
          Explore</LinkStyle>


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

