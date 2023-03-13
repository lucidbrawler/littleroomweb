import React, { useState } from "react";
import { Link } from "react-router-dom";
import {Nav } from 'react-bootstrap';
import logotxt from '../media/logotxt.png';
import '../App.css';

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
      <Nav.Link className="navlink" as={Link} to={"/"}>
      
      <img src={logotxt}  className="navlink" alt=""/>
      
      </Nav.Link>
    <div  style={{ display:'flex', justifyContent:'center'}} className="contact"> 
     
    <header className="">
    <p className="Paragraph3">The Little Room is currently looking for artists, vendors, and collaboraters of the community to help create opportunities. </p> 
    <form className="" onSubmit={handleSubmit}>
      <div  className="">
        <label className="Paragraph" htmlFor="name">Name:</label>
        <input type="text" id="name" required />
      </div>
      <div  className="">
        <label className="Paragraph" htmlFor="email">Email:</label>
        <input type="email" id="email" required />
      </div>
      <div  className="">
        <label className="Paragraph" htmlFor="message">Message:</label>
        <textarea id="message" required />
      </div>
      <button type="submit">{status}</button>
    </form>
    </header>
    </div>
    </div>
  );
};

export default ContactForm;