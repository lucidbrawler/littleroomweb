import Archiveslides from "./archiveslides";
import Archiveslides2 from "./archiveslides2";
import logotxt from '../media/logotxt.png';
import { Link } from "react-router-dom";
import {Nav,Container, Row, Col } from 'react-bootstrap';
const Archive = () => (
  
    <div className="App" >
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