import { useState, useCallback } from "react";

/* ─── Constante: URL base de la API ─────────────────────────────────────── */

const API_BASE = import.meta.env.VITE_DEMON_SLAYER_API;

export function useDemonSearch() {
  /* ── Estado local del hook ──────────────────────────────────────────── */
  const [characters, setCharacters] = useState([]); // Resultados de la búsqueda
  const [loading, setLoading] = useState(false); // ¿Petición en vuelo?
  const [error, setError] = useState(null); // Mensaje de error

  /* ── Función de búsqueda ─────────────────────────────────────────────── */

  //   Buscamos por número de páginas, por defecto pagina 1

  const search = useCallback(async (page = 1) => {
    // Si API_BASE es undefined, ni siquiera intentamos el fetch
    if (!API_BASE) {
      setError("Error: La URL de la API no está configurada en el .env");
      return;
    }

    /* Iniciamos la petición: activamos loading y limpiamos errores previos */
    setLoading(true);
    setError(null);

    try {
      /*
        fetch() es la API nativa del navegador para hacer peticiones HTTP.
        Devuelve una Promise que resolvemos con await.
        La URL incluye name y el número de página (page=).
        encodeURIComponent escapa caracteres especiales en el query.
      */
      const url = `${API_BASE}?page=${page}`;
      const response = await fetch(url);

      // Si la respuesta HTTP no es 2xx, lanzamos un error
      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }
      const data = await response.json();

      if (data && data.content) {
        // Éxito: guardamos los resultados
        setCharacters(data.content);
      } else {
        // La API nos indica que no encontró resultados
        setError("No se encontraron resultados");
        setCharacters([]);
      }
    } catch (err) {
      setError("Error al conectar con la API. Comprueba tu conexión.");
      setCharacters([]);

      console.error("useDemonSearch error:", err); // Log para debugging
    } finally {
      /*
        finally siempre se ejecuta, haya error o no.
        Aquí apagamos el indicador de carga.
      */
      setLoading(false);
    }
  }, []); // Sin dependencias: la función no depende de estado externo

  /* ── Valores devueltos por el hook ───────────────────────────────────── */
  return { characters, loading, error, search };
}

/* ─── Función auxiliar: obtener detalles de una película por ID ─────────── */
/*
  Esta función NO es un hook (no usa useState/useEffect),
  sino una función async regular que los componentes pueden importar.
*/
export async function fetchCharacterByName(characterName) {
  const url = `${API_BASE}?name=${characterName}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Error HTTP: ${response.status}`);
  }

  const data = await response.json();

  if (data.content && data.content.length > 0) {
    return data; // Objeto con todos los detalles del personaje
  }

  throw new Error("Personaje no encontrada");
}
