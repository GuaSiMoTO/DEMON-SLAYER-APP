import styles from "./HomePage.module.css";
import { NavLink } from 'react-router-dom';
// importo las iamgenes de public
import tanjiro from '/public/Tanjiro.png';
import nezuko from '/public/Nezuko.png';
import inosuke from '/public/Inosuke.png';
import zenitsu from '/public/Zenitsu.png';

import { useNavigate } from "react-router-dom"; // Importamos el hook de navegación

export default function HomePage() {

const navigate = useNavigate();

  return (
    <main className="container">
      {/* ── Cabecera de la página ─────────────────────────────────────── */}
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>DEMON SLAYER'S CHARACTERS</h1>

        <p className={styles.heroSubtitle}>
            DISCOVER THE HUMANS AND DEMONS OF THE SERIE.<br></br>CREATE YOUR AVATAR TO ACCESS CONTENT.
        </p>

        <div className={styles["hero-image"]}>
          <img src={tanjiro} alt="Tanjiro" onClick={() => navigate(`/characterdetail/${"tanjiro"}`)}></img>
          <img src={nezuko} alt="Nezuko" onClick={() => navigate(`/characterdetail/${"nezuko"}`)}></img>
          <img src={inosuke} alt="Inozuke" onClick={() => navigate(`/characterdetail/${"inosuke"}`)}></img>
          <img src={zenitsu} alt="Zenitsu" onClick={() => navigate(`/characterdetail/${"Zenitsu"}`)}></img>
        </div>

        <NavLink to="/characterlist">
          <button className={styles.button}>LET'S GO</button>
        </NavLink>
        
      </section>
    </main>
  );
}
