import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import askGemini from "../../hooks/useAskGemini";

// fetch ficticio
const mockFetch = vi.fn();
vi.stubGlobal("fetch", mockFetch);
 
// Helper: respuesta OK simulada de la API de Gemini 
const makeGeminiResponse = (text) => ({
  candidates: [
    {
      content: {
        parts: [{ text }],
      },
    },
  ],
});
 
//  Helper: construye un objeto Response falso 
const fakeResponse = ({ ok = true, status = 200, body }) =>
  Promise.resolve({
    ok,
    status,
    json: () => Promise.resolve(body),
  });
 

describe("askGemini", () => {
  beforeEach(() => {
    vi.clearAllMocks(); // limpiamos el historial de mocks antes
  
  });

  afterEach(() => {
    vi.restoreAllMocks(); //Restuaramos los mocks después de cada test
  });
 
  //  Llamada sin argumento
  it("devuelve mensaje por defecto cuando no se pasa argumento", async () => {
    const result = await askGemini();
    expect(result).toBe("No me has enviado nada");
    expect(mockFetch).not.toHaveBeenCalled();
  });
 
  it("devuelve mensaje por defecto cuando se pasa string vacío", async () => {
    const result = await askGemini("");
    expect(result).toBe("No me has enviado nada");
    expect(mockFetch).not.toHaveBeenCalled();
  });
 
  it("devuelve mensaje por defecto cuando se pasa null", async () => {
    const result = await askGemini(null);
    expect(result).toBe("No me has enviado nada");
    expect(mockFetch).not.toHaveBeenCalled();
  });
 
  // Llamada exitosa 
  it("retorna el texto de la respuesta de Gemini en una llamada exitosa", async () => {
    const expectedText = "Tanjiro Kamado es el protagonista de Demon Slayer.";
    mockFetch.mockReturnValueOnce(
      fakeResponse({ body: makeGeminiResponse(expectedText) })
    );
 
    const result = await askGemini("¿Quién es Tanjiro?");
    expect(result).toBe(expectedText);
  });
 
  
 
  it("envía el Content-Type correcto en la cabecera", async () => {
    mockFetch.mockReturnValueOnce(
      fakeResponse({ body: makeGeminiResponse("ok") })
    );
 
    await askGemini("pregunta de prueba");
 
    const [, options] = mockFetch.mock.calls[0];
    expect(options.headers["Content-Type"]).toBe("application/json");
  });
 
  it("incluye la pregunta del usuario en el payload enviado", async () => {
    const pregunta = "¿Quién es Nezuko?";
    mockFetch.mockReturnValueOnce(
      fakeResponse({ body: makeGeminiResponse("Es la hermana de Tanjiro.") })
    );
 
    await askGemini(pregunta);
 
    const [, options] = mockFetch.mock.calls[0];
    const payload = JSON.parse(options.body);
    const textoEnviado = payload.contents[0].parts[0].text;
    expect(textoEnviado).toContain(pregunta);
  });
 
  
});