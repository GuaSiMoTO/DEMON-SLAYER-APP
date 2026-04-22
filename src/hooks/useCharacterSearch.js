import { useContext, useCallback } from "react";
import { CharacterContext } from "../context/CharacterContext";
/* ─── Constante: URL base de la API ─────────────────────────────────────── */

const API_BASE = import.meta.env.VITE_DEMON_SLAYER_API;

export default function useCharacterSearch() {
  // Extraemos las funciones para actualizar el estado del contexto
  const { setCharacters, setLoading, setError, setTotalPages } =
    useContext(CharacterContext);

  //   Buscamos por número de páginas, por name, por race o por combat_style (por defecto pagina 1)

  const search = useCallback(
    async ({ page = 1, name = "", race = "", combat_style = "" } = {}) => {
      //por si llaman a search sin parámetros válidos

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

        // Verificamos que 'content' exista y tenga datos
        if (data && data.content && data.content.length > 0) {
          // Guardamos los personajes (o el personaje único)
          setCharacters(data.content);

          /* 2. MANEJO DE LA PAGINACIÓN:
          Si existe data.pagination, usamos sus totalPages.
          Si NO existe (porque es un personaje único), ponemos 1 por defecto.
          */
          const total = data.pagination ? data.pagination.totalPages : 1;
          setTotalPages(total);

        } else {
          // La API nos indica que no encontró resultados
          setError("No se encontraron resultados");
          setCharacters([]);
          setTotalPages(0);
        }
      } catch (err) {
        setError("Error al conectar con la API. Comprueba tu conexión.");
        setCharacters([]);
        setTotalPages(0);

        console.error("useDemonSearch error:", err); // Log para debugging
      } finally {
        /*
        finally siempre se ejecuta, haya error o no.
        Aquí apagamos el indicador de carga.
      */
        setLoading(false);
      }
    },
    [setCharacters, setLoading, setError, setTotalPages], // Dependencias del useCallback
  );

  /* devolvemos la función de buscar en el HOOK */
  return { search };
}
