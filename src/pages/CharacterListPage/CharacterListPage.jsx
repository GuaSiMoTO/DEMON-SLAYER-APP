// pages/CharacterListPage/CharacterListPage.jsx
import { useState, useEffect, useContext } from "react"; 
import { CharacterContext } from "../../context/CharacterContext"; // Importamos el Contexto
import useCharacterSearch from "../../hooks/useCharacterSearch"; 
import CharacterCard from "../../components/CharacterCard/CharacterCard";
import styles from "./CharacterListPage.module.css";

export default function CharacterListPage() {
  // Extraemos los DATOS del Contexto
  const { characters, totalPages, loading, error } = useContext(CharacterContext);
  
  // Extraemos la ACCIÓN (función) del Hook
  const { search } = useCharacterSearch();

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    search({ page: currentPage });
  }, [currentPage, search]);

  // Lógica para los números de la paginación (Se queda igual)
  const renderPageNumbers = () => {
    const pages = [];
    const range = 2;
    for (
      let i = Math.max(1, currentPage - range);
      i <= Math.min(totalPages, currentPage + range);
      i++
    ) {
      pages.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          className={currentPage === i ? `${styles.button} ${styles.active}` : styles.button}
        >
          {i}
        </button>,
      );
    }
    return pages;
  };

  return (
    <main className={styles.CharacterListPage}>
      <div className={styles.container}>
        
        {loading && (
          <div className={styles["loading-container"]}>
            <img src="/demon-logo.png" alt="Cargando..." className={styles["loading-img"]} />
            <p>LOADING CHARACTERS...</p>
          </div>
        )}

        {!loading && !error && (
          <>
            <div className={styles["list-container"]}>
              {characters.map((char) => (
                <CharacterCard key={char.id} character={char} />
              ))}
            </div>

            <div className={styles["pagination-wrapper"]}>
              <div className={styles.pagination}>
                <button
                  className={styles.button}
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((prev) => prev - 1)}
                >
                  &lt;&lt;
                </button>

                {renderPageNumbers()}

                <button
                  className={styles.button}
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage((prev) => prev + 1)}
                >
                  &gt;&gt;
                </button>
              </div>
            </div>
          </>
        )}

        {error && <p className={styles.error}>{error}</p>}
      </div>
    </main>
  );
}