import React, { useState } from "react";
import OffcanvasExample from '../navbar';
import {Container, Row, Col } from 'react-bootstrap';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("https://glacial-garden-61233.herokuapp.com/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  
  
  
  return (
    
    <div className="App" >
      <OffcanvasExample/>
      <Container><Row><Col>
    
     
    <h1 className="">
    <h2 className="">The Little Room is currently looking for artists, vendors, 
    and collaboraters to participate in creating artistic opportunities for all. 
    Complete the below form to connect. </h2> 

    
    <form className="" onSubmit={handleSubmit}>
      <div  className="">
        <label className="" htmlFor="name">Name:
        <br/>
        <input className="" type="text" id="name" required />
        </label>
       
      </div>
      <div  className="">
        <label className="" htmlFor="email">Email:
        <br/>
        <input className="" type="email" id="email" required />
        </label>
       
      </div>
      <div  className="">
        <label className="" htmlFor="message">Message:
        <br/>
        <textarea className="" id="message" required />
        </label>
        
      </div>
      <button className="link1" type="submit">{status}</button>
    </form>
    <br/>
    <p> Come see the space</p>
    <p className="contactblock">The little room is located @ 200 S Geddes St, Syracuse, NY, United States, New York</p>
    <p className="contactblock"> Message us on Instagram or Facebook</p>
      <a href="https://www.facebook.com/thelittleroomsyr/" target="_blank" rel="noopener noreferrer"><i class="bi bi-facebook"></i></a>
      <a href="https://www.instagram.com/thelittleroomsyr/" target="_blank" rel="noopener noreferrer"><i class="bi bi-instagram"></i></a>
    </h1>
    
    </Col></Row></Container>
        </div>
        
  );
};

export default ContactForm;