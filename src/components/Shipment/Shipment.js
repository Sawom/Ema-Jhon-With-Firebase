import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase';

const Shipment = () => {
    const [user] = useAuthState(auth);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    // const navigate = useNavigate();

    const handleNameBlur = event =>{
        setName(event.target.value);
    }

    const handleAddressBlur = event =>{
        setAddress(event.target.value);
    }

    const handlePhoneBlur = event =>{
        setPhone(event.target.value);
    }

    const handleCreateUser = event =>{
        event.preventDefault();
        const shipping = {name, email, address, phone};
        console.log(shipping);
    }

    return (
        <div>
            <br /><br />
            <h2 className='app' >Shipment</h2>
            <div className='center'>  
             
            <Form onSubmit={handleCreateUser} >
                <br />
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Name</Form.Label>
                    <Form.Control onBlur={handleNameBlur} required  name="name" type="text" placeholder="Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                     <Form.Label>Email address</Form.Label>
                    <Form.Control required value={user?.email} readOnly name="email"  type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                     We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Address</Form.Label>
                    <Form.Control required  onBlur={handleAddressBlur} name="address" type="text" placeholder="Address" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Phone no</Form.Label>
                    <Form.Control required  onBlur={handlePhoneBlur} name="phoneno" type="number" placeholder="Phone no" />
                </Form.Group>
                 <p style={{color: 'red'}}>{error}</p>
                <Button variant="primary" type="submit">
                        Add Shipping
                </Button>
                <br /> <br />
            </Form>
            </div>
        </div>
    );
};

export default Shipment;