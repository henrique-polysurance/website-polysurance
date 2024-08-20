import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import * as FaIcons from "react-icons/fa";
import '../styles/Navbar.css';

function Navbar() {
  const [options, setOptions] = useState(true);
  const [button, setButton] = useState(true);
  const [list, setList] = useState(false);
  const minWidth = 860;

  const buttonsWorkflow = () => {
    if (window.innerWidth <= minWidth) {
      setButton(false);
      setOptions(false);
      setList(true);
    } else {
      setButton(true);
      setOptions(true);
      setList(false);
    }
  };

  window.addEventListener('resize', buttonsWorkflow);

  return (
    <>
      <nav className='navbar'>
        <Link to="/">
          rooya
        </Link>
        {options && <ul>
          <li className='nav-item'>
            <Link to='/about-us'>
              About Us
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/solutions'>
              Solutions
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/tech'>
              Tech
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/drivers-app'>
              Driver's app
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/support'>
              Support
            </Link>
          </li>
        </ul>}
        {button && <Button buttonStyle='btn--primary'>Book a demo</Button>}
        {list && <FaIcons.FaBars style={{ cursor: "pointer", color: "purple" }} />}
      </nav>
    </>
  )
}

export default Navbar;
