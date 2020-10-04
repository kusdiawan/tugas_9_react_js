import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, NavDropdown } from 'react-bootstrap';

function PageNavbar(){
	return(
		<>
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Akses Sport</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Berita</Nav.Link>
      <Nav.Link href="#pricing">Live Scores</Nav.Link>
      <NavDropdown title="Piala & Liga" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#"> Liga Priemer Inggris </NavDropdown.Item>
          <NavDropdown.Item href="#"> Serie A </NavDropdown.Item>
          <NavDropdown.Item href="#"> Divisi Pamiera </NavDropdown.Item>
          <NavDropdown.Item href="#"> Bundes Liga </NavDropdown.Item>
          <NavDropdown.Item href="#"> Liga 1 Indonesia </NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#pricing">Transfer Pemain</Nav.Link>
      <Nav.Link href="#pricing">Tim</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
		
    </>
		)
}

export default PageNavbar;