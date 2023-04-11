import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";
//import { useNavigate } from "react-router-dom";

class navbarcall extends React.Component{
render(){
   return( 
          <Navbar bg="primary" variant="dark">
            <Container>
             <Navbar.Brand>Welcome</Navbar.Brand>
              <Nav className="me-auto">
              <NavLink to="/forms">Form</NavLink>
              <NavLink to="/apicall">API call</NavLink>
              <NavLink to="/hooks/riya">Hooks</NavLink>
          {/* <NavLink onClick={gotoPage}>Home</NavLink> */}
              </Nav>
            </Container>
          </Navbar>    
    );
  }
}
export default navbarcall;