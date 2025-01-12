import React from "react";
import { Link } from "react-router-dom";
import style from './NavBarImpl.module.css';


function NavBarImpl() {
  return (
    <nav className="bg-gray-800 p-1">
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className={style.navText}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/portfolio" className={style.navText}>
            Portfolio
          </Link>
        </li>
        <li>
          <Link to="/contact" className={style.navText}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBarImpl;
