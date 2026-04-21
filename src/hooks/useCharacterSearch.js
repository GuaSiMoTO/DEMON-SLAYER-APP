import { useState, useCallback } from "react";

/* ─── Constante: URL base de la API ─────────────────────────────────────── */

const API_BASE = import.meta.env.VITE_DEMON_SLAYER_API;

export default function useCharacterSearch() {
  /* ── Estado local del hook ──────────────────────────────────────────── */
  const [characters, setCharacters] = useState([]); // Resultados de la búsqueda
  const [loading, setLoading] = useState(false); // ¿Petición en vuelo?
  const [error, setError] = useState(null); // Mensaje de error

  /* ── Función de búsqueda ─────────────────────────────────────────────── */

  //   Buscamos por número de páginas, por defecto pagina 1

  const search = useCallback(
    async ({ page = 1, name = '', race = '', combat_style = '' } = {}) => { //por si llaman a search sin parámetros válidos
     
      // Si API_BASE es undefined, ni siquiera intentamos el fetch
      if (!API_BASE) {
        setError("Error: La URL de la API no está configurada en el .env");
        return;
      }

      /* Iniciamos la petición: activamos loading y limpiamos errores previos */
      setLoading(true);
      setError(null);

      try {
        // Construimos la URL con múltiples parámetros
        // Si un parámetro está vacío, la API generalmente lo ignora
        const url = `${API_BASE}?page=${page}&name=${name}&race=${race}&combat_style=${combat_style}`;
        
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
    },
    [API_BASE],
  ); // Sin dependencias: la función no depende de estado externo

  /* ── Valores devueltos por el hook ───────────────────────────────────── */
  return { characters, loading, error, search };
}
