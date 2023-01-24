
import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { NavbarBrand } from 'reactstrap';
// import './NavTitle.css';

function NavTitle() {
    return (
        <NavbarBrand>
            <Link smooth to="#home-section">COURTNEY ASHLEY FARZAM</Link>
        </NavbarBrand>
    )
}

export default NavTitle;