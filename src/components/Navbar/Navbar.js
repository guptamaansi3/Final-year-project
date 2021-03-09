import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return(
    <div className='navbar'>
      <ul className='nav-list'>
        <li className='nav-list-item'><NavLink exact activeClassName='active_class' to='/'>HomePage</NavLink></li>
        <li className='nav-list-item'><NavLink exact activeClassName='active_class' to='/recipes'>Recipes</NavLink></li>
        <li className='nav-list-item'><NavLink exact activeClassName='active_class' to='/saved-recipes'>SavedRecipes</NavLink></li>
      </ul>
    </div>
  )
}

export default Navbar;