import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return(
    <div className='navbar'>
      <div className='left-nav-content'>Logo</div>
      <div className='right-nav-content'>
        <ul className='nav-links'>
          <li><a href='#'>HomePage</a></li>
          <li><a href='#'>Recipes</a></li>
          <li><a href='#'>Saved Recipes</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;