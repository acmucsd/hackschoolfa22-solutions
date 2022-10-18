import React from 'react';
import './style.css';

/**
 * Navbar component with buttons that link to pages.
 */
const Navbar = () => {
    return (
        <div className="navbar">
            <h1 className="title">
                Finance Buddy
            </h1>
            <div className="nav-buttons">
                <a href="/create">Create New Purchase</a>
                <a href="/view">View Purchase</a>
            </div>
        </div>
    );
};

export default Navbar;
