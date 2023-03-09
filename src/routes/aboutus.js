import aboutus from '../media/aboutus.png';
import logotxt from '../media/logotxt.png';
import reddoor from '../media/redGallery.JPG';
import { Link } from "react-router-dom";
import {Nav,Container, Row, Col } from 'react-bootstrap';

const Aboutus = () => (
  <div className="App">
    <Container><Row><Col>
    <div  >

    
    <Nav.Link  as={Link} to={"/"}>
      
      <img src={logotxt}  className="navlink" alt=""/>
      
      </Nav.Link>
       
      <img src={aboutus}  className="" alt=""/>
      <img src={reddoor}  className="navlink" alt=""/>
    </div>
    
    </Col>
    <Col>
    <div className='par2'>
    <h2> created by artists</h2>
      <p >We host events and multi-disciplinary programming in our gallery space.</p>
    <p>Our programming provides opportunities for the community to come together around artists sharing their work. Our mission is to promote the arts as a means to create more joy!</p>
    <p>Sometimes you just need <strong>a little room</strong> to make a big impact!</p>
    </div>
    <div className="par">
    <p className="">
              <h2>The "Venue"</h2>
                Welcome!<br/><br/> <p>The Little Room originates from our brick and mortor space
      that is in fact a very small room. We have modeled the space to look and feel like an art gallery.
    </p>
    <p>Beyond this small room we offer events and programming in other ares inside and outside the Grear Factory as well as throughout the Syracuse area.<strong>a little room</strong> to make a big impact!</p>
                </p>
  <p> The Little Room is a community arts organization</p>
  
    </div>
    </Col></Row></Container>
   
    
    </div>
    );
      
    export default Aboutus;