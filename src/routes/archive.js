import Archiveslides from "./archiveslides";
import Archiveslides2 from "./archiveslides2";
import OffcanvasExample from '../navbar';
import {Container, Row, Col } from 'react-bootstrap';


const Archive = () => (
  
    <div className="App" >
      <OffcanvasExample/>
       <Container>
        <Row>
          <Col>
            <Archiveslides/>
          </Col>
          <Col>
            <Archiveslides2/>
          </Col>
        </Row>
      </Container>
      
    </div>
    );
      
    export default Archive;