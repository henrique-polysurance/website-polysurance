import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
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
        <Link to="/" className="navbar-link">
          rooya
        </Link>
        {options &&
          <ul className='ul'>
            <li className='nav-item'>
              <NavLink to='/solutions' className="navbar-link">
                Solutions
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/tech' className="navbar-link">
                Tech
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/drivers-app' className="navbar-link">
                Driver's app
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/support' className="navbar-link">
                Support
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/about-us' className="navbar-link">
                About Us
              </NavLink>
            </li>
          </ul>
        }
        {button && <Button color="white" path="/sign-up">Book a demo</Button>}
        {list && <FaIcons.FaBars style={{ cursor: "pointer", color: "white" }} />}
      </nav>
    </>
  )
}

export default Navbar;
