// pages/CharacterListPage/CharacterListPage.jsx
import { useEffect, useContext } from "react"; 
import { useParams } from "react-router-dom";
import { CharacterContext } from "../../context/CharacterContext"; // Importamos el Contexto
import useCharacterSearch from "../../hooks/useCharacterSearch"; 
import CharacterDetail from "../../components/CharacterDetail/CharacterDetail";
import styles from "./CharacterDetailPage.module.css";

export default function CharacterDetailPage() {
  const { name } = useParams(); // Extraemos 'name' de la URL
  // Extraemos los DATOS del Contexto
  const { characters, loading, error } = useContext(CharacterContext);
  // Extraemos la ACCIÓN (función) del Hook
  const { search } = useCharacterSearch();

  useEffect(() => {
    // Llamamos a la API usando el nombre como filtro
    if (name ) {
    search({ name: name  });
}
  }, [name, search]);

   // Como la API devuelve un array, cogemos el primer resultado
  const character = characters[0];
  
  if(!character) return <p>CHARACTER NO FOUND EN CharacterDetail.jsx</p>

  return (
    <main className={styles.CharacterDetailPage}>
      <div className={styles.container}>
        
        {loading && (
          <div className={styles["loading-container"]}>
            <img src="/demon-logo.png" alt="Cargando" className={styles["loading-img"]} />
            <p>LOADING...</p>
          </div>
        )}

        {!loading && !error && (
          <>
            <div className={styles["list-container"]}>
                <CharacterDetail key={character.id} character={character} />
            </div>


          </>
        )}

        {error && <p className={styles.error}>{error}</p>}
      </div>
    </main>
  );
}