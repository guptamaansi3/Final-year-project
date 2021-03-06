import React from 'react';
/*import { NavLink } from 'react-router-dom';*/
import './Footer.css';

const Footer = () =>{
  return(
    <div className='footer'>
      <div className='footer-wrapper'>
        <img className='footer-pic' src='assets/green-food.png' alt='leaf' />
        <div className='footer-column-1'>
          <h2 className='footer-logo'>Recipe Curl</h2>
          <p className='footer-para'>uses the awesome Edamam API<br />
           for recipes and nutrition data.</p>
           <p className='copyright'>Copyright <img className='copyright' src='assets/copyright.svg' alt='copyright'/> Maansi Gupta</p>
        </div>
        <div className='footer-column-2'>
          <h2 className='footer-logo'>Recipe Curl</h2>
          <ul className='footer-list-1'>
            <li><a href='/'>Home</a></li>
            <li><a href='/'>Saved Recipes</a></li>
            <li><a href='/'>All Recipes</a></li>
          </ul>
        </div>
        <div className='footer-column-3'>
          <h2 className='name'>Maansi Gupta</h2>
          <ul className='footer-list-2'>
            <li><a href='/'>Linkedin</a></li>
            <li><a href='/'>Instagram</a></li>
            <li><a href='/'>Github</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer;