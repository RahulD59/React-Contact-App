import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>

    <nav className='navbar navbar-expand-lg navbar-dark bg-dark py-2'>
    <Link to="/" className='navbar-brand ml-5'>Contacts App</Link>
    {/* <ul className='navbar'>
      <li className='nav-item'>
        
      </li>
    </ul> */}
    </nav>
    </div>
  
  )
}

export default NavBar