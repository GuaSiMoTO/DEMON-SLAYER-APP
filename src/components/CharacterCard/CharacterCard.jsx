import styles from "./CharacterCard.module.css";
import { useNavigate } from "react-router-dom"; // Importamos el hook de navegación

// Función de las tarjetas de los personajes
export default function CharacterCard({ character }) {
  const navigate = useNavigate();
  
  const handleClick = () => {
    // Al hacer click, navegamos a la ruta de detalle pasando el nombre
    // Usamos encodeURIComponent por si el nombre tiene espacios o caracteres especiales
    navigate(`/characterdetail/${character.name}`);
  };

  return (
    /* Usamos corchetes porque 'character-card' tiene un guion */
    <div className={styles["character-card"]} onClick={handleClick}>
      
      <img src={character.img} alt={character.name} />

      <div className={styles.name}>
        <h2>{character.name}</h2>
      </div>
      
    </div>
  );
}
