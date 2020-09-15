import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <ul className="nav-link">
                <Link to='/About'>
                    <li>About</li>
                </Link>
                <Link to='/Information'>
                    <li>Information</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav;

