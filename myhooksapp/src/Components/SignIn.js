import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function SignIn({user,setuser}) {
    const handlechange=(e)=>{
        setuser({...user,[e.target.name]:e.target.value});
    }
    const handlesubmit=(event)=>{
        event.preventDefault();
        setuser({...user,connected:true });
    }
  return (
   
      <Form onSubmit={handlesubmit} style={{width:"550px",margin:"auto"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control onChange={handlechange} type="email" 
        placeholder="Enter email"  
        value={user.email}
        name="email"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Name</Form.Label>
        <Form.Control  onChange={handlechange}type="text" placeholder="Name" value={user.name}
        name="name"/>
      </Form.Group>
    
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

  )
}

export default SignIn
