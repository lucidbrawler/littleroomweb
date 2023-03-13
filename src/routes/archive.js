import Archiveslides from "./archiveslides";
import logotxt from '../media/logotxt.png';
import { Link } from "react-router-dom";
import {Nav,Container, Row, Col } from 'react-bootstrap';
const Archive = () => (
  
    <div className="App" >
       <Container><Row><Col>
    <Nav.Link className="navlink" as={Link} to={"/"}>
      
      <img src={logotxt}  className="navlink" alt=""/>
      
      </Nav.Link>
      </Col><Col>
    <div className="par">
    <p className="">
      <h2>A Flexible Events Organization</h2>
              <h3>The "Venue"</h3>
                <br/><br/> <p>The Little Room originates from our brick and mortor space
      that is in fact a very small room. We have modeled the space to look and feel like an art gallery.
    </p>
    <p>Beyond this small room we offer events and programming in other areas inside and outside the Gear Factory as well as throughout the Syracuse area.</p>
                </p>

  
    </div>
    </Col>
    </Row>
    </Container>
      <Archiveslides/>
    </div>
    );
      
    export default Archive;