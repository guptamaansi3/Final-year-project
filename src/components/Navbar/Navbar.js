import React from 'react';

const Navbar = () => {
  return(
    <div className='navbar'>
      <ul className='nav-list'>
        <li className='nav-list-item'><a href="/">HomePage</a></li>
        <li className='nav-list-item'><a href="/">Recipes</a></li>
        <li className='nav-list-item'><a href="/">Saved Recipes</a></li>
      </ul>
    </div>
  )
}

export default Navbar;