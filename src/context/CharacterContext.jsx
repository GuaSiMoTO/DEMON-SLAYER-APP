import { createContext, useState } from "react";

// Creamos el contexto
export const CharacterContext = createContext();

// Creamos el componente Proveedor (Provider)
export function CharacterProvider({ children }) {
  /* ── Estado global que antes estaba en el hook ──────────────── */
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(0);

  // Todo lo que pongamos en este objeto 'value' estará disponible en toda la app
  const value = {
    characters,
    setCharacters,
    loading,
    setLoading,
    error,
    setError,
    totalPages,
    setTotalPages,
  };

  return (
    <CharacterContext.Provider value={value}>
      {children}
    </CharacterContext.Provider>
  );
}