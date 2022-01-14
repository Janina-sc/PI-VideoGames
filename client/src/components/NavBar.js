import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import styles from "./NavBar.css"


export default function NavBar() {
  return (
    <header className="navbar">
    <div >
      
      <nav>
        <ul className='list'>
          <li className='list-item'>
      <NavLink  to="/home" >Home </NavLink>
      
      <NavLink  to="/about">About</NavLink>

      <SearchBar/>
      
      
      </li>
      </ul>
      </nav>
      
    </div>
    </header>
  );
};