import React , { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "../../../public/demon-logo.png";

import { useUser } from "../../context/UserContext";

function Navbar() {
  const { user } = useUser();

  const [menuOpen, setMenuOpen] = useState(false); // para activar el menu hamburguesa

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
        {/* botón de menú hamburguesa escondido */}
        {/* <Lo crearemos con CSS. solo aparezca responsive en pantallas pequeñas */}
        <div className={`${styles["nav-menu-icon"]} ${menuOpen ? styles["menu-hidden"] : ""}` }
        onClick={() => setMenuOpen(true)} > 
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div>
           {/* Menu desplegable para móviles, inicialmente oculto, se mostrará al hacer clic en el ícono de menú hamburguesa */}
            <div className={`${styles["mobile-menu"]} ${menuOpen ? styles.active : ""}`}>

                <span className={styles["close-menu"]}
                onClick={() => setMenuOpen(false)}>X</span>
                
                <ul className={styles["mobile-nav-links"]}>
                    <li><NavLink to="/" onClick={() => setMenuOpen(false)}>HOME</NavLink></li>
                    <li><NavLink to="/chatbot" onClick={() => setMenuOpen(false)}>CHATBOT</NavLink></li>
                    <li><NavLink to="/characterlist" onClick={() => setMenuOpen(false)}>CHARACTERS</NavLink></li>
                    <li><NavLink to="/user" onClick={() => setMenuOpen(false)}>USER</NavLink></li>
                </ul>

            </div>
          
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
