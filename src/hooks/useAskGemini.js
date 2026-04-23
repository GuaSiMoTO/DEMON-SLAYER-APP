async function askGemini(prompt) {
  //Traemos la API KEY de .env
  const API_KEY = import.meta.env.VITE_API_GEMINI_KEY;

  const MODEL = "gemini-3-flash-preview"; 
  const URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${API_KEY}`;
  
  // Opcional: Si el prompt viene vacío, no gastes una llamada a la API
  if (!prompt) return "No me has enviado nada";
  
  // estructura del json que hay que enviarle a la API dentro está el prompt que llega como parámetro en la función
  const payload = {
    contents: [
      {
        parts: [
          { text: prompt } // prompt aquí! tu mensaje para pasarselo a la IA
        ]
      }
    ]
  };
  try {
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) { // Aquí si la respuesta no es OK (si falla) da mensaje de ERROR
      const errorData = await response.json();
      throw new Error(`Error: ${response.status} - ${errorData.error.message}`);
    }
    
    //obtenemos la repuesta en .json() a data
    const data = await response.json();
    
    // La respuesta de Gemini viene en una estructura anidada:
    // candidates -> content -> parts -> [0].text
    const textResponse = data.candidates[0].content.parts[0].text; //aquí para obtener directamente el texto que te envia como respuesta la IA GEMINI
    console.log("Tu respuesta de GEMINI:", textResponse); //esto es para imprimir la respuesta y ver funciona bien el return
    return textResponse; // aqui devolvemos el resultado de la IA GEMINI directo ya en texto

  } catch (error) { // aqui tienes que cambiar los errores por los tuyos igual que añadir el finally: etc...
    console.error("Fallo al llamar a Gemini:", error);
  }
}
