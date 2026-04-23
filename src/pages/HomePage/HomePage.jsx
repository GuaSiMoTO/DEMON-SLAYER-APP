import styles from "./HomePage.module.css";
import { NavLink } from 'react-router-dom';
// importo las iamgenes de public
import tanjiro from '/public/Tanjiro.png';
import nezuko from '/public/Nezuko.png';
import inosuke from '/public/Inosuke.png';
import zenitsu from '/public/Zenitsu.png';

export default function HomePage() {
  return (
    <main className="container">
      {/* ── Cabecera de la página ─────────────────────────────────────── */}
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>DEMON SLAYER'S CHARACTERS</h1>

        <p className={styles.heroSubtitle}>
            DISCOVER THE HUMANS AND DEMONS OF THE SERIE.<br></br>BUILD YOUR OWN FAVORITES LIST USING YOUR USER PROFILE.
        </p>

        <div className={styles["hero-image"]}>
          <img src={tanjiro} alt="Tanjiro"></img>
          <img src={nezuko} alt="Nezuko"></img>
          <img src={inosuke} alt="Inozuke"></img>
          <img src={zenitsu} alt="Zenitsu"></img>
        </div>

        <NavLink to="/characterlist">
          <button className={styles.button}>LET'S GO</button>
        </NavLink>
        
      </section>
    </main>
  );
}
