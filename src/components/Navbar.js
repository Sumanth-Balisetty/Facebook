import React from 'react';
import '../styles/Navbar.css'
import { FaFacebook,FaSearch } from 'react-icons/fa';
import { CgProfile } from "react-icons/cg";


const Navbar = () => {
  return (
    <div className='nav'>
      <div className='nav-bar'>
        <div className='left-nav'>
          <div> 
            <a className='fb'>Facebook<FaFacebook className="facebook-icon" /></a>
          </div>
           <div className='search'>
           <input
            type="text"
            className="search-bar"
            placeholder="Search ID"
          />
          <FaSearch className="search-icon" />
          </div> 
            
        </div>
        <div className='middle-nav'>
            <a>Home</a>
        </div>
        <div className='right-nav'>
            <a className='profile'><CgProfile/>Profile</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
