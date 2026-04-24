import { renderHook, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { CharacterContext } from "../../context/CharacterContext";
import useCharacterSearch from "../../hooks/useCharacterSearch";

describe("useCharacterSearch", () => {
  // Mockeamos las funciones del contexto
  const mockContext = {
    setCharacters: vi.fn(),
    setLoading: vi.fn(),
    setError: vi.fn(),
    setTotalPages: vi.fn(),
  };

  // Wrapper para proveer el contexto al hook
  const wrapper = ({ children }) => (
    <CharacterContext.Provider value={mockContext}>
      {children}
    </CharacterContext.Provider>
  );

  beforeEach(() => {
    vi.clearAllMocks();
    // Simulamos la variable de entorno de Vite
    vi.stubEnv("VITE_DEMON_SLAYER_API", "https://api-fake.com/chars");
  });

  it("debe buscar personajes y actualizar el contexto exitosamente", async () => {
    // Simulamos una respuesta exitosa de fetch
    const mockData = {
      content: [{ id: 1, name: "Tanjiro" }],
      pagination: { totalPages: 5 },
    };

    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockData),
      }),
    );

    const { result } = renderHook(() => useCharacterSearch(), { wrapper });

    // Ejecutamos la función search
    await result.current.search({ name: "Tanjiro" });

    // Aserciones
    expect(mockContext.setLoading).toHaveBeenCalledWith(true);
    expect(mockContext.setCharacters).toHaveBeenCalledWith(mockData.content);
    expect(mockContext.setTotalPages).toHaveBeenCalledWith(5);
    expect(mockContext.setLoading).toHaveBeenCalledWith(false);
  });

  it("debe manejar errores cuando la API falla", async () => {
    // Simulamos que la API responde con un error 500
    global.fetch = vi.fn(() => Promise.resolve({ ok: false, status: 500 }));

    const { result } = renderHook(() => useCharacterSearch(), { wrapper });

    // Ejecutamos la búsqueda
    await result.current.search();

    // Verificamos que la ÚLTIMA vez que se llamó a setError fue con el mensaje del catch
    expect(mockContext.setError).toHaveBeenLastCalledWith(
      "Error al conectar con la API. Comprueba tu conexión.",
    );

    // Verificamos que se limpiaron los personajes
    expect(mockContext.setCharacters).toHaveBeenCalledWith([]);
    expect(mockContext.setLoading).toHaveBeenCalledWith(false);
  });
});
