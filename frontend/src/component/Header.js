import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap'

function Header() {
  return (
    <div>
        <Navbar expand="lg" className="bg-color">
      <Container fluid>
        <Navbar.Brand className='nav-color' href="#">E-Ticaret</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <LinkContainer to="/">
                <Nav.Link className='nav-color'><i className="fa-solid fa-house"></i> Anasayfa</Nav.Link>
            </LinkContainer> 
            <LinkContainer to="/">
                <Nav.Link className='nav-color'><i className="fa-solid fa-basket-shopping"></i> Ürünler</Nav.Link>
            </LinkContainer> 
            <LinkContainer to="/about">
                <Nav.Link className='nav-color'><i className="fa-solid fa-address-card"></i> Hakkımızda</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/">
                <Nav.Link className='nav-color'><i className="fa-solid fa-user"></i> Giriş Yap</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/">
                <Nav.Link className='nav-color' href="#action2"><i className="fa-solid fa-user-plus"></i> Kayıt Ol</Nav.Link>
            </LinkContainer>
            
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Arayın..."
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Ara</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header