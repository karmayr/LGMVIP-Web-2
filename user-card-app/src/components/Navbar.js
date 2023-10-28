// Navbar.js
import React from 'react';
import { Button, NavbarWrapper } from '../styles';

function Navbar({ onGetUsers }) {
    const navbarStyle = {
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    };

    const buttonStyle = {
        borderRadius: '10px',

    };

    return (
        <NavbarWrapper style={navbarStyle}>
            <div>API CALL</div>
            <Button style={buttonStyle} onClick={onGetUsers}>
                Get Users
            </Button>
        </NavbarWrapper>
    );
}

export default Navbar;
