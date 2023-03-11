
import Container from 'react-bootstrap/Container';
import logo from './media/logo.jpg';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

function OffcanvasExample() {
  return (
    <div>
      {[false].map((expand) => (
        <Navbar  key={expand} bg="" expand={expand} className="mb-3 ">
          <Container  fluid>
            <Navbar.Brand href="/"><img href="/" className="logo" alt=""src={logo}/></Navbar.Brand>
            <Navbar.Toggle className='colort'   aria-controls={` offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas 
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
              <img href="/" className="logo" src={logo} alt=""/>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  The Little Room
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3 ">
                  <Nav.Link href="/archive">Archive</Nav.Link>
                  <Nav.Link href="/aboutus">About Us</Nav.Link>
                  <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="/contact">Contact</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
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