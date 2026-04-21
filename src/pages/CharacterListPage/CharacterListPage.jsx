import { useState, useEffect } from "react";
import useCharacterSearch from "../../hooks/useCharacterSearch"; // Tu hook
import CharacterCard from "../../components/CharacterCard/CharacterCard";
import styles from "./CharacterListPage.module.css";

export default function CharacterListPage() {
  const { characters, loading, error, search } = useCharacterSearch();
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 9; // Supongamos que la API tiene 20 páginas

  // 1. Efecto para disparar la búsqueda cuando cambie la página
  useEffect(() => {
    search({ page: currentPage });
  }, [currentPage, search]);

  // 2. Lógica para los números de página (Ventana deslizante)
  const renderPageNumbers = () => {
    const pages = [];
    const range = 2; // Cuántos números mostrar a los lados de la página actual

    for (
      let i = Math.max(1, currentPage - range);
      i <= Math.min(totalPages, currentPage + range);
      i++
    ) {
      pages.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          className={
            currentPage === i
              ? `${styles.button} ${styles.active}`
              : styles.button
          }
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
        {loading && <p>Cargando personajes...</p>}
        {error && <p>{error}</p>}

        <div className={styles["list-container"]}>
          {characters.map((char) => (
            <CharacterCard key={char.id} character={char} />
          ))}
        </div>

        {/* --- PAGINACIÓN --- */}
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
      </div>
    </main>
  );
}
