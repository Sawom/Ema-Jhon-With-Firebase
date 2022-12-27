import React from 'react';
import { Link } from 'react-router-dom';
import auth from '../../Firebase/Firebase';
import logo from '../../images/Logo.svg';
import { useAuthState } from 'react-firebase-hooks/auth';
import './Header.css';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () =>{
        signOut(auth);
    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/shop">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                {
                    user ?
                    <button onClick={handleSignOut}>Sign out</button>
                    :
                    <Link to="/login">Login</Link>
                }
                
                <Link to="/shipment">Shipment</Link>
            </div>
        </nav>
    );
};

export default Header;