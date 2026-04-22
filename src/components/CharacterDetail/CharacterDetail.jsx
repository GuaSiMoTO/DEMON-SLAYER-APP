import styles from "./CharacterDetail.module.css";
import { useNavigate } from "react-router-dom"; // lo usaremos solo en el button BACK

// Función de las tarjetas de los personajes
export default function CharacterDetail({ character }) {
  const navigate = useNavigate(); // Inicializamos la función para usar en el button BACK
  return (
    /* Usamos corchetes porque 'character-card' tiene un guion */
    <div className={styles["character-detail"]}>
      <img src={character.img} alt={character.name} />

      <div className={styles.info}>
        <h1>{character.name}</h1>

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
      <button className={styles.button} onClick={()=>navigate(-1)}>BACK</button>
    </div>
  );
}
