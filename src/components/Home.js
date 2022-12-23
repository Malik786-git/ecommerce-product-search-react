import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { NavLink } from 'react-router-dom';

const Home = () => {
  
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const handleForm = (e)=>{
        e.preventDefault();
        if (
        name !== '' && password !== '' &&
        name !== undefined && password !== undefined &&
        name !== null && password !== null &&
        name.length > 0  && password.length > 0       
        ) 
        {
            localStorage.setItem("userName", name);
        }else{
            alert('plz fill the form')
        }
    }


  return (
    <div>
       <Form className='home-form'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>User Name</Form.Label>
        <Form.Control 
        value={name} 
        onChange={(e)=> setName(e.target.value)}
        type="text" 
        placeholder="Enter Name" />
      </Form.Group>
      

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control 
        value={password} 
        onChange={(e)=> setPassword(e.target.value)}
        type="password" 
        placeholder="Password" />
      </Form.Group>
     
     
       <button type="submit" className="btn" onClick={handleForm}>
          <NavLink  className="btn btn-primary" to="/welcome">
            Submit
          </NavLink>
        </button>
    </Form>
    </div>
  )
}

export default Home
