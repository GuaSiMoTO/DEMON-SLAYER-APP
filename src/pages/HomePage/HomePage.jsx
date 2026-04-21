import styles from "./HomePage.module.css";
import { NavLink } from 'react-router-dom';

export default function HomePage() {
  return (
    <main className="container">
      {/* ── Cabecera de la página ─────────────────────────────────────── */}
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>PERSONAJES DE DEMON SLAYER</h1>

        <p className={styles.heroSubtitle}>
          CONOCE A LOS HUMANOS Y A LOS DEMONIOS DE LA SERIE.<br></br>HAS UNA
          LISTA DE TUS FAVORITOS CON TU USUARIO.
        </p>

        <div className={styles["hero-image"]}>
          <img src="../../public/Tanjiro.png" alt="Tanjiro"></img>
          <img src="../../public/Nezuko.png" alt="Nezuko"></img>
          <img src="../../public/Inosuke.png" alt="Inozuke"></img>
          <img src="../../public/Zenitsu.png" alt="Zenitsu"></img>
        </div>

        <NavLink to="/characters">
          <button className={styles.button}>«Mientras vivas, la luz brillará nuevamente». – Tanjiro Kamado</button>
        </NavLink>
        
      </section>
    </main>
  );
}
