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
    <div  style={{ display:'flex', justifyContent:'center'}} className="contact"> 
     
    <h1 className="">
    <h2 className="Paragraph3">The Little Room is currently looking for artists, vendors, 
    and collaboraters of the community to help create opportunities. </h2> 
    <form className="" onSubmit={handleSubmit}>
      <div  className="">
        <label className="par" htmlFor="name">Name:</label>
        <br/>
        <input type="text" id="name" required />
      </div>
      <div  className="">
        <label className="par" htmlFor="email">Email:</label>
        <br/>
        <input type="email" id="email" required />
      </div>
      <div  className="">
        <label className="par" htmlFor="message">Message:</label>
        <br/>
        <textarea id="message" required />
      </div>
      <button className="link1" type="submit">{status}</button>
    </form>
    
      <a href="https://www.facebook.com/thelittleroomsyr/" target="_blank" rel="noopener noreferrer"><i class="bi bi-facebook"></i></a>
      <a href="https://www.instagram.com/thelittleroomsyr/" target="_blank" rel="noopener noreferrer"><i class="bi bi-instagram"></i></a>
    </h1>
    </div>
    </Col></Row></Container>
        </div>
  );
};

export default ContactForm;