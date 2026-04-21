import styles from "./HomePage.module.css";
import { NavLink } from 'react-router-dom';

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
          <img src="../../public/Tanjiro.png" alt="Tanjiro"></img>
          <img src="../../public/Nezuko.png" alt="Nezuko"></img>
          <img src="../../public/Inosuke.png" alt="Inozuke"></img>
          <img src="../../public/Zenitsu.png" alt="Zenitsu"></img>
        </div>

        <NavLink to="/characterlist">
          <button className={styles.button}>LET'S GO</button>
        </NavLink>
        
      </section>
    </main>
  );
}
