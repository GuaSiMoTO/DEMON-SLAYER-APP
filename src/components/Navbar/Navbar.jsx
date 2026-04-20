import React from "react";
import { NavLink } from 'react-router-dom';
import styles from "./Navbar.module.css";
import logo from "../../../public/demon-logo.png"

function Navbar() {
  return (
    <nav className={styles.navbar}>
      {/* Logo */}
      <div className={styles.logo}>
        <NavLink to="/">
          <img src={ logo } alt="Logo" className={styles.logoImg} />
        </NavLink>
      </div>

      {/* MENÚ */}
      <ul className={styles.menu}>
        <li>
          <NavLink to="/">INICIO</NavLink>
        </li>
        <li>
          <NavLink to="/search">BUSCAR</NavLink>
        </li>
        <li>
          <NavLink to="/characters">PERSONAJES</NavLink>
        </li>
      </ul>

    </nav>
  );
};

export default Navbar;