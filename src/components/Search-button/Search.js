import React from 'react';
import { Link } from 'react-router-dom';
import './Search.css';

const Search = () => {
  return(
    <div className='search-button'>
      <button className='button' >
      <Link to='/recipes'><span style={{color: 'white'}}>Search Recipes</span></Link></button>
    </div>
  )
}

export default Search;