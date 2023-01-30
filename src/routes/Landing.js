import { Link } from "react-router-dom";
import {Nav,Container, Row, Col } from 'react-bootstrap';
import pincnictable from '../media/pincnictable.jpeg';
import reddoor from '../media/redGallery.JPG';
import triangleglass from '../media/kaleidescope1.JPG';
import logotxt from '../media/logotxt.png';
const Landing = () => (
  
    <div className="App" >
       
       <img src={logotxt}  className="navlink" alt=""/>
      
<div >
  <Container className="App2">
    <Row>
      <Col>
       <Nav.Link className='form3' as={Link} to={"./Archive"}>
        <h1>Archive</h1>
      <img src={triangleglass}  className="navlink" alt=""/>
      </Nav.Link>
      </Col>
      <Col>
      <Nav.Link className='form3' as={Link} to={"./aboutus"}>
      <h1>About Us</h1>
      <img src={reddoor}  className="navlink" alt=""/>
      </Nav.Link>
      </Col>
      <Col>
      <Nav.Link className='form3' as={Link} to={"./Contact"}>
      <h1>Contact</h1>
      <img src={pincnictable}  className="navlink" alt=""/>
      </Nav.Link>
      </Col>
      </Row>
      </Container>
      </div>
      
        
    <br/>
      
    </div>
    );
      
    export default Landing;