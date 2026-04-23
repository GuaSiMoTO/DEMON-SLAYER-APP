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
          <NavLink to="/">HOME</NavLink>
        </li>
        <li>
          <NavLink to="/chatbot">DEMON SLAYER CHAT</NavLink>
        </li>
        <li>
          <NavLink to="/characterlist">CHARACTERS</NavLink>
        </li>
      </ul>


      {/* USER */}
      <div className={styles.user}>
        <span>USER</span>
      </div>

    </nav>
  );
};

export default Navbar;