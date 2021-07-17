import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
	<nav>
        <ul>
            <li><NavLink to="/" exact>Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/favourites">Favourites</NavLink></li>
        </ul>
	</nav>
);

export default NavBar;