import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "../../../public/demon-logo.png";

import { useUser } from "../../context/UserContext";

function Navbar() {
  const { user } = useUser();

  return (
    <nav className={styles.navbar}>
      {/* Logo */}
      <div className={styles.logo}>
        <NavLink to="/">
          <img src={logo} alt="Logo" className={styles.logoImg} />
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
        {/* Si existe user.name, muestra el span con el nombre */}
        {user?.name && <span className={styles.userName}>{user.name}</span>}
        <NavLink to="/user">
          <img
            className={user.name ? styles.imgActive : styles.img}
            src={user.name ? user.avatar : "/portrait.tanjiro.png"}
            alt="tanjiroUser"
          />
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
