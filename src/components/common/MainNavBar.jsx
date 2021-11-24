import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

function MainNavbar(props) {
  return (
    <Navbar bg='light' expand='xl'>
      <Container>
        <Navbar.Brand as={Link} to='/'>
          Demo App 2C
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link as={Link} to='/'>
              Home
            </Nav.Link>
            <NavDropdown title='Formik' id='basic-nav-dropdown'>
              <NavDropdown.Item as={Link} to='/formik-test'>
                Formik Basic
              </NavDropdown.Item>
              <NavDropdown.Item to='#'>Formik Component</NavDropdown.Item>
              <NavDropdown.Item to='#'>Formik Library</NavDropdown.Item>
              {/* <NavDropdown.Divider />
              <NavDropdown.Item href='#action/3.4'>
                Separated link
              </NavDropdown.Item> */}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

MainNavbar.propTypes = {};

export default MainNavbar;
