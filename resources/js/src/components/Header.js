import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav className="container pt-5 pl-0">
            <ul className="nav mb-5">
                <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/add" className="nav-link">Add</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Header;
