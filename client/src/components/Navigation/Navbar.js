import { Link } from "react-router-dom";
import LoginBtn from "../Buttons/LoginBtn";
import LogoutBtn from "../Buttons/LogoutBtn";
import SignupBtn from "../Buttons/SignupBtn";
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import styled from "styled-components";
import Button from "../Buttons/Button";
import { useAuth0 } from "@auth0/auth0-react";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const NavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 2rem;
  gap: 1rem;
`;

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NavItem = styled.div``;

export default function NavTabs() {
  const { logout, loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    // <>
    <Nav>
      <NavBar>
        {isAuthenticated && (
          <>
            <NavItem>
              <StyledLink to="/profile">My Profile</StyledLink>
            </NavItem>
            <NavItem>
              <StyledLink to="/Review">Submit a Voyage </StyledLink>
            </NavItem>
          </>
        )}

        <NavItem>
          <StyledLink to="/">Explore</StyledLink>
        </NavItem>
      </NavBar>
      <NavBar>
        {!isAuthenticated && (
          <Button onClick={loginWithRedirect}> Login/ Sign up </Button>
        )}
        {isAuthenticated && <Button onClick={logout}> Logout </Button>}
      </NavBar>
    </Nav>

    // {/* <Navbar bg="light" variant="light">
    // <Container>
    // <Nav className="me-auto">
    //     <LinkStyle to='/profile'>
    //       My Profile</LinkStyle>

    //     <LinkStyle to='/Review'>
    //       Submit a Voyage</LinkStyle>

    //       <LinkStyle to='/'>
    //       Explore</LinkStyle>

    //     <Nav>
    //     <LoginBtn/>
    //     </Nav>

    //     <Nav>
    //       <LogoutBtn/>
    //     </Nav>
    //   </Nav>
    //   </Container>
    // </Navbar> */}
    // // </>
  );
}
