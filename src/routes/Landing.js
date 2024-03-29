import { Link } from "react-router-dom";
import { Nav, Container, Row, Col } from 'react-bootstrap';
import pincnictable from '../media/pincnictable.jpeg';
import reddoor from '../media/redGallery.JPG';
import triangleglass from '../media/kaleidescope1.JPG';

import logo from '../media/LRlogo.jpg';


// EVENT CALANDER AND DATES

const event1 = "The Fool's Variety Show"
const link1 = "https://www.instagram.com/p/Cpn-1TUOnNl/"
const eventdate1 = "April 1st: 7pm-11pm"
const event1description = "Local Artist Showcase, Performances, and More"
const event1address = "@ 200 S Geddes St, Syracuse, NY, United States, New York"
const event1addresslink = "https://www.google.com/maps/place/The+Little+Room/@43.0456975,-76.1713244,15z/data=!4m2!3m1!1s0x0:0x20d259a020af6c54?sa=X&ved=2ahUKEwii4dHCq9f9AhV4E1kFHdgoB1oQ_BJ6BAhAEAg"
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
    <Container>
    <h3 className="socialbox">
    
    <a className="socials" href="https://www.instagram.com/thelittleroomsyr/" target="_blank" rel="noopener noreferrer"><i class="bi bi-instagram"></i></a>
    
    <a className="socials" href="https://www.facebook.com/thelittleroomsyr/" target="_blank" rel="noopener noreferrer"><i class="bi bi-facebook"></i></a>
    
    
    </h3>
      <Row>
        <Col>
      
          <img className="colort" style={{
          }} src={logo} alt="" />
    
        </Col>
        <Col>
          <Nav.Link className="navlink " as={Link} to={"./Contact"}>
            <h1 className="link3">Contact</h1>
            <img className="colort2" src={pincnictable} alt="" />
      
          </Nav.Link>
        </Col>
        <Col></Col>
       
      </Row>

      <Row>
        <Col >



          <Nav.Link className="navlink " as={Link} to={"./Archive"}>
            <h1 className="link1">Archive</h1>
            <img className="colort2" src={triangleglass} alt="" />
          </Nav.Link>



        </Col>
        <Col>    <Nav.Link className="navlink" as={Link} to={"./aboutus"}>
          <h1 className="link2" >About Us</h1>
          <img className="colort2" src={reddoor} alt="" />

        </Nav.Link>
        </Col>
     
        <Col>
  
          <p className="eventscard">



            <p className='Paragraph3'><br /><br />
              <h3>UPCOMING EVENTS:</h3>
              <h2><a className='eventt' href={link1}>{event1}</a>
              </h2>

              <p> <strong className='event'>{eventdate1}</strong> <br />
                {event1description}
                <br /><a className='event' href={event1addresslink}> {event1address} </a></p>
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





          </p>
        </Col>


      </Row>

    </Container>







    <br />

  </div>
);

export default Landing;