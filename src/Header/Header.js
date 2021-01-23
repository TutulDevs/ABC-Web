import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

const header = () => {
  const color = {
    color: "red",
  };

  return (
    <header className='Header'>
      <div className='container'>
        {/* Logoooooooooo */}
        <h2 className='Logo'>💎</h2>
        {/* Linksssssssssssssss */}
        <nav>
          <ul>
            <li>
              <NavLink to='/' exact activeClassName='active'>
                Home
              </NavLink>
              <NavLink to='/services'>Services</NavLink>
              <NavLink to='/testimonial'>Testimonial</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default header;
