import {Navbar,Nav,Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

import './App.css'

const Bar = () => {

    return (
      
      <div >
      {/*  <Outlet />*/}
      
      
<Navbar  className='navlab' collapseOnSelect expand="lg"  variant="light">

  <Container>
  

  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto navo">
      {/*<Nav.Link as={Link} to={"./menus"}>Features</Nav.Link>*/}
    
      < Nav.Link className='form3' as={Link} to={"./"}>
        Home
      </Nav.Link>
      
      <Nav.Link className='form3' as={Link} to={"./aboutus"}>
        About
      </Nav.Link>
      <Nav.Link className='form3' as={Link} to={"./galleries"}>
        Galleries
      </Nav.Link>
      <Nav.Link className='form3' as={Link} to={"./Shop"}>
        Shop
      </Nav.Link>
      <Nav.Link className='form3' as={Link} to={"./contact"}>
        Contact
      </Nav.Link>
    </Nav>
    {/*<Nav>
    <NavDropdown title="Packages and Pricing" id="collasible-nav-dropdown">
    
    <NavDropdown.Item as={Link} to={"./events"}>Gallery</NavDropdown.Item>
    <NavDropdown.Item as={Link} to={"./menus"}>Commisions</NavDropdown.Item>
   
 
    
  </NavDropdown>
    <Nav.Link as={Link} to={"./contact"}>
        CONTACT US
      </Nav.Link>
      <Nav.Link href="https://www.instagram.com/explore/locations/663473593807965/scratch-farmhouse-catering/"><i class="bi bi-instagram"></i></Nav.Link>
      <Nav.Link href="https://www.facebook.com/scratchfarmhousecatering/">
        <i class="bi bi-facebook"></i>
      </Nav.Link>
    </Nav>*/}
  </Navbar.Collapse>
  </Container>
</Navbar>

      </div>
    );
}

export default Bar;