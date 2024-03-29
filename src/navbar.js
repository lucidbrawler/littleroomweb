
import Container from 'react-bootstrap/Container';
import logo from './media/LRlogo.jpg';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Offcanvas from 'react-bootstrap/Offcanvas';

function OffcanvasExample() {
  return (
    <div>
      {[false].map((expand) => (
        <Navbar  key={expand} bg="" expand={expand} className="mb-3 ">
          <Container  fluid>
            <Navbar.Brand href="/"><img className="logo" src={logo}  alt=""/></Navbar.Brand>
            <Navbar.Toggle className=''   aria-controls={` offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas 
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
              <a href="/"><img  className="logo" src={logo} alt=""/></a>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  The Little Room
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3 ">
                  <Nav.Link href="/archive">Archive</Nav.Link>
                  <Nav.Link href="/aboutus">About Us</Nav.Link>
                  <Nav.Link href="/contact">Contact</Nav.Link>
                  
                </Nav>
               
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
   </div>
  );
}

export default OffcanvasExample;