import styles from "./CharacterCard.module.css";

// Función de las tarjetas de los personajes
export default function CharacterCard({ character }) {
  return (
    /* Usamos corchetes porque 'character-card' tiene un guion */
    <div className={styles["character-card"]}>
      <img src={character.img} alt={character.name} />

      <div className={styles.info}>
        <h2>{character.name}</h2>

        <p>
          {/* condición por si age viene vacío no lo muestre */}
          {character.race}
          {character.age && (
            <>
               {" "}   {/*espacio entre race y age */}
              | <strong>Age:</strong> {character.age} 
            </>
          )}
        </p>

        <p className={styles.description}>{character.description}</p>

        <blockquote className={styles.quote}>"{character.quote}"</blockquote>
      </div>
    </div>
  );
}
