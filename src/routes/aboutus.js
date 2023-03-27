import aboutus from '../media/aboutus.png';

import reddoor from '../media/redGallery.JPG';

import {Container, Row, Col } from 'react-bootstrap';
import OffcanvasExample from '../navbar';
const Aboutus = () => (
  <div className="App">
     <OffcanvasExample/>
    <Container><Row><Col>
    <div  >

    
  
       
      <img src={aboutus}  className="" alt=""/>
      <img src={reddoor}  className="navlink" alt=""/>
    </div>
 
    </Col>
    <Col>
    <div className='par2'>
      <h2>The Little Room is a community arts organization</h2>
    <h3> created by artists</h3>
      <p >We host events and multi-disciplinary programming in our gallery space.</p>
    <p>Our programming provides opportunities for the community to come together around artists sharing their work. Our mission is to promote the arts as a means to create more joy!</p>
    <p>Sometimes you just need <strong>a little room</strong> to make a big impact!</p>
    </div>
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
    </Col></Row></Container>
   
    
    </div>
    );
      
    export default Aboutus;