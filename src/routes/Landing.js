import { Link } from "react-router-dom";
import {Nav,Container, Row, Col, Button } from 'react-bootstrap';
import pincnictable from '../media/pincnictable.jpeg';
import reddoor from '../media/redGallery.JPG';
import triangleglass from '../media/kaleidescope1.JPG';
import logotxt from '../media/logotxt.png';



// EVENT CALANDER AND DATES
const event1 = "pleasure island"



const link1 = "https://www.instagram.com/p/CoNgpbpuBTs/"
const eventdate1 = "feb 26th: 12pm-5pm"
const event1description = "Live Music and Shopping! Isreal Hogon solo Acoustic"
const event1address =  "@ Entrance on Fayette Side, 217 S Salina St, Syracuse, NY 13202"
/*
const event2 = "Ithaca Night Bazar!"
const link2 = "https://www.eventbrite.com/e/ithaca-night-bazaar-tickets-302363706987"
const eventdate2 = "sept 15th: 6pm-9pm"
const event2description = "Live Music, Burlesqe show, and Vendor Market"
const event2address = "@ Steamboat Landing , Ithaca, NY"
const event3 = "918.22 PRINT PARTY"
const link3 = "https://www.instagram.com/p/ChSlyQJOkAK/"
const eventdate3 = "sep 16th: 2pm-6pm"
const event3description = "2 days of printmaking partying with amazing artists, various demonstrations, merch, raffles and more."
const event3address = "@ 509 w Fayette St, Syracuse, NY"
const event4 = "A Trip To The Moon Art Market!"
const link4 = "https://www.instagram.com/p/ChR4jhxOLAN/"
const eventdate4 = "oct 8th: 2pm-7pm"
const event4description = "50+ Local artisan vendor's and Live Music!"
const event4address = "@ 100 college ave , Syracuse, NY"
*/


const Landing = () => (
  
    <div className="App" >
       
       <img src={logotxt}  className="navlink" alt=""/>
      
<div >
  <Container className="App2">
    <Row>
      <Col>
       <Nav.Link   as={Link} to={"./Archive"}>
        <h1 className="link1">Archive</h1>
      <img src={triangleglass}  className="navlink" alt=""/>
      </Nav.Link>
      </Col>
      <Col >
      <Nav.Link  as={Link} to={"./aboutus"}>
      <h1 className="link2" >About Us</h1>
      <img src={reddoor}  className="navlink" alt=""/>
      
      </Nav.Link>
      </Col>
      <Col>
      <Nav.Link  as={Link} to={"./Contact"}>
      <h1 className="link3">Contact</h1>
      <img src={pincnictable}  className="navlink" alt=""/>
      </Nav.Link>
      </Col>
      </Row>
      </Container>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
    <Container>
      <Row>
        <Col>
          
            <Col>
            <p>
                
                <br/><br/>
                <p className='Paragraph3'><h1>UPCOMING EVENTS:</h1><br/><br/>
                <h2><a className='event' href ={link1}>{event1}</a>
                 </h2>
               
                <p> <strong className='event'>{eventdate1}</strong>
                 {event1description}
                 <br/><a className='event' href="https://www.google.com/maps/place/Wildflowers+Armory/@43.0488507,-76.1537488,17z/data=!4m5!3m4!1s0x89d9f34e099a73db:0xa40e93f2737b53f1!8m2!3d43.048849!4d-76.1515637"> {event1address} </a></p>
                  {/* 
                 <p>   
                 <strong className='event'>{eventdate2}</strong>
                 <h2><a className='event' href={link2}>{event2}</a>
                 </h2> {event2description}<br/>{event2address} </p>
                 <br/><br/>
                
                <p> <strong className='event'>{eventdate3}<br></br>sept 17th: 12pm-4pm</strong>
                 <h2><a className='event' href ={link3}>{event3}</a>
                 </h2>{event3description} 
                 <br/> {event3address}</p><p> 
                   <strong className='event'>{eventdate4}</strong>
                 <h2><a className='event' href={link4}>{event4}</a>
                 </h2>{event4description}<br/> {event4address}</p>
                 */}
                 </p>
                
          
                
                 
                
                <br /><br /><Button href="https://www.etsy.com/Shop/HatchetPressShop" variant="primary" >Etsy Shop</Button>
              </p>
              
            </Col>
          
        </Col>
        </Row>
        </Container>
        </div>
      </div>
      
        
    <br/>
      
    </div>
    );
      
    export default Landing;