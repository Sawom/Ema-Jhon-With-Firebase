import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../Firebase/Firebase';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signInWithEmailAndPassword,user,loading,error] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();

    const handleEmail = (event)=>{
        setEmail(event.target.value);
    }
    const handlePassword = (event)=>{
        setPassword(event.target.value);
    }
    if(user){
        navigate('/shop');
    }

    const handleLogin = (event) =>{
        event.preventDefault()
        signInWithEmailAndPassword(email,password);
    }

    return (
        <div  >
            <br /><br />
            <h2 className='app' >Login here</h2>
            <div className='center'>  
             
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <br />
                     <Form.Label>Email address</Form.Label>
                    <Form.Control required  onBlur={handleEmail} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                     We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control required  onBlur={ handlePassword} type="password" placeholder="Password" />
                </Form.Group>
                <p>New to Ema-Jhon? <Link className='txt' to="/signup">Signup Here</Link>  </p>
                <p style={{color:"red"}}>{error?.message}</p>
                <Button variant="primary" type="submit">
                        Submit
                </Button>
                <br /> <br />
            </Form>
            </div>
            
        </div>
    );
};

export default Login;