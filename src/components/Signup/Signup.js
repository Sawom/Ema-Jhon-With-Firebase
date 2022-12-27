import React from 'react';
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState,useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../Firebase/Firebase';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [confirmpassword , setConfirmpassword] = useState('');
    
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);
    
    const handleEmail = (event)=>{
        setEmail(event.target.value);
    }
    const handlePassword = (event)=>{
        setPassword(event.target.value);
    }
    const handleConfirmpassword = (event)=>{
        setConfirmpassword(event.target.value);
    }

    if(user){
        navigate('/shop');
    }

    const handleCreateUser = (event)=>{
        event.preventDefault();
        if(password !== confirmpassword){
            setError("Your password did not match! ");
            return;
        }
        if(password.length < 6){
            setError("password must be 6 character longer. ");
            return;
        }
        createUserWithEmailAndPassword(email, password);
    }

    return (
        <div>
            <br /><br />
            <h2 className='app' >Signup here</h2>
            <div className='center'>  
             
            <Form onSubmit={handleCreateUser} >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <br />
                     <Form.Label>Email address</Form.Label>
                    <Form.Control required  onBlur={handleEmail} name="email"  type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                     We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control required  onBlur={handlePassword} name="password" type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control required  onBlur={handleConfirmpassword }  name="confirm-password"  type="password" placeholder="Confirm Password" />
                </Form.Group>
                <p style={{color: "red"}} >{error}</p>
                <Button variant="primary" type="submit">
                        Signup
                </Button>
                <br /> 
                <p>Already have an account? <Link className='txt' to="/login">Login Here</Link></p>
                <br />
            </Form>
            </div>
        </div>
    );
};

export default Signup;